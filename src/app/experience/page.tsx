'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { getAllExperiences } from '@/data/experience';
import Image from 'next/image';
import React from "react";

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

        <div className="relative max-w-6xl mx-auto">return (
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

              <div className="relative max-w-6xl mx-auto">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary/20"></div>

                {/* Timeline items */}
                <div className="space-y-12">
                  {experiences.map((item, index) => (
                      <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 }}
                          viewport={{ once: true }}
                          className={`relative flex items-center ${
                              index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                          }`}
                      >
                        {/* Timeline dot - left on mobile, center on desktop */}
                        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full z-10"></div>

                        {/* Content - full width on mobile, half width on desktop */}
                        <div className={`w-full md:w-5/12 pl-12 md:pl-8 ${
                            index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                        }`}>
                          <div
                              className={`bg-gradient-to-br from-white to-${item.gradient.from.replace('from-', '')}/5
                        dark:from-dark-light dark:to-${item.gradient.from.replace('from-', '')}/10
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
                                <div className="text-sm font-semibold text-white">{item.year}</div>
                                <h3 className="text-xl font-bold text-white">{item.title}</h3>
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

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${
                        index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                    }`}
                >
                  {/* Timeline dot - left on mobile, center on desktop */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full z-10"></div>

                  {/* Content - full width on mobile, half width on desktop */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-8 ${
                      index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <div
                        className={`bg-gradient-to-br from-white to-${item.gradient.from.replace('from-', '')}/5
                        dark:from-dark-light dark:to-${item.gradient.from.replace('from-', '')}/10
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
                          <div className="text-sm font-semibold text-white">{item.year}</div>
                          <h3 className="text-xl font-bold text-white">{item.title}</h3>
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