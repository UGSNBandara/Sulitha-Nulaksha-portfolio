'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { SiGithub, SiAndroid, SiApple } from 'react-icons/si';
import React, { useEffect, useState } from "react";

export default function To_Doo() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Handle client-side initialization
    useEffect(() => {
        setMounted(true);
    }, []);

    const currentProject = {
        title: 'To Doo: Task Management Mobile App',
        image: '/projects/To_Doo/cover.png',
        description: 'To Doo is a task management mobile application built with React Native and Expo to help users efficiently organize their tasks and track their productivity. Its intuitive design and practical features aim to enhance time management and boost performance.',
        tags: ['React Native', 'Expo', 'Mobile Development'],
        gradient: { from: 'from-orange-500', to: 'to-red-500' },
        links: {
            github: 'https://github.com/UGSNBandara/To_doo_ReactNative',
            android: 'https://drive.google.com/drive/folders/1TUWgr3amH1zp3YLz60WbGKQaabiw0JOO?usp=sharing',
            ios: '#', // Placeholder for iOS link
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
                                href={currentProject.links.android}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-[#ffffff] rounded-full flex items-center justify-center text-[#3DDC84] hover:bg-[#3DDC84] hover:text-white transition-colors"
                            >
                                <SiAndroid className="w-6 h-6" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1, rotate: 360 }}
                                transition={{ duration: 0.5 }}
                                href={currentProject.links.ios}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-[#ffffff] rounded-full flex items-center justify-center text-[#000000] hover:bg-[#000000] hover:text-white transition-colors"
                            >
                                <SiApple className="w-6 h-6" />
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
                                <h3 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">Task Management</h3>
                                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                                    <li>Users can easily add tasks with deadlines</li>
                                    <li>Tasks are sorted by deadlines for better prioritization</li>
                                    <li>Urgent tasks are highlighted in red for visibility</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-dark rounded-lg">
                                <h3 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">Completed Tasks Overview</h3>
                                <p className="text-gray-600 dark:text-gray-300">Completed tasks are stored in a dedicated tab, sorted by completion time for easy progress tracking.</p>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-dark rounded-lg">
                                <h3 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">Profile and Performance Insights</h3>
                                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                                    <li>Profile photo and personal details display</li>
                                    <li>Performance Grid showing pending and completed tasks</li>
                                    <li>Overall performance percentage based on completion rates</li>
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
                                <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2">React Native with Expo</h3>
                                <p className="text-gray-600 dark:text-gray-300">Cross-platform functionality ensuring seamless experience on both Android and iOS devices.</p>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-dark rounded-lg">
                                <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2">Dynamic Features</h3>
                                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                                    <li>Dynamic task sorting by deadlines</li>
                                    <li>Visual highlighting for urgent tasks</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-dark rounded-lg">
                                <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2">User-Centric Design</h3>
                                <p className="text-gray-600 dark:text-gray-300">Simple and functional interface for quick task management and progress tracking.</p>
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
                            <span className="mr-2">🚀</span> Future Enhancements
                        </h2>
                        <div className="space-y-4">
                            <div className="p-4 bg-gray-50 dark:bg-dark rounded-lg">
                                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                                    <li>Integration with calendars and reminders for better task notifications</li>
                                    <li>Addition of task categories and labels for improved organization</li>
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
