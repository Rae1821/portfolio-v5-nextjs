import React from 'react';
import FeaturedProjectCard from './FeaturedProjectCard';
import { FeaturedProject } from './types';

// Sample data for the featured project card demo
const sampleFeaturedProject: FeaturedProject = {
  id: 'style-sync',
  title: 'Style Sync',
  tagline: 'Where tech meets style',
  description:
    'A full-stack e-commerce platform that revolutionizes how users discover and purchase fashion items through AI-powered styling recommendations and virtual try-on technology.',
  imageUrl: 'lindas-produce.png', // Using your existing image
  technologies: [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'PostgreSQL',
    'Tailwind CSS',
  ],
  projectType: 'featured',
  caseStudy: {
    problem:
      'Fashion shoppers struggle to visualize how items will look and coordinate with their existing wardrobe',
    solution:
      'Built an AI-powered platform with virtual styling and try-on features',
    impact: '40% increase in conversion rates and 60% reduction in returns',
    timeline: '4 months',
    teamSize: 3,
  },
  links: {
    live: 'https://style-sync-demo.com',
    github: 'https://github.com/your-username/style-sync',
    caseStudy: '/projects/style-sync',
  },
  gridSize: {
    cols: 2,
    rows: 2,
  },
};

const ProjectsDemo = () => {
  //   const handleCaseStudyClick = (project: FeaturedProject) => {
  //     console.log('Opening case study for:', project.title);
  //     // Here you would typically navigate to the case study page or open a modal
  //   };

  return (
    <section className="py-32">
      <div className="container mx-auto max-w-[1300px]">
        <h2 className="text-4xl font-bold mb-8">Featured Project Preview</h2>

        {/* Demo Grid Container */}
        <div className="grid grid-cols-4 grid-rows-2 gap-6 h-[600px]">
          {/* Featured Project Card - Takes up 2x2 space */}
          {/* <FeaturedProjectCard
            project={sampleFeaturedProject}
            // onCaseStudyClick={handleCaseStudyClick}
          /> */}

          {/* Placeholder cards to show the grid layout */}
          <div className="bg-slate-100 rounded-lg border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-500">
            Standard Project Card
          </div>
          <div className="bg-slate-100 rounded-lg border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-500">
            Compact Project Card
          </div>
          <div className="bg-slate-100 rounded-lg border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-500">
            Standard Project Card
          </div>
          <div className="bg-slate-100 rounded-lg border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-500">
            Compact Project Card
          </div>
        </div>

        <div className="mt-8 p-4 bg-orange-50 rounded-lg border border-orange-200">
          <h3 className="font-semibold text-orange-800 mb-2">
            Bento Grid Layout Preview
          </h3>
          <p className="text-orange-700 text-sm">
            This demo shows how the Featured Project Card (Style Sync) takes up
            the large 2x2 space, while other project types will fill the
            remaining grid spaces. The card includes hover effects, technology
            badges, quick stats, and call-to-action buttons.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsDemo;
