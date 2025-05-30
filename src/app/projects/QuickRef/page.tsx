'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import {
    SiStreamlit,
    SiGithub,
} from 'react-icons/si';
import React, { useEffect, useState } from "react";
import LoadingSpinner from '@/components/LoadingSpinner';

export default function QuickRef() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [rating, setRating] = useState(0);
    const [notification, setNotification] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    // Handle client-side initialization
    useEffect(() => {
        setMounted(true);
    }, []);

    const currentProject = {
        title: 'QuickRef URL PDF referencer',
        description: 'A streamlined tool to quickly upload PDFs or URLs, process them, and query their content effortlessly using advanced NLP and vector embeddings.',
        image: '/projects/QuickRef/cover.png',
        tags: ['LangChain', 'Streamlit', 'Python', 'NVIDIA'],
        gradient: { from: 'from-orange-500', to: 'to-red-600' },
        links: {
            github: 'https://github.com/UGSNBandara/QuickRef',
            streamlit: 'https://quick-ref-aaoebeidu562vm8t6nruyx.streamlit.app/',
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
                                href={currentProject.links.streamlit}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-[#ffffff] rounded-full flex items-center justify-center text-[#000000] hover:bg-[#ffffff] hover:text-white transition-colors"
                            >
                                <SiStreamlit className="w-6 h-6 text-[#d42020]" />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Features Box */}
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
                                <h3 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">Document Processing</h3>
                                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                                    <li>Support for PDF documents and URLs</li>
                                    <li>Efficient text extraction and processing</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-dark rounded-lg">
                                <h3 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">Advanced NLP Pipeline</h3>
                                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                                    <li>NVIDIA BGE-M3 Embeddings for high-quality vector representations</li>
                                    <li>FAISS vector database for efficient similarity search</li>
                                    <li>NVIDIA Falcon-7B-Instruct model for accurate responses</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-dark rounded-lg">
                                <h3 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">Enhanced Usability</h3>
                                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                                    <li>Real-time query processing with smart handling of multiple input sources (URLs and PDFs)</li>
                                    <li>Clear display of responses with sources</li>
                                </ul>
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
                                <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">LangChain & Python</h3>
                                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                                    <li>UnstructuredURLLoader for web content extraction</li>
                                    <li>PyPDFLoader for PDF document processing</li>
                                    <li>RecursiveCharacterTextSplitter for intelligent text chunking</li>
                                    <li>RetrievalQAWithSourcesChain for context-aware responses</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-dark rounded-lg">
                                <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Streamlit Interface</h3>
                                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                                    <li>User-friendly web interface</li>
                                    <li>Easy document upload and URL input</li>
                                    <li>Real-time query processing and response display</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Feedback and Future Plans Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {/* Left Column - Future Plans with Back to Home */}
                        <div className="bg-white dark:bg-dark-light p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <h2 className="text-2xl font-semibold mb-4 flex items-center">
                                <span className="mr-2">🚀</span> Future Plans
                            </h2>
                            <div className="space-y-4 mb-6">
                                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                                    <li>📱 Mobile App Development: Creating a sleek, cross-platform mobile application for on-the-go document referencing</li>
                                </ul>
                            </div>
                            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                                <Link
                                    href="/"
                                    className={`block w-full bg-gray-50 dark:bg-dark p-4 rounded-lg hover:shadow-md transition-all flex items-center justify-center gap-2 group ${currentProject.gradient.from.replace('from-', 'text-')} hover:opacity-80`}
                                >
                                    <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
                                    <span className="text-lg font-semibold">Back to Home</span>
                                </Link>
                            </div>
                        </div>

                        {/* Right Column - Feedback Form */}
                        <div className="bg-white dark:bg-dark-light p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <h2 className="text-2xl font-semibold mb-4 flex items-center">
                                <span className="mr-2">💬</span> Project Feedback
                            </h2>
                            {notification.type && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`mb-6 p-4 rounded-lg ${
                                        notification.type === 'success' 
                                            ? 'bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400' 
                                            : 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400'
                                    }`}
                                >
                                    {notification.message}
                                </motion.div>
                            )}
                            <form onSubmit={async (event: React.FormEvent<HTMLFormElement>) => {
                                event.preventDefault();
                                setIsSubmitting(true);
                                setNotification({ type: null, message: '' });
                                
                                const form = event.currentTarget;
                                const formData = new FormData(form);
                                formData.append("access_key", "39e56425-856b-405f-9a59-5e1397e50cb0");
                                formData.append("project", "QuickRef URL PDF referencer");

                                try {
                                    const response = await fetch("https://api.web3forms.com/submit", {
                                        method: "POST",
                                        body: formData
                                    });

                                    const data = await response.json();

                                    if (data.success) {
                                        setNotification({
                                            type: 'success',
                                            message: 'Thank you for your feedback!'
                                        });
                                        form.reset();
                                        setRating(0);
                                    } else {
                                        setNotification({
                                            type: 'error',
                                            message: data.message || 'Something went wrong. Please try again.'
                                        });
                                    }
                                } catch (error) {
                                    console.error("Error submitting form:", error);
                                    setNotification({
                                        type: 'error',
                                        message: 'An error occurred while sending your feedback. Please try again.'
                                    });
                                } finally {
                                    setIsSubmitting(false);
                                }
                            }} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Rate this project (Required)
                                    </label>
                                    <div className="flex gap-2">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                key={star}
                                                type="button"
                                                onClick={() => setRating(star)}
                                                className={`text-2xl transition-colors ${
                                                    rating >= star 
                                                        ? 'text-yellow-400' 
                                                        : 'text-gray-300 dark:text-gray-600'
                                                }`}
                                            >
                                                ★
                                            </button>
                                        ))}
                                    </div>
                                    <input type="hidden" name="rating" value={rating} required />
                                </div>

                                <div>
                                    <label htmlFor="contact" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Contact (Optional)
                                    </label>
                                    <input
                                        type="text"
                                        id="contact"
                                        name="contact"
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors disabled:opacity-50"
                                        placeholder="Email or WhatsApp number"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Feedback (Optional)
                                    </label>
                                    <textarea
                                        id="feedback"
                                        name="feedback"
                                        disabled={isSubmitting}
                                        rows={3}
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors disabled:opacity-50"
                                        placeholder="Share your thoughts, suggestions, or report any issues..."
                                    ></textarea>
                                </div>

                                <motion.button
                                    whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                                    whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                                    type="submit"
                                    disabled={isSubmitting || rating === 0}
                                    className="w-full bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <LoadingSpinner />
                                            Sending...
                                        </>
                                    ) : (
                                        'Submit Feedback'
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
} 