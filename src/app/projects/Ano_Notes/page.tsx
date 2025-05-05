'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import {
    SiGithub,
    SiYoutube,
    SiHuggingface,
} from 'react-icons/si';
import React, { useEffect, useState } from "react";

export default function Ano_Notes() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Handle client-side initialization
    useEffect(() => {
        setMounted(true);
    }, []);

    const currentProject = {
        title: 'Ano Note: Anonymous Messaging Platform with NLP-Powered Harm Detection',
        image: '/projects/Ano_Note/cover2.png',
        description: 'Ano Note is a web application designed to let users receive anonymous messages or notes through a unique link they can share with friends. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js), this project integrates Natural Language Processing (NLP) to enhance user safety by analyzing messages for harmful content.',
        tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'FastAPI', 'NLP', "WordEmbaddings", "TF-IDF"],
        gradient: { from: 'from-blue-500', to: 'to-purple-500' },
        links: {
            github: 'https://github.com/UGSNBandara/AnoNotes_WebApp',
            huggingface: 'https://huggingface.co/spaces/Sulitha/Sinhala_comment_classifier_v1',
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

                {/* Project Cover Video */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative w-full mb-8 overflow-hidden rounded-xl"
                >
                    <iframe
                        width="100%"
                        height="560"
                        src="https://www.youtube.com/embed/D0ovN-djlNE?si=wSzF7HYAJPLmDJbv"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="rounded-xl"
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
                                href={currentProject.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-[#ffffff] rounded-full flex items-center justify-center text-[#000000] hover:bg-[#ffffff] hover:text-white transition-colors"
                            >
                                <SiGithub className="w-6 h-6 text-[#333333]" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1, rotate: 360 }}
                                transition={{ duration: 0.5 }}
                                href={currentProject.links.huggingface}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-[#ffffff] rounded-full flex items-center justify-center text-yellow-500 hover:bg-yellow-500 hover:text-white transition-colors"
                            >
                                <SiHuggingface className="w-6 h-6" />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Key Features Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="bg-white dark:bg-dark-light p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <h2 className="text-2xl font-semibold mb-4 flex items-center">
                            <span className="mr-2">✨</span> Key Features
                        </h2>
                        <div className="space-y-4">
                            <div className="p-4 bg-gray-50 dark:bg-dark rounded-lg">
                                <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Anonymous Messaging</h3>
                                <p className="text-gray-600 dark:text-gray-300">Users can share a unique link to receive notes without revealing the sender's identity.</p>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-dark rounded-lg">
                                <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Advanced Content Analysis</h3>
                                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                                    <li>Trained four separate models using TF-IDF vectorization for text embedding</li>
                                    <li>Integrated a custom SpaCy pipeline to identify predefined bad words in messages</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Technical Implementation Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="bg-white dark:bg-dark-light p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <h2 className="text-2xl font-semibold mb-4 flex items-center">
                            <span className="mr-2">💻</span> Technical Implementation
                        </h2>
                        <div className="space-y-4">
                            <div className="p-4 bg-gray-50 dark:bg-dark rounded-lg">
                                <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Model Architecture</h3>
                                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                                    <li>TF-IDF vectorization for text embeddings</li>
                                    <li>3 Models for English, Sinhala, and Singlish harm detection</li>
                                    <li>1 Model for English Singlish classification</li>
                                    <li>Models has deployed on Hugging Face and can check the performance by clicking the link in the project links section</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-dark rounded-lg">
                                <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Tech Stack</h3>
                                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                                    <li>React.js for intuitive user interface</li>
                                    <li>Node.js and Express.js for backend processes</li>
                                    <li>FastAPI integration for model inference and Spacy pipelines</li>
                                    <li>MongoDB for database storage</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Future Plans Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="bg-white dark:bg-dark-light p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <h2 className="text-2xl font-semibold mb-4 flex items-center">
                            <span className="mr-2">🚀</span> Future Plans
                        </h2>
                        <div className="space-y-4">
                            <div className="p-4 bg-gray-50 dark:bg-dark rounded-lg">
                                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                                    <li>Expand the dataset to improve accuracy</li>
                                    <li>Implement the detection using a fine-tuned model for better performance</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Back to Home Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <Link
                            href="/"
                            className={`w-full h-full bg-white dark:bg-dark-light p-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group ${currentProject.gradient.from.replace('from-', 'text-')} hover:opacity-80`}
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
