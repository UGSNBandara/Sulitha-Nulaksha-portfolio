import { IconType } from 'react-icons';

export interface Project {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  link: string;
  gradient: {
    from: string;
    to: string;
  };
}

// Default image path
const DEFAULT_PROJECT_IMAGE = "/projects/default-project.jpg";

export const projects: Project[] = [
  {
    title: "AI Image Recognition",
    description: "Deep learning model for real-time image classification using TensorFlow",
    image: "/projects/ai-image.jpg",
    tags: ["Python", "TensorFlow", "Deep Learning"],
    link: "#",
    gradient: {
      from: "from-blue-500",
      to: "to-purple-600"
    }
  },
  {
    title: "NLP Text Analysis",
    description: "Natural Language Processing tool for sentiment analysis and text classification",
    image: "/projects/nlp-analysis.jpg",
    tags: ["Python", "NLP", "spaCy"],
    link: "#",
    gradient: {
      from: "from-green-500",
      to: "to-teal-600"
    }
  },
  {
    title: "MERN E-commerce",
    description: "Full-stack e-commerce platform with MongoDB, Express, React, and Node.js",
    image: "/projects/ecommerce.jpg",
    tags: ["MERN", "MongoDB", "React"],
    link: "#",
    gradient: {
      from: "from-orange-500",
      to: "to-red-600"
    }
  },
  {
    title: "ML Stock Predictor",
    description: "Machine learning model for stock price prediction using scikit-learn",
    image: "/projects/stock-predict.jpg",
    tags: ["Python", "ML", "scikit-learn"],
    link: "#",
    gradient: {
      from: "from-pink-500",
      to: "to-purple-600"
    }
  },
  {
    title: "C++ Game Engine",
    description: "2D game engine implementation using C++ and OpenGL",
    image: "/projects/game-engine.jpg",
    tags: ["C++", "OpenGL", "Game Dev"],
    link: "#",
    gradient: {
      from: "from-yellow-500",
      to: "to-orange-600"
    }
  }
];

// Helper function to get image path with fallback
export const getProjectImage = (project: Project): string => {
  return project.image || DEFAULT_PROJECT_IMAGE;
}; 