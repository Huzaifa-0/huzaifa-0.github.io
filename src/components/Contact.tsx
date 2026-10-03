import { useState, type FormEvent } from 'react';
import { Toaster, toast } from 'sonner';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Send } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initialState: FormState = { name: '', email: '', message: '' };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {};
  if (values.name.trim().length < 2) errors.name = 'Name must be at least 2 characters';
  if (!EMAIL_RE.test(values.email)) errors.email = 'Please enter a valid email address';
  if (values.message.trim().length < 10) errors.message = 'Message must be at least 10 characters';
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const accessKey = import.meta.env.PUBLIC_WEB3FORMS_KEY as string | undefined;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fieldErrors = validate(values);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    if (!accessKey) {
      toast.error('Contact form is not configured yet.', {
        description: 'Missing PUBLIC_WEB3FORMS_KEY — see README for setup.',
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Portfolio contact from ${values.name}`,
          from_name: values.name,
          ...values,
        }),
      });
      const result = await res.json();

      if (result.success) {
        toast.success('Message sent successfully!', {
          description: 'I will get back to you as soon as possible.',
        });
        setValues(initialState);
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch {
      toast.error('Something went wrong.', {
        description: 'Please try again, or email me directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-secondary/30 backdrop-blur-sm p-8 rounded-lg border border-border/40">
      <Toaster />
      <h3 className="text-xl font-semibold mb-6">Send a Message</h3>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div className="space-y-2">
          <Label htmlFor="contact-name">Name</Label>
          <Input
            id="contact-name"
            value={values.name}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
            placeholder="Your name"
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="text-sm font-medium text-destructive">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-email">Email</Label>
          <Input
            id="contact-email"
            type="email"
            value={values.email}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="text-sm font-medium text-destructive">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-message">Message</Label>
          <Textarea
            id="contact-message"
            value={values.message}
            onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
            placeholder="Tell me about your project..."
            rows={5}
            aria-invalid={!!errors.message}
          />
          {errors.message && <p className="text-sm font-medium text-destructive">{errors.message}</p>}
        </div>

        <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto gap-2">
          <Send className="h-4 w-4" />
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
}
