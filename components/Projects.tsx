import React from 'react';
import ImageCard from '@/components/ui/image-card';
import { projects } from '@/constants';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import Link from 'next/link';
import { LucideArrowRight } from 'lucide-react';

const Projects = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto max-w-[1300px]">
        <h2 className="text-4xl font-bold mb-8">My Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center mx-auto">
          {projects.map((project, index) => (
            <ImageCard
              key={index}
              caption={`${project.title} - ${project.description}`}
              imageUrl={`/images/${project.imageUrl}`}
              className="w-full bg-[#038C7F]"
            ></ImageCard>
          ))}
        </div>
        <div className="mt-12">
          {projects.map((project, index) => (
            <Card className="w-[500px] bg-[#038C7F] h-full pt-0" key={index}>
              <CardContent className="p-0">
                <Image
                  src={`/images/${project.imageUrl}`}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="aspect-4/3 object-cover"
                />
                {/* <CardTitle>{project.title}</CardTitle> */}
                {/* <CardDescription>{project.description}</CardDescription> */}
              </CardContent>
              <CardFooter>
                <div className="group">
                  <h2 className="text-xl">{project.title}</h2>
                  <p className="group-hover:hidden transition-all font-normal text-sm mt-2">
                    {project.description}
                  </p>
                  <div>
                    <Link
                      href={project.link}
                      className="hidden group-hover:block transition-all mt-2"
                    >
                      Learn more
                    </Link>
                    <LucideArrowRight className="hidden group-hover:block transition-all mt-2 text-lg" />
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
