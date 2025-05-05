'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import {
    SiLinkedin,
    SiWhatsapp,
    SiGithub,
} from 'react-icons/si';
import React, { useEffect, useState } from "react";

export default function Agree_Detect() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Handle client-side initialization
    useEffect(() => {
        setMounted(true);
    }, []);

    const currentProject = {
        title: 'Potato & Bell Pepper Disease Predictor',
        image: '/projects/Agree_detect/cover.jpg',
        description: 'An AI-based system to classify crops and predict diseases for Potato and Bell Pepper using TensorFlow and Suggest Fertilizers.',
        tags: ['React.js', 'FastAPI', 'TensorFlow'],
        gradient: { from: 'from-green-500', to: 'to-yellow-500' },
        links: {
            github: 'https://github.com/UGSNBandara/Agri-Detect',
            linkedin: 'https://www.linkedin.com/posts/nulaksha-bandara_deeplearning-tensorflow-reactjs-activity-7283206658623774720-Wn4m',
            whatsapp: 'https://wa.me/94714262972',
        },
    };

    // Don't render anything until mounted
    if (!mounted) {
        return null;
    }

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

                {/* Project Cover Image */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative h-80 w-full mb-8 overflow-hidden rounded-xl"
                >
                    <Image
                        src={currentProject.image}
                        alt={currentProject.title}
                        fill
                        className="object-cover"
                        priority
                        onError={(e) => {
                            if (!e.currentTarget.src.includes('default-project.svg')) {
                                console.error(`Failed to load image: ${currentProject.image}`);
                                e.currentTarget.src = '/projects/default-project.svg';
                            }
                        }}
                    />
                </motion.div>

                {/* Grid Layout for Project Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Technologies Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-white dark:bg-dark-light p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <h2 className="text-2xl font-semibold mb-4 flex items-center">
                            <span className="mr-2">🛠️</span> Technologies Used
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {currentProject.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className={`px-3 py-1 text-sm rounded-full bg-opacity-10 border border-opacity-20
                                    ${currentProject.gradient.from.replace('from-', 'bg-')}
                                    ${currentProject.gradient.from.replace('from-', 'border-')}
                                    ${currentProject.gradient.from.replace('from-', 'text-')}`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Project Links Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
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
                                className="w-12 h-12 bg-[#ffffff] rounded-full flex items-center justify-center text-[#0077B5] hover:bg-[#0077B5] hover:text-white transition-colors"
                            >
                                <SiLinkedin className="w-6 h-6" />
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.1, rotate: 360 }}
                                transition={{ duration: 0.5 }}
                                href={currentProject.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-[#ffffff] rounded-full flex items-center justify-center text-[#000000] hover:bg-[#ffffff] hover:text-white transition-colors"
                            >
                                <SiGithub className="w-6 h-6 text-[#333333]" />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* CNN Models Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="bg-white dark:bg-dark-light p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <h2 className="text-2xl font-semibold mb-4 flex items-center">
                            <span className="mr-2">🤖</span> Trained CNN Models
                        </h2>
                        <div className="space-y-4">
                            <div className="p-4 bg-gray-50 dark:bg-dark rounded-lg">
                                <h3 className="font-semibold text-green-600 dark:text-green-400 mb-2">Bell Pepper Disease Prediction</h3>
                                <p className="text-gray-600 dark:text-gray-300">Identifies and diagnoses diseases in bell pepper leaves with high accuracy.</p>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-dark rounded-lg">
                                <h3 className="font-semibold text-green-600 dark:text-green-400 mb-2">Potato Disease Prediction</h3>
                                <p className="text-gray-600 dark:text-gray-300">Specializes in detecting various potato leaf diseases for targeted interventions.</p>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-dark rounded-lg">
                                <h3 className="font-semibold text-green-600 dark:text-green-400 mb-2">Crop Classification</h3>
                                <p className="text-gray-600 dark:text-gray-300">Distinguishes between potato and bell pepper leaves, ensuring appropriate disease models are applied.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tech Stack Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="bg-white dark:bg-dark-light p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <h2 className="text-2xl font-semibold mb-4 flex items-center">
                            <span className="mr-2">💻</span> Tech Stack
                        </h2>
                        <div className="space-y-4">
                            <div className="p-4 bg-gray-50 dark:bg-dark rounded-lg">
                                <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">React.js - Frontend</h3>
                                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                                    <li>Provides an intuitive interface for users to interact with the tool</li>
                                    <li>Allows users to upload images of crop leaves for analysis</li>
                                    <li>Displays results and insights, including disease predictions and actionable tips</li>
                                    <li>Showcases relevant fertilizer advertisements based on predicted diseases</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-dark rounded-lg">
                                <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">FastAPI - Backend</h3>
                                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                                    <li>Acts as the bridge between the frontend and machine learning models</li>
                                    <li>Processes uploaded leaf images and routes them to appropriate models</li>
                                    <li>Returns predictions and recommendations to the frontend</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>


                    {/* Back to Home Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="col-span-1 md:col-span-2"
                    >
                        <Link
                            href="/"
                            className={`w-full bg-white dark:bg-dark-light p-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group ${currentProject.gradient.from.replace('from-', 'text-')} hover:opacity-80`}
                        >
                            <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
                            <span className="text-lg font-semibold">Back to Home</span>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
