'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { SiLinkedin } from 'react-icons/si';
import React, { useEffect, useState } from 'react';

export default function CarController() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentProject = {
    title: 'Car Driving Game Controller Using YOLOv8 and OpenCV',
    description:
      'I built a gaming controller using regiform (foam materials) and AI! This project combines YOLOv8n with OpenCV to create a fully functional controller with a steering wheel, gear, and brake system.',
    image: '/projects/CarControler/carcontroller.png',
    tags: ['YOLOv8', 'OpenCV', 'Roboflow', 'Computer Vision'],
    gradient: { from: 'from-red-500', to: 'to-orange-600' },
    links: {
      linkedin:
        'https://www.linkedin.com/posts/nulaksha-bandara_gamecontroller-yolov8-opencv-activity-7334565205672165380-hgP5?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEE-oooBcn0eeClVG7GOgGm7KNxyoCX_OQo',
      wandb: 'https://wandb.ai/nulakshastudy19-university-of-ruhuna/YOLOv8?nw=nwusernulakshastudy19',
      roboflow: 'https://universe.roboflow.com/sulithasroboflow/driving-controller',
    },
    embedIframe:
      '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7334563296475258880?compact=1" height="399" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
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
              <li>The steering wheel, gear, and brake are handcrafted from regiform (foam materials).</li>
              <li>Movements are detected by a camera in real-time.</li>
              <li>YOLOv8n model (trained with Roboflow) identifies control movements.</li>
              <li>Detected movements are converted into game input commands.</li>
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

          {/* Training Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white dark:bg-dark-light p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <span className="mr-2">📈</span> Training Process
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The YOLOv8n model was trained to recognize control movements using annotated datasets from Roboflow.
            </p>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 dark:bg-dark rounded-lg">
                <h4 className="font-semibold text-red-600 dark:text-red-400 mb-1">Training Report</h4>
                <a
                  href={currentProject.links.wandb}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                >
                  View on Weights & Biases →
                </a>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-dark rounded-lg">
                <h4 className="font-semibold text-red-600 dark:text-red-400 mb-1">Dataset</h4>
                <a
                  href={currentProject.links.roboflow}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                >
                  View on Roboflow →
                </a>
              </div>
            </div>
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