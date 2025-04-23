'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { getAllProjects } from '@/data/projects';
import Image from 'next/image';

export default function Projects() {
  const projects = getAllProjects();

  return (
    <main className="min-h-screen bg-gray-50/50 dark:bg-dark py-20">
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
            >
              <div 
                className={`bg-white dark:bg-dark-light
                  p-6 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 
                  border-2 border-opacity-20 ${project.gradient.from.replace('from-', 'border-')}`}
              >
                <div className="relative h-48 overflow-hidden rounded-t-lg">
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
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className={`px-3 py-1 text-sm rounded-full bg-opacity-10 border border-opacity-20
                          ${project.gradient.from.replace('from-', 'bg-')}
                          ${project.gradient.from.replace('from-', 'border-')}
                          ${project.gradient.from.replace('from-', 'text-')}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={project.link}
                    className={`inline-flex items-center ${project.gradient.from.replace('from-', 'text-')} hover:opacity-80 transition-colors`}
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
} 