
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Send, FileDown } from 'lucide-react';
import AnimatedText from './AnimatedText';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Message sent successfully!', {
      description: 'I will get back to you as soon as possible.',
    });
    
    form.reset();
    setIsSubmitting(false);
  };
  
  return (
    <section id="contact" className="section bg-background">
      <div className="container">
        <AnimatedText delay={0.1} className="mb-4">
          <h2 className="section-title text-center">Get in Touch</h2>
        </AnimatedText>
        
        <AnimatedText delay={0.2} className="mb-6">
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </AnimatedText>
        
        <AnimatedText delay={0.3} className="mb-12">
          <p className="section-subtitle text-center mx-auto">
            Have a project in mind or want to chat? Feel free to reach out!
          </p>
        </AnimatedText>
        
        <div className="max-w-3xl mx-auto">
          <AnimatedText delay={0.4} className="space-y-6">
            <div className="bg-secondary/30 backdrop-blur-sm p-8 rounded-lg border border-border/40">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a href="mailto:huzaifa963sy@gmail.com" className="font-medium hover:text-primary transition-colors">
                      huzaifa963sy@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <a href="tel:+971508015860" className="font-medium hover:text-primary transition-colors">
                      +971 50 801 5860
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-6">
                  <h4 className="font-medium">Connect with me</h4>
                  <Button asChild variant="default" size="lg" className="gap-2">
                    <a href="/resume/Huzaifa_Alfahl_Full_Stack_Engineer_Resume.pdf" download="Huzaifa_Alfahl_Full_Stack_Engineer_Resume.pdf">
                      <FileDown className="h-4 w-4" />
                      Download Resume
                    </a>
                  </Button>
                </div>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/Huzaifa-0" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-secondary p-3 rounded-full transition-transform hover:scale-110"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.167 8.839 21.489C9.339 21.579 9.545 21.272 9.545 21.009C9.545 20.775 9.537 20.032 9.532 19.165C6.726 19.758 6.139 17.882 6.139 17.882C5.685 16.728 5.028 16.423 5.028 16.423C4.128 15.784 5.095 15.797 5.095 15.797C6.095 15.867 6.621 16.846 6.621 16.846C7.521 18.33 8.97 17.928 9.562 17.675C9.652 17.015 9.908 16.613 10.191 16.408C7.974 16.204 5.636 15.33 5.636 11.548C5.636 10.399 6.026 9.461 6.641 8.731C6.541 8.479 6.196 7.533 6.74 6.156C6.74 6.156 7.586 5.891 9.522 7.187C10.314 6.967 11.169 6.857 12.018 6.855C12.867 6.858 13.722 6.968 14.515 7.188C16.45 5.892 17.294 6.157 17.294 6.157C17.839 7.535 17.495 8.48 17.394 8.732C18.011 9.461 18.398 10.4 18.398 11.548C18.398 15.341 16.055 16.202 13.834 16.401C14.189 16.652 14.509 17.15 14.509 17.909C14.509 19.005 14.497 20.685 14.497 21.009C14.497 21.275 14.699 21.584 15.207 21.486C19.175 20.161 22.038 16.415 22.038 12.001C22.038 6.477 17.561 2 12.038 2H12Z" fill="currentColor"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/huzayfa-alfahl-7878961b9/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-secondary p-3 rounded-full transition-transform hover:scale-110"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.867 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.4 4.23 7.4 5.368C7.4 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452Z" fill="currentColor"/>
                    </svg>
                  </a>
                  {/* <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-secondary p-3 rounded-full transition-transform hover:scale-110"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23 3.01006C22.0424 3.67552 20.9821 4.19217 19.86 4.53006C19.2577 3.83757 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.28444C14.0247 3.61164 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53006V8.53006C10.2426 8.57562 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.01006C3 4.01006 -1 13.0101 8 17.0101C5.94053 18.408 3.48716 19.109 1 19.0101C10 24.0101 21 19.0101 21 7.51006C20.9991 7.23151 20.9723 6.95365 20.92 6.68006C21.9406 5.67355 22.6608 4.40277 23 3.01006Z" fill="currentColor"/>
                    </svg>
                  </a> */}
                </div>
              </div>
            </div>
          </AnimatedText>
        </div>
          
          {/* Contact Form - Currently Disabled */}
          {/* <AnimatedText delay={0.5} className="space-y-6">
...
          </AnimatedText> */}
      </div>
    </section>
  );
};

export default Contact;
