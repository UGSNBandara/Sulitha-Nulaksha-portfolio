'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Experience() {
  const experiences = [
    {
      year: "2024",
      title: "Lead Organizer",
      organization: "HaXtreme 3.0 Hackathon",
      description: "Led the organization of a major hackathon event, coordinating teams and resources."
    },
    {
      year: "2023",
      title: "Volunteer",
      organization: "Zero Plastic Initiative",
      description: "Contributed to environmental sustainability efforts through community engagement."
    },
    {
      year: "2023",
      title: "Participant",
      organization: "IEEEXtreme Coding Competition",
      description: "Competed in the prestigious IEEE coding competition, showcasing technical skills."
    },
    {
      year: "2022",
      title: "Team Lead",
      organization: "University Tech Club",
      description: "Led a team of students in developing innovative tech solutions for campus challenges."
    },
    {
      year: "2022",
      title: "Mentor",
      organization: "Code for Good",
      description: "Mentored junior students in programming and software development fundamentals."
    },
    {
      year: "2021",
      title: "Student Ambassador",
      organization: "Tech Education Initiative",
      description: "Promoted technology education and coding literacy among high school students."
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
                    <div className={`h-32 relative mb-4 rounded-t-xl ${
                      index === 0 ? 'bg-gradient-to-r from-blue-500 to-purple-600' :
                      index === 1 ? 'bg-gradient-to-r from-green-500 to-teal-600' :
                      index === 2 ? 'bg-gradient-to-r from-orange-500 to-red-600' :
                      index === 3 ? 'bg-gradient-to-r from-pink-500 to-purple-600' :
                      index === 4 ? 'bg-gradient-to-r from-yellow-500 to-orange-600' :
                      'bg-gradient-to-r from-indigo-500 to-purple-600'
                    }`}>
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