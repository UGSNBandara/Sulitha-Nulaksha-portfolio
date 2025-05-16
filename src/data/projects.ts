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
  featured?: boolean; // Flag to indicate if project should be shown on main page
}

// Default image path
const DEFAULT_PROJECT_IMAGE = "/projects/default-project.svg";

// All projects data
export const allProjects: Project[] = [
  {
    title: "DL Agree Disease Detector",
    description: "A web app using a TensorFlow model to detect crop diseases and suggest fertilizers.",
    image: "/projects/Agree_detect/cover.jpg",
    tags: ["TensorFlow", "Deep Learning", "MERN Stack"],
    link: "/projects/Agree_Detect",
    gradient: {
      from: "from-orange-500",
      to: "to-purple-600"
    },
    featured: true
  },
  {
    title: "Ano Note Funny webapp",
    description: "A web app for sharing anonymous notes, checked by AI to ensure they're kind and respectful",
    image: "/projects/Ano_Note/cover.png",
    tags: ["FastAPI", "NLP", "MERN", "WordEmbedding"],
    link: "/projects/Ano_Notes",
    gradient: {
      from: "from-orange-500",
      to: "to-teal-600"
    },
    featured: true
  },
  {
    title: "To Doo Mobile App",
    description: "Mobile app enabling users to add tasks, deadlines, view tasks prioritized, and track performance.",
    image: "/projects/To_Doo/cover.png",
    tags: ["MERN", "MongoDB", "React"],
    link: "/projects/To_Doo",
    gradient: {
      from: "from-orange-500",
      to: "to-red-600"
    },
    featured: true
  },
];

// Get featured projects for main page
export const getFeaturedProjects = (): Project[] => {
  return allProjects.filter(project => project.featured);
};

// Get all projects for projects page
export const getAllProjects = (): Project[] => {
  return allProjects;
};

// Helper function to get image path with fallback
export const getProjectImage = (project: Project): string => {
  return project.image || DEFAULT_PROJECT_IMAGE;
}; 