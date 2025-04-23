'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { getAllProjects } from '@/data/projects';
import Image from 'next/image';

export default function Projects() {
  const projects = getAllProjects();

  return (
    <main className="min-h-screen bg-white dark:bg-dark py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">All Projects</h1>
          <p className="text-gray-600 dark:text-gray-300">A collection of my work</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-dark-light rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/projects/default-project.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    if (!e.currentTarget.src.includes('default-project.svg')) {
                      console.error(`Failed to load image: ${project.image}`);
                      e.currentTarget.src = "/projects/default-project.svg";
                    }
                  }}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient.from} ${project.gradient.to} opacity-20`} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-dark rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link 
                  href={project.link}
                  className="inline-block text-primary hover:text-primary/80 transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
} 