'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { 
  SiPython, 
  SiTensorflow, 
  SiScikitlearn,
  SiCplusplus,
  SiC,
  SiSpacy,
  SiGit,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiLinkedin,
  SiWhatsapp,
  SiInstagram,
  SiFacebook,
  SiGithub,
  SiCodeforces,
  SiHuggingface
} from 'react-icons/si';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';
import { IconType } from 'react-icons';
import React, { useState } from 'react';
import { getFeaturedProjects, getProjectImage } from '@/data/projects';
import { getFeaturedExperiences } from '@/data/experience';
import LoadingSpinner from '@/components/LoadingSpinner';

// Define skills array
const skills = [
  { name: 'C', icon: SiC, color: '#A8B9CC' },
  { name: 'C++', icon: SiCplusplus, color: '#00599C' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'ML', icon: SiScikitlearn, color: '#F7931E' },
  { name: 'DL', icon: SiTensorflow, color: '#FF6F00' },
  { name: 'NLP', icon: SiSpacy, color: '#09A3D5' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Express', icon: SiExpress, color: '#000000' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
];

// Define technical profiles array
const technicalProfiles = [
  { name: 'GitHub', icon: SiGithub, color: '#333333', url: 'https://github.com/your-username' },
  { name: 'Codeforces', icon: SiCodeforces, color: '#1F8ACB', url: 'https://codeforces.com/profile/your-username' },
  { name: 'Hugging Face', icon: SiHuggingface, color: '#FFD21E', url: 'https://huggingface.co/your-username' },
];

// Add custom styles for Swiper navigation
const swiperStyles = `
  .swiper-button-next,
  .swiper-button-prev {
    background-color: rgba(255, 255, 255, 0.9);
    width: 40px !important;
    height: 40px !important;
    border-radius: 50%;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    color: #6B46C1 !important;
    transition: all 0.3s ease;
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    background-color: #6B46C1;
    color: white !important;
    transform: scale(1.1);
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 18px !important;
    font-weight: bold;
  }

  .swiper-pagination-bullet {
    background: #6B46C1 !important;
    opacity: 0.5;
    width: 10px !important;
    height: 10px !important;
    transition: all 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
    transform: scale(1.2);
  }

  .dark .swiper-button-next,
  .dark .swiper-button-prev {
    background-color: rgba(17, 24, 39, 0.9);
    color: #6B46C1 !important;
  }

  .dark .swiper-button-next:hover,
  .dark .swiper-button-prev:hover {
    background-color: #6B46C1;
    color: white !important;
  }
`;

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    // Replace with your actual CV file path
    window.open('/path-to-your-cv.pdf', '_blank');
  };

  const featuredProjects = getFeaturedProjects();
  const featuredExperiences = getFeaturedExperiences();

  return (
    <main className="relative bg-white dark:bg-dark">
      <style jsx global>{swiperStyles}</style>
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-16 px-4 md:px-8">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">
              Hello, I'm <span className="gradient-text">Sulitha</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-2">
              Computer Engineering Undergraduate
            </p>
            <div className="text-lg sm:text-xl md:text-2xl text-primary dark:text-primary mb-6">
              <TypeAnimation
                sequence={[
                  'AI Enthusiast',
                  2000,
                  'Growth Mindset Advocate',
                  2000,
                  'Team Player',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <div className="flex flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="bg-primary text-white px-4 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Get in Touch
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadCV}
                className="border-2 border-primary text-primary dark:text-primary px-4 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-primary/10 transition-colors"
              >
                Download CV
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] mx-auto"
          >
            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src="/images/profile.jpg"
                alt="Sulitha Nulaksha"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-purple-600/20 animate-gradient-x" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center section-padding py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">About Me</h2>
            
            {/* Description at the top */}
            <div className="bg-white dark:bg-dark-light p-4 md:p-8 rounded-xl shadow-lg mb-8">
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 text-left">
                I'm Sulitha Nulaksha, a Computer Engineering Undergraduate passionate about leveraging technology to solve real-world challenges. My interests lie in machine learning and artificial intelligence, with a focus on Natural Language Processing (NLP).
              </p>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 text-left mt-4">
                With a growth mindset and a drive for continuous learning, I actively seek new opportunities to expand my skills and knowledge. Currently, I'm exploring Large Language Models (LLMs) and LangChain, combining curiosity with innovation to create impactful solutions.
              </p>
            </div>

            {/* Technical Profiles and Skills Grid side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column - Technical Skills Grid */}
              <div className="bg-white dark:bg-dark-light p-4 md:p-8 rounded-xl shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Technical Skills</h3>
                <div className="grid grid-cols-5 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: `0 0 20px ${skill.color}40`
                      }}
                      className="group p-4 bg-gray-50 dark:bg-dark rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex flex-col items-center gap-2">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          {React.createElement(skill.icon, {
                            className: "w-8 h-8",
                            style: { color: skill.color }
                          })}
                        </motion.div>
                        <h3 className="text-sm font-semibold text-center group-hover:text-primary dark:group-hover:text-primary transition-colors">
                          {skill.name}
                        </h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Column - Technical Profiles */}
              <div className="bg-white dark:bg-dark-light p-4 md:p-8 rounded-xl shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Technical Profiles</h3>
                <div className="flex flex-col gap-4">
                  {technicalProfiles.map((profile, index) => (
                    <motion.a
                      key={profile.name}
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, y: -2 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-dark rounded-xl hover:bg-primary/10 transition-colors"
                    >
                      <profile.icon className="w-5 h-5 md:w-6 md:h-6" style={{ color: profile.color }} />
                      <span className="font-medium text-sm md:text-base">{profile.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center section-padding py-20 px-4 md:px-8 bg-gray-50/50 dark:bg-dark">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 dark:text-gray-300">Some of my best work</p>
          </motion.div>
          
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="mb-12 px-12"
          >
            {featuredProjects.map((project, index) => (
              <SwiperSlide key={index}>
                <motion.div>
                  <div 
                    className={`bg-white dark:bg-dark-light
                      p-6 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 
                      border-2 border-opacity-20 ${project.gradient.from.replace('from-', 'border-')}`}
                  >
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <Image
                        src={project.image || "/projects/default-project.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          if (!e.currentTarget.src.includes('default-project.svg')) {
                            console.error(`Failed to load image: ${project.image}`);
                            e.currentTarget.src = "/projects/default-project.svg";
                          }
                        }}
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className={`px-3 py-1 text-sm rounded-full bg-opacity-10 border border-opacity-20
                              ${project.gradient.from.replace('from-', 'bg-')}
                              ${project.gradient.from.replace('from-', 'border-')}
                              ${project.gradient.from.replace('from-', 'text-')}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link 
                        href={project.link}
                        className={`inline-flex items-center ${project.gradient.from.replace('from-', 'text-')} hover:opacity-80 transition-colors`}
                      >
                        Learn more →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="text-center mt-12">
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                View All Projects
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center justify-center section-padding py-20 px-4 md:px-8 bg-white dark:bg-dark">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Featured Experience</h2>
            <p className="text-gray-600 dark:text-gray-300">Key milestones in my journey</p>
          </motion.div>

          <div className="relative">
            {/* Timeline line - left on mobile, center on desktop */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary/20"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {featuredExperiences.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  {/* Timeline dot - left on mobile, center on desktop */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full z-10"></div>

                  {/* Content - full width on mobile, half width on desktop */}
                  <div className={`w-full md:w-5/12 pl-12 md:pl-8 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <div 
                      className={`bg-gradient-to-br from-white to-${item.gradient.from.replace('from-', '')}/5
                        dark:from-dark-light dark:to-${item.gradient.from.replace('from-', '')}/10
                        p-6 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 
                        border-2 border-opacity-20 ${item.gradient.from.replace('from-', 'border-')}`}
                    >
                      <div className="relative h-48 mb-4 rounded-t-lg overflow-hidden">
                        <Image
                          src={item.image || "/experiences/default-experience.svg"}
                          alt={`${item.organization} - ${item.title}`}
                          fill
                          className="object-cover"
                          onError={(e) => {
                            if (!e.currentTarget.src.includes('default-experience.svg')) {
                              console.error(`Failed to load image: ${item.image}`);
                              e.currentTarget.src = "/experiences/default-experience.svg";
                            }
                          }}
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                          <div className="text-sm font-semibold text-white">{item.year}</div>
                          <h3 className="text-xl font-bold text-white">{item.title}</h3>
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

          <div className="text-center mt-12">
            <Link href="/experience">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                View All Experience
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 min-h-screen md:min-h-0 bg-gray-50/50 dark:bg-dark">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600 dark:text-gray-300">Let's connect and create something amazing together</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white dark:bg-dark-light p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="mailto:sulithanb119@gmail.com"
                    className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    <MdEmail className="w-6 h-6 text-red-500" />
                    <span>sulithanb119@gmail.com</span>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="mailto:eg244962@engug.ruh.ac.lk"
                    className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    <MdEmail className="w-6 h-6 text-red-500" />
                    <span>eg244962@engug.ruh.ac.lk</span>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="https://wa.me/94714262972"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    <SiWhatsapp className="w-6 h-6 text-green-500" />
                    <span>+94 71 426 2972</span>
                  </motion.a>

                  <motion.div
                    className="flex items-center gap-4 text-gray-600 dark:text-gray-300"
                  >
                    <MdLocationOn className="w-6 h-6 text-blue-500" />
                    <span>102/338, Lightroad/ Chnabay (31050), Trincomalee</span>
                  </motion.div>
                </div>
              </div>

              <div className="bg-white dark:bg-dark-light p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Social Links</h3>
                <div className="flex gap-6">
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    href="https://www.linkedin.com/in/nulaksha-bandara/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#0077B5]/10 rounded-full flex items-center justify-center text-[#0077B5] hover:bg-[#0077B5] hover:text-white transition-colors"
                  >
                    <SiLinkedin className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    href="https://www.instagram.com/snulaksha__b?igsh=aWxmNnh3anFnN2Rp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#E4405F]/10 rounded-full flex items-center justify-center text-[#E4405F] hover:bg-[#E4405F] hover:text-white transition-colors"
                  >
                    <SiInstagram className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    href="https://www.facebook.com/profile.php?id=100075545900124"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#1877F2]/10 rounded-full flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-colors"
                  >
                    <SiFacebook className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-light p-8 rounded-xl shadow-lg relative"
            >
              <h3 className="text-2xl font-bold mb-6">Send me a Message</h3>
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

                try {
                  const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData
                  });

                  const data = await response.json();

                  if (data.success) {
                    setNotification({
                      type: 'success',
                      message: 'Thank you for your message! I will get back to you soon.'
                    });
                    form.reset();
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
                    message: 'An error occurred while sending your message. Please try again.'
                  });
                } finally {
                  setIsSubmitting(false);
                }
              }} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors disabled:opacity-50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors disabled:opacity-50"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    disabled={isSubmitting}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors disabled:opacity-50"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <LoadingSpinner />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 