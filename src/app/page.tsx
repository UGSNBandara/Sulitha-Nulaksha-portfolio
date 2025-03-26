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
import React from 'react';
import { projects, getProjectImage } from '@/data/projects';
import { experiences } from '@/data/experience';

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
            {/* Replace with your actual image */}
            <div className="w-full h-full rounded-full bg-gradient-to-r from-primary to-purple-600 animate-gradient-x" />
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
                I'm Sulitha Nulaksha, a Computer Engineering Undergraduate passionate about leveraging technology to solve real-world challenges. My interests lie in machine learning and artificial intelligence, with a focus on Natural Language Processing (NLP) and networking applications, particularly Open RAN.
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
      <section id="projects" className="min-h-screen flex items-center justify-center section-padding py-20 px-4 md:px-8">
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
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <motion.div>
                  <div className={`h-48 relative bg-gradient-to-r ${project.gradient.from} ${project.gradient.to}`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-dark-light rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link 
                      href={project.link}
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                      Learn more →
                    </Link>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="text-center mt-12">
            <Link href="/projects" target="_blank" rel="noopener noreferrer">
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
      <section id="experience" className="min-h-screen flex items-center justify-center section-padding py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Experience</h2>
            <p className="text-gray-600 dark:text-gray-300">My journey and achievements</p>
          </motion.div>

          <div className="relative">
            {/* Timeline line - left on mobile, center on desktop */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary/20"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {experiences.map((item, index) => (
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
                    <div className="bg-white dark:bg-dark-light p-6 rounded-xl shadow-lg overflow-hidden">
                      <div className={`h-32 relative mb-4 rounded-t-xl bg-gradient-to-r ${item.gradient.from} ${item.gradient.to}`}>
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

          <div className="text-center mt-12">
            <Link href="/experience" target="_blank" rel="noopener noreferrer">
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
      <section id="contact" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
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
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              <div className="bg-white dark:bg-dark-light p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="mailto:your.email@example.com"
                    className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    <MdEmail className="w-6 h-6 text-primary" />
                    <span>your.email@example.com</span>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="https://wa.me/your-whatsapp-number"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    <SiWhatsapp className="w-6 h-6 text-primary" />
                    <span>+94 XX XXX XXXX</span>
                  </motion.a>

                  <motion.div
                    className="flex items-center gap-4 text-gray-600 dark:text-gray-300"
                  >
                    <MdLocationOn className="w-6 h-6 text-primary" />
                    <span>Your Address Here</span>
                  </motion.div>
                </div>
              </div>

              <div className="bg-white dark:bg-dark-light p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Social Links</h3>
                <div className="flex gap-6">
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    href="https://linkedin.com/in/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    <SiLinkedin className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    href="https://instagram.com/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    <SiInstagram className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    href="https://facebook.com/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
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
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-dark-light p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6">Send me a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
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
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 