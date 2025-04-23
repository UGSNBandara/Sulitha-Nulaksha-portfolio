'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { getAllExperiences } from '@/data/experience';
import Image from 'next/image';

export default function Experience() {
  const experiences = getAllExperiences();

  return (
    <main className="min-h-screen bg-gray-50/50 dark:bg-dark py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Experience Timeline</h1>
          <p className="text-gray-600 dark:text-gray-300">My complete journey and achievements</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full z-10"></div>

                {/* Content */}
                <div className={`w-5/12 ${
                  index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'
                }`}>
                  <div 
                    className={`bg-white dark:from-dark-light dark:to-${item.gradient.from.replace('from-', '')}/10
                      p-6 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 
                      border-2 border-opacity-20 ${item.gradient.from.replace('from-', 'border-')}`}
                  >
                    <div className="relative h-48 mb-4 rounded-t-lg overflow-hidden">
                      <Image
                        src={item.image || "/experiences/default-experience.svg"}
                        alt={`${item.organization} - ${item.title}`}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          if (!e.currentTarget.src.includes('default-experience.svg')) {
                            console.error(`Failed to load image: ${item.image}`);
                            e.currentTarget.src = "/experiences/default-experience.svg";
                          }
                        }}
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                        <div className={`text-sm font-semibold text-white ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>{item.year}</div>
                        <h3 className={`text-xl font-bold text-white ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>{item.title}</h3>
                      </div>
                    </div>
                    <div className={`text-gray-600 dark:text-gray-300 mb-2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>{item.organization}</div>
                    <p className={`text-gray-500 dark:text-gray-400 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 