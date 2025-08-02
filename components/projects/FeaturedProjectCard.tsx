import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, ArrowRight, Clock, Users } from 'lucide-react';
import { FeaturedProject } from './types';

interface FeaturedProjectCardProps {
  project: FeaturedProject;
  //   onCaseStudyClick: (project: FeaturedProject) => void;
}

const FeaturedProjectCard = ({
  project,
  //   onCaseStudyClick,
}: FeaturedProjectCardProps) => {
  //   const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="group relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 border-2 hover:border-slate-300 transition-all duration-300 cursor-pointer col-span-2 row-span-2 h-full"
      //   onMouseEnter={() => setIsHovered(true)}
      //   onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0 h-full relative">
        {/* Main Image */}
        <div className="relative h-3/5 overflow-hidden">
          <Image
            src={`/images/${project.imageUrl}`}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Featured Badge */}
          <div className="absolute top-4 left-4">
            <Badge className="bg-orange-500 text-white font-semibold px-3 py-1">
              Featured Project
            </Badge>
          </div>

          {/* Quick Stats Overlay */}
          <div className="absolute top-4 right-4 transition-all duration-300 opacity-0 translate-x-4 hover:opacity-100 hover:translate-x-0">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 space-y-2">
              <div className="flex items-center text-sm text-slate-600">
                <Clock className="w-4 h-4 mr-2" />
                {project.caseStudy.timeline}
              </div>
              {project.caseStudy.teamSize && (
                <div className="flex items-center text-sm text-slate-600">
                  <Users className="w-4 h-4 mr-2" />
                  Team of {project.caseStudy.teamSize}
                </div>
              )}
            </div>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Content Section */}
        <div className="p-6 h-2/5 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              {project.title}
            </h3>
            <p className="text-slate-600 font-medium mb-3">{project.tagline}</p>
            <p
              className="text-sm text-slate-600 mb-4 overflow-hidden"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
              }}
            >
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 4).map((tech, index) => (
                <Badge key={index} variant="neutral" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 4 && (
                <Badge variant="neutral" className="text-xs">
                  +{project.technologies.length - 4} more
                </Badge>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <Button
              //   onClick={() => onCaseStudyClick(project)}
              className="bg-slate-900 hover:bg-slate-700 text-white group/btn"
            >
              View Case Study
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
            </Button>

            <div className="flex space-x-2">
              {project.links.live && (
                <Link
                  href={project.links.live}
                  target="_blank"
                  className="p-2 rounded-full bg-slate-200 hover:bg-slate-300 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-slate-600" />
                </Link>
              )}
              {project.links.github && (
                <Link
                  href={project.links.github}
                  target="_blank"
                  className="p-2 rounded-full bg-slate-200 hover:bg-slate-300 transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-600" />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Hover Effect Border */}
        <div className="absolute inset-0 border-2 border-orange-400 rounded-lg transition-opacity duration-300 opacity-0 hover:opacity-100" />
      </CardContent>
    </Card>
  );
};

export default FeaturedProjectCard;
