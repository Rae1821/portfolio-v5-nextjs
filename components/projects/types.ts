// Extended project types for the new bento layout
export interface FeaturedProject {
  id: string;
  title: string;
  tagline: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  projectType: 'featured';
  caseStudy: {
    problem: string;
    solution: string;
    impact: string;
    timeline: string;
    teamSize?: number;
  };
  links: {
    live?: string;
    github?: string;
    caseStudy?: string;
  };
  gridSize: {
    cols: 2;
    rows: 2;
  };
}

export interface StandardProject {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  technologies: string[];
  projectType: 'standard';
  caseStudy: {
    problem: string;
    solution: string;
    impact: string;
  };
  links: {
    live?: string;
    github?: string;
  };
  gridSize: {
    cols: 2 | 1;
    rows: 1 | 2;
  };
}

export interface CompactProject {
  id: string;
  title: string;
  shortDescription: string;
  imageUrl: string;
  technologies: string[];
  projectType: 'compact';
  links: {
    live?: string;
    github?: string;
  };
  gridSize: {
    cols: 1;
    rows: 1;
  };
}

export type Project = FeaturedProject | StandardProject | CompactProject;
