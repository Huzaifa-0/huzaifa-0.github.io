
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AnimatedText from './AnimatedText';
import { useIntersectionObserver } from '@/lib/animations';

interface TechCategory {
  name: string;
  items: string[];
}

const Technologies = () => {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
  });
  
  const techCategories: TechCategory[] = [
    {
      name: 'Backend',
      items: ['Nest.js', 'Express.js', 'Laravel', 'Core PHP', 'FastAPI'],
    },
    {
      name: 'Frontend',
      items: ['Vue.js', 'React.js', 'Next.js', 'jQuery UI', 'Tailwind CSS'],
    },
    {
      name: 'Databases',
      items: ['MongoDB', 'Redis', 'Memcached', 'MySQL', 'PostgreSQL'],
    },
    {
      name: 'DevOps',
      items: ['Git', 'GitHub Actions', 'CI/CD', 'Docker', 'Forge', 'PM2'],
    },
    {
      name: 'Cloud',
      items: ['AWS', 'DigitalOcean', 'GCP', 'Scaleway', "Hetzner", "Vercel"],
    },
    {
      name: 'AI/ML',
      items: ['ChatGPT', 'Claude', 'AI Agents', 'fast.ai', 'Hugging Face', 'Redis Vector Search', 'Collaborative Filtering', 'Content Moderation'],
    },
    {
      name: 'CMS',
      items: ['Strapi', 'Nova', 'Filament'],
    },
  ];

  return (
    <section id="technologies" ref={ref} className="section bg-background">
      <div className="container">
        <AnimatedText delay={0.1} className="mb-4">
          <h2 className="section-title text-center">Technologies</h2>
        </AnimatedText>
        
        <AnimatedText delay={0.2} className="mb-6">
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </AnimatedText>
        
        <AnimatedText delay={0.3} className="mb-12">
          <p className="section-subtitle text-center mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </AnimatedText>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue={techCategories[0].name.toLowerCase()} className="w-full">
            <AnimatedText delay={0.4} className="mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full h-auto">
                {techCategories.map((category, index) => (
                  <TabsTrigger 
                    key={category.name} 
                    value={category.name.toLowerCase()}
                    className="py-3 data-[state=active]:text-primary data-[state=active]:shadow-none"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </AnimatedText>
            
            {techCategories.map((category, categoryIndex) => (
              <TabsContent 
                key={category.name} 
                value={category.name.toLowerCase()}
                className="mt-4"
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {category.items.map((tech, techIndex) => (
                    <AnimatedText 
                      key={tech} 
                      delay={(techIndex * 0.1) + 0.5}
                      className="tech-item-container"
                    >
                      <div className="bg-secondary/50 hover:bg-secondary rounded-lg p-4 text-center transition-all duration-300 h-full flex items-center justify-center hover:shadow-md">
                        <span className="font-medium">{tech}</span>
                      </div>
                    </AnimatedText>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
