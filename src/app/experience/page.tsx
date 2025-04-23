'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { getAllExperiences } from '@/data/experience';

export default function Experience() {
  const experiences = getAllExperiences();

  return (
    <main className="min-h-screen bg-white dark:bg-dark py-20">
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
                  <div className="bg-white dark:bg-dark-light p-6 rounded-xl shadow-lg overflow-hidden">
                    <div className={`h-32 relative mb-4 rounded-t-xl bg-gradient-to-r ${item.gradient.from} ${item.gradient.to}`}>
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="text-sm font-semibold">{item.year}</div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                      </div>
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 mb-2">{item.organization}</div>
                    <p className="text-gray-500 dark:text-gray-400">{item.description}</p>
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