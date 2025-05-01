'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
    SiLinkedin,
    SiWhatsapp,
    SiGithub,
} from 'react-icons/si';
import React from "react";

export default function Agree_Detect() {
    // Example project data
    const currentProject = {
        title: 'Potato & Bell Pepper Disease Predictor',
        image: '/projects/Agree_detect/cover.jpg',
        description: 'An AI-based system to classify crops and predict diseases for Potato and Bell Pepper using TensorFlow and Suggest Fertilizers.',
        tags: ['React.js', 'FastAPI', 'TensorFlow', ],
        gradient: { from: 'from-green-500', to: 'to-yellow-500' },
        links: {
            github: 'https://github.com/your-repo',
            linkedin: 'https://linkedin.com/in/your-profile',
            whatsapp: 'https://wa.me/your-number',
        },
    };


    return (
        <main className="min-h-screen bg-gray-50/50 dark:bg-dark py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold mb-4">{currentProject.title}</h1>
                    <p className="text-gray-600 dark:text-gray-300">{currentProject.description}</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative h-80 w-full mb-8 overflow-hidden rounded-xl shadow-lg"
                >
                    <Image
                        src={currentProject.image}
                        alt={currentProject.title}
                        fill
                        className="object-cover"
                        onError={(e) => {
                            if (!e.currentTarget.src.includes('default-project.svg')) {
                                console.error(`Failed to load image: ${currentProject.image}`);
                                e.currentTarget.src = '/projects/default-project.svg';
                            }
                        }}
                    />
                </motion.div>

                <div className="bg-white dark:bg-dark-light p-8 rounded-xl shadow-lg">

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
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
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            This project represents a milestone in my journey into artificial intelligence, where I combined deep learning
                            with modern web development to create a robust crop analysis tool. The tool leverages state-of-the-art CNN
                            models to analyze crop conditions and provide actionable insights.
                        </p>

                        {/* For larger screens */}
                        <div className="hidden lg:block">
                            <div className="text-gray-600 dark:text-gray-300 mb-6">
                                <h3 className="font-semibold">✅ Trained CNN Models:</h3>
                                <ul className="list-disc pl-5 mt-2 space-y-2">
                                    <li>
                                        <strong>Bell Pepper Disease Prediction:</strong> Identifies and diagnoses diseases in bell pepper
                                        leaves with high accuracy.
                                    </li>
                                    <li>
                                        <strong>Potato Disease Prediction:</strong> Specializes in detecting various potato leaf diseases
                                        for targeted interventions.
                                    </li>
                                    <li>
                                        <strong>Crop Classification:</strong> Distinguishes between potato and bell pepper leaves,
                                        ensuring appropriate disease models are applied.
                                    </li>
                                </ul>
                            </div>

                            <div className="text-gray-600 dark:text-gray-300">
                                <h3 className="font-semibold">💻 Tech Stack Highlights:</h3>
                                <div className="mt-4 space-y-6">
                                    <div>
                                        <h4 className="font-semibold">React.js - Frontend:</h4>
                                        <ul className="list-disc pl-5 mt-2 space-y-2">
                                            <li>
                                                <strong>Role:</strong> Provides an intuitive interface for users to interact with the tool.
                                            </li>
                                            <li>
                                                <strong>Key Features:</strong>
                                                <ul className="list-disc pl-5 mt-2 space-y-2">
                                                    <li>Allows users to upload images of crop leaves for analysis.</li>
                                                    <li>Displays results and insights, including disease predictions and actionable tips.</li>
                                                    <li>
                                                        Showcases relevant fertilizer advertisements based on predicted diseases, aiding
                                                        users with informed product choices.
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">FastAPI - Backend:</h4>
                                        <ul className="list-disc pl-5 mt-2 space-y-2">
                                            <li>
                                                <strong>Role:</strong> Acts as the bridge between the frontend and machine learning models.
                                            </li>
                                            <li>
                                                <strong>Workflow:</strong>
                                                <ol className="list-decimal pl-5 mt-2 space-y-2">
                                                    <li>Accepts uploaded leaf images from the frontend.</li>
                                                    <li>
                                                        Feeds the image into the Crop Classification Model to identify the crop type (Potato
                                                        or Bell Pepper).
                                                    </li>
                                                    <li>
                                                        Routes the image to the corresponding disease prediction model based on the
                                                        classification result.
                                                    </li>
                                                    <li>Returns the prediction and recommendations to the frontend for display.</li>
                                                </ol>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* For smaller screens */}
                        <div className="lg:hidden">
                            <h3 className="font-semibold mb-2">✅ Trained CNN Models:</h3>
                            <p className="mb-4">
                                <strong>Bell Pepper Disease Prediction:</strong> Identifies and diagnoses diseases in bell pepper leaves
                                with high accuracy.
                            </p>
                            <p className="mb-4">
                                <strong>Potato Disease Prediction:</strong> Specializes in detecting various potato leaf diseases for
                                targeted interventions.
                            </p>
                            <p className="mb-4">
                                <strong>Crop Classification:</strong> Distinguishes between potato and bell pepper leaves, ensuring
                                appropriate disease models are applied.
                            </p>

                            <h3 className="font-semibold mb-2">💻 Tech Stack Highlights:</h3>
                            <div className="mb-6">
                                <p className="mb-4">
                                    <strong>React.js - Frontend:</strong> Provides an intuitive interface for users to interact with the
                                    tool. Key features include:
                                </p>
                                <ul className="pl-5 list-none space-y-2">
                                    <li>- Uploading crop leaf images for analysis.</li>
                                    <li>- Displaying results, including predictions and tips.</li>
                                    <li>
                                        - Displaying relevant fertilizer ads based on predicted diseases, aiding informed decision-making.
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p className="mb-4">
                                    <strong>FastAPI - Backend:</strong> Serves as the connection between the frontend and machine learning
                                    models. The workflow includes:
                                </p>
                                <ol className="pl-5 list-none space-y-2">
                                    <li>1. Accepting uploaded leaf images from the frontend.</li>
                                    <li>2. Classifying the crop type using a classification model.</li>
                                    <li>3. Running the image through the relevant disease model.</li>
                                    <li>4. Returning predictions and recommendations to the frontend.</li>
                                </ol>
                            </div>
                        </div>
                    </div>



                    <h2 className="text-2xl font-semibold mb-4">Project Links</h2>
                    <div className="flex space-x-4 mt-6">
                        <motion.a
                            whileHover={{ scale: 1.1, rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            href="https://www.linkedin.com/posts/nulaksha-bandara_deeplearning-tensorflow-reactjs-activity-7283206658623774720-Wn4m?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEE-oooBcn0eeClVG7GOgGm7KNxyoCX_OQo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-[#ffffff] rounded-full flex items-center justify-center text-[#0077B5] hover:bg-[#0077B5] hover:text-white transition-colors"
                        >
                            <SiLinkedin className="w-6 h-6" />
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.1, rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            href="https://github.com/UGSNBandara/Agri-Detect"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-[#ffffff] rounded-full flex items-center justify-center text-[#000000] hover:bg-[#ffffff] hover:text-white transition-colors"
                        >
                            <SiGithub className="w-6 h-6 text-[#333333]" />
                        </motion.a>
                    </div>

                    <br/>
                    <h2 className="text-2xl font-semibold mb-4">Contact me</h2>
                    <div className="flex space-x-4 mt-6">
                        <motion.a
                            whileHover={{ scale: 1.1, rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            href="https://wa.me/94714262972"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-[#ffffff] rounded-full flex items-center justify-center text-green-400 hover:bg-green-400/10 hover:text-white transition-colors"
                        >
                            <SiWhatsapp className="w-6 h-6 text-green-500" />
                        </motion.a>
                    </div>


                    <div className="mt-8">
                        <Link
                            href="/"
                            className={`inline-flex items-center ${currentProject.gradient.from.replace('from-', 'text-')} hover:opacity-80 transition-colors`}
                        >
                            Back to Home →
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
