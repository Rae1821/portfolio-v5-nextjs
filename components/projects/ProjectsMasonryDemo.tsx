import React from 'react';
// import FeaturedProjectCard from './FeaturedProjectCard';
import { FeaturedProject } from './types';
import { Card, CardHeader, CardTitle } from '../ui/card';
import { projects } from '@/constants';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import Image from 'next/image';

// Sample data with varying content lengths for masonry effect
// const sampleFeaturedProject: FeaturedProject = {
//   id: 'style-sync',
//   title: 'Style Sync',
//   tagline: 'Where tech meets style',
//   description:
//     'A full-stack e-commerce platform that revolutionizes how users discover and purchase fashion items through AI-powered styling recommendations and virtual try-on technology.',
//   imageUrl: 'lindas-produce.png',
//   technologies: [
//     'React',
//     'Next.js',
//     'TypeScript',
//     'Node.js',
//     'PostgreSQL',
//     'Tailwind CSS',
//   ],
//   projectType: 'featured',
//   caseStudy: {
//     problem:
//       'Fashion shoppers struggle to visualize how items will look and coordinate with their existing wardrobe',
//     solution:
//       'Built an AI-powered platform with virtual styling and try-on features',
//     impact: '40% increase in conversion rates and 60% reduction in returns',
//     timeline: '4 months',
//     teamSize: 3,
//   },
//   links: {
//     live: 'https://style-sync-demo.com',
//     github: 'https://github.com/your-username/style-sync',
//     caseStudy: '/projects/style-sync',
//   },
//   gridSize: {
//     cols: 2,
//     rows: 2,
//   },
// };

// Mock project cards with different heights for masonry effect
const ProjectCard = ({
  title,
  description,
  tech,
  imageUrl,
  link,
  github,
}: {
  title: string;
  description: string;
  tech: string[];
  height?: string;
  imageUrl: string;
  link: string;
  github?: string;
}) => (
  <Card className="hover:shadow-none transition-all duration-300 p-4 flex flex-col justify-between group cursor-pointer hover:translate-x-boxShadowX hover:translate-y-boxShadowY">
    <div>
      <Image
        src={imageUrl ?? '/images/lindas-produce.png'}
        alt={title}
        height={2000}
        width={2000}
        className="h-64 w-full bg-slate-100 rounded-md mb-3 flex items-center justify-center text-slate-400 text-sm"
      />
      <CardTitle className="font-semibold text-lg mb-2">{title}</CardTitle>
      <p className="text-sm mb-3 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-1 mb-3">
        {tech.map((t, i) => (
          <Badge
            variant="neutral"
            key={i}
            className="px-2 py-1 rounded text-xs"
          >
            {t}
          </Badge>
        ))}
      </div>
    </div>
    <div className="flex justify-between items-center">
      <Button className="text-sm font-medium">Learn more →</Button>
      <div className="flex space-x-2">
        <button className="p-1 rounded bg-slate-100 hover:bg-slate-200 transition-colors">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2v-2a1 1 0 10-2 0v2H5V7h2a1 1 0 000-2H5z" />
          </svg>
        </button>
        <button className="p-1 rounded bg-slate-100 hover:bg-slate-200 transition-colors">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  </Card>
);

const ProjectsMasonryDemo = () => {
  const handleCaseStudyClick = (project: FeaturedProject) => {
    console.log('Opening case study for:', project.title);
  };

  return (
    <section className="py-32">
      <div className="container mx-auto max-w-[1400px]">
        <h2 className="text-4xl font-bold mb-8">Masonry Layout Preview</h2>

        {/* Masonry Grid Container */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {/* Featured Project - Full width on mobile, spans naturally in masonry */}
          {/* <div className="break-inside-avoid mb-6">
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative h-48">
                <img
                  src="/images/lindas-produce.png"
                  alt="Style Sync"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Style Sync</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Where tech meets style - A full-stack e-commerce platform with
                  AI-powered styling recommendations.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['React', 'Next.js', 'TypeScript', 'Node.js'].map(
                    (tech, i) => (
                      <span
                        key={i}
                        className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
                <button className="w-full bg-slate-900 text-white py-2 px-4 rounded hover:bg-slate-700 transition-colors">
                  View Case Study
                </button>
              </div>
            </div>
          </div> */}

          {/* Regular Project Cards with Varying Heights */}
          {projects.map((project, index) => (
            <div className="break-inside-avoid" key={index}>
              <ProjectCard
                title={project.title}
                description={project.description}
                tech={project.technologies}
              />
            </div>
          ))}
          {/* <div className="break-inside-avoid">
            <ProjectCard
              title="Task Management App"
              description="A collaborative project management tool with real-time updates, drag-and-drop functionality, and team analytics. Built with modern technologies for optimal performance."
              tech={['React', 'Firebase', 'Framer Motion']}
            />
          </div>

          <div className="break-inside-avoid">
            <ProjectCard
              title="Weather Dashboard"
              description="Clean, minimal weather app with beautiful animations."
              tech={['Vue.js', 'API Integration']}
              //   height="h-64"
            />
          </div>

          <div className="break-inside-avoid">
            <ProjectCard
              title="E-commerce Platform"
              description="Full-stack online store with payment processing, inventory management, user authentication, and admin dashboard. Includes advanced search and filtering capabilities."
              tech={['Next.js', 'Stripe', 'PostgreSQL', 'Prisma']}
              //   height="h-96"
            />
          </div> */}

          {/* <div className="break-inside-avoid">
            <ProjectCard
              title="Portfolio Website"
              description="Personal portfolio showcasing development work and design projects."
              tech={['Gatsby', 'GraphQL']}
              //   height="h-56"
            />
          </div>

          <div className="break-inside-avoid">
            <ProjectCard
              title="Social Media Analytics"
              description="Comprehensive analytics dashboard for social media metrics, engagement tracking, and performance insights with data visualization and automated reporting features."
              tech={['React', 'D3.js', 'Express', 'MongoDB']}
              //   height="h-88"
            />
          </div>

          <div className="break-inside-avoid">
            <ProjectCard
              title="Mobile App UI"
              description="Modern mobile interface design with smooth animations and intuitive user experience."
              tech={['React Native', 'Expo']}
              //   height="h-72"
            />
          </div>

          <div className="break-inside-avoid">
            <ProjectCard
              title="API Gateway"
              description="Microservices architecture with robust API management."
              tech={['Node.js', 'Docker', 'AWS']}
              //   height="h-60"
            />
          </div>

          <div className="break-inside-avoid">
            <ProjectCard
              title="Data Visualization Tool"
              description="Interactive charts and graphs for complex data analysis with real-time updates, custom filters, and export capabilities for business intelligence."
              tech={['D3.js', 'Python', 'Flask', 'Chart.js']}
              //   height="h-84"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ProjectsMasonryDemo;
