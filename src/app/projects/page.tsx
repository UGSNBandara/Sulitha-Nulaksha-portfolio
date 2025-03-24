'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: "AI Image Recognition",
      description: "Deep learning model for real-time image classification using TensorFlow",
      image: "/projects/ai-image.jpg",
      tags: ["Python", "TensorFlow", "Deep Learning"],
      link: "#"
    },
    {
      title: "NLP Text Analysis",
      description: "Natural Language Processing tool for sentiment analysis and text classification",
      image: "/projects/nlp-analysis.jpg",
      tags: ["Python", "NLP", "spaCy"],
      link: "#"
    },
    {
      title: "MERN E-commerce",
      description: "Full-stack e-commerce platform with MongoDB, Express, React, and Node.js",
      image: "/projects/ecommerce.jpg",
      tags: ["MERN", "MongoDB", "React"],
      link: "#"
    },
    {
      title: "ML Stock Predictor",
      description: "Machine learning model for stock price prediction using scikit-learn",
      image: "/projects/stock-predict.jpg",
      tags: ["Python", "ML", "scikit-learn"],
      link: "#"
    },
    {
      title: "C++ Game Engine",
      description: "2D game engine implementation using C++ and OpenGL",
      image: "/projects/game-engine.jpg",
      tags: ["C++", "OpenGL", "Game Dev"],
      link: "#"
    }
  ];

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
              <div className="h-48 bg-gradient-to-r from-primary to-purple-600 relative">
                <div className="absolute inset-0 bg-black/20" />
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">
                  {project.title}
                </h3>
              </div>
              <div className="p-6">
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