
import React from 'react';
import AnimatedText from './AnimatedText';
import { useIntersectionObserver } from '@/lib/animations';

const About = () => {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
  });
  
  return (
    <section id="about" ref={ref} className="section bg-secondary/30">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <AnimatedText delay={0.1} className="mb-4">
            <h2 className="section-title text-center">About Me</h2>
          </AnimatedText>
          
          <AnimatedText delay={0.2} className="mb-8">
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <AnimatedText delay={0.3}>
                <p className="text-lg">
                  Experienced Full Stack Software Engineer with 5+ years of delivering high-impact solutions for diverse industries. Proven track record of architecting scalable systems, leading technical migrations, and implementing AI-powered features that drive measurable business results. Successfully reduced operational costs by 60-70%, improved user engagement by 40-45%. Expert at identifying performance bottlenecks and implementing optimizations that significantly enhance user experience. Passionate about mentoring teams, establishing best practices, and transforming complex business requirements into elegant technical solutions that scale.
                </p>
              </AnimatedText>
              
              <AnimatedText delay={0.6}>
                <div className="flex flex-wrap gap-3 mt-4">
                  <span className="tech-item">AI/ML Integration Specialist</span>
                  <span className="tech-item">Microservices Architect</span>
                  <span className="tech-item">Team Leader & Mentor</span>
                  <span className="tech-item">Problem Solver</span>
                  <span className="tech-item">Clean Code Advocate</span>
                  <span className="tech-item">Continuous Learner</span>
                  <span className="tech-item">Team Player</span>
                </div>
              </AnimatedText>
            </div>
            
            <div className="overflow-hidden">
              <div className={`relative transition-all duration-1000 ease-out-expo ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`} style={{ transitionDelay: '300ms' }}>
                <div className="relative z-10">
                  <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                      alt="Coding on a laptop" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-lg"></div>
                </div>
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/20 rounded-lg z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
