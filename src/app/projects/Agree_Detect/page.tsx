'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Agree_Detect() {
    // Example project data (replace with actual data passed as props or fetched)
    const exampleProject = {
        title: 'Project Title',
        image: '/projects/example-project.svg',
        description: 'A detailed description of the project. Explain the purpose, the technologies used, and the outcomes.',
        tags: ['React', 'Next.js', 'Framer Motion'],
        gradient: { from: 'from-blue-500', to: 'to-purple-500' },
        link: '/projects',
        details: 'This is where you can include additional details about the project, challenges faced, and solutions implemented.',
    };

    const currentProject = exampleProject;

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
                        <h2 className="text-2xl font-semibold mb-2">Project Details</h2>
                        <p className="text-gray-600 dark:text-gray-300">{currentProject.details}</p>
                    </div>

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

                    <div>
                        <Link
                            href={currentProject.link}
                            className={`inline-flex items-center ${currentProject.gradient.from.replace('from-', 'text-')} hover:opacity-80 transition-colors`}
                        >
                            Back to Projects →
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
