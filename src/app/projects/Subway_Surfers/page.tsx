'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { SiLinkedin } from 'react-icons/si';
import React, { useEffect, useState } from 'react';

export default function SubwaySurfersMotionController() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentProject = {
    title: 'Subway Surfers Motion Controller',
    description:
      'Turned gaming into a fun workout by controlling Subway Surfers with real-time pose detection. Using OpenCV and MediaPipe, the system tracks your body movements and translates them into in-game actions, creating an immersive and interactive gaming experience.',
    image: '/projects/SubwaySufer/subwaysufer.png',
    tags: ['Python', 'OpenCV', 'MediaPipe', 'Real-Time Computer Vision'],
    gradient: { from: 'from-purple-500', to: 'to-teal-600' },
    links: {
      linkedin:
        'https://www.linkedin.com/posts/nulaksha-bandara_posedetection-opencv-activity-7332288288591962112-0hoc?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEE-oooBcn0eeClVG7GOgGm7KNxyoCX_OQo',
    },
    embedIframe:
      '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7332286590385381378?compact=1" height="399" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-gray-50/50 dark:bg-dark py-20">
      {/* Theme Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-dark-light hover:bg-gray-300 dark:hover:bg-dark transition-colors duration-300 z-50"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? (
          <SunIcon className="w-6 h-6 text-yellow-500" />
        ) : (
          <MoonIcon className="w-6 h-6 text-gray-700" />
        )}
      </motion.button>

      <div className="container mx-auto px-4">
        {/* Project Header Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-dark-light p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow mb-8"
        >
          <h1 className="text-4xl font-bold mb-4 text-center">{currentProject.title}</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center">{currentProject.description}</p>
          <p className="text-sm text-center mt-2 text-gray-500 dark:text-gray-400">Featured on LinkedIn with 1600+ reactions</p>
        </motion.div>

        {/* Project Demo - Moved to top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-dark-light p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow mb-8"
        >
          <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center">
            <span className="mr-2">🎥</span> Demo
          </h2>
          <div className="w-full flex justify-center">
            <div className="overflow-hidden rounded-lg" style={{ maxWidth: 504 }}>
              {/* eslint-disable-next-line react/no-danger */}
              <div dangerouslySetInnerHTML={{ __html: currentProject.embedIframe }} />
            </div>
          </div>
        </motion.div>

        {/* Grid Layout for Project Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* How It Works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white dark:bg-dark-light p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <span className="mr-2">⚙️</span> How It Works
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
              <li>Real-time pose estimation with MediaPipe to track full-body movements.</li>
              <li>OpenCV processes video frames and maps poses to game controls.</li>
              <li>Control Subway Surfers using gestures for an active, full-body gameplay.</li>
            </ul>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-dark-light p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <span className="mr-2">💻</span> Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {currentProject.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 text-sm rounded-full bg-opacity-10 border border-opacity-20 ${currentProject.gradient.from.replace('from-', 'bg-')} ${currentProject.gradient.from.replace('from-', 'border-')} ${currentProject.gradient.from.replace('from-', 'text-')}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Outcomes / Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white dark:bg-dark-light p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <span className="mr-2">✨</span> Outcome / Highlights
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
              <li>Fun, interactive AI project demonstrating real-time motion tracking.</li>
              <li>Practical application of computer vision in gaming and physical activity.</li>
              <li>Ready for integration into more games and interactive AI projects.</li>
            </ul>
          </motion.div>

          {/* Project Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white dark:bg-dark-light p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <span className="mr-2">🔗</span> Project Links
            </h2>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
                href={currentProject.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#ffffff] rounded-full flex items-center justify-center"
              >
                <SiLinkedin className="w-6 h-6 text-[#0077B5]" />
              </motion.a>
            </div>
          </motion.div>

          {/* Back to Home */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="col-span-1 md:col-span-2 bg-white dark:bg-dark-light p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <Link
                href="/"
                className={`w-full bg-gray-50 dark:bg-dark p-4 rounded-lg hover:shadow-md transition-all flex items-center justify-center gap-2 group ${currentProject.gradient.from.replace('from-', 'text-')} hover:opacity-80`}
              >
                <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
                <span className="text-lg font-semibold">Back to Home</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
