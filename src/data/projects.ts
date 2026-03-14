import { IconType } from 'react-icons';

import carControllerData from './projects/Car_Controller';
import subwaySurfersData from './projects/Subway_Surfers';
import agreeDetectData from './projects/Agree_Detect';
import anoNotesData from './projects/Ano_Notes';
import quickRefData from './projects/QuickRef';
import toDooData from './projects/To_Doo';
import sofiaData from './projects/SofiaProject';
import lumRunMotionXData from './projects/LumRun_MotionX';


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
    title: "SOFIA: AI-Powered Virtual Customer Interaction Assistant",
    description: "Context-aware AI assistant with 3D avatar, AR, vision intelligence, and adaptive customer support.",
    image: "/projects/SOFIA/cover.jpg",
    tags: ["AI Agents", "Computer Vision", "Unity", "C#", "AR", "FastAPI", "Python"],
    link: "/projects/SOFIA",
    gradient: {
      from: "from-blue-500",
      to: "to-cyan-600"
    },
    featured: true
  },
  {
    title: "LumRun – MotionX",
    description:
      "Pose-controlled running game from the MotionX series",
    image: "/projects/LumRun_MotionX/cover.jpg",
    tags: ["Computer Vision", "Unity", "Python", "C#"],
    link: "/projects/LumRun_MotionX",
    gradient: {
      from: "from-purple-500",
      to: "to-indigo-600",
    },
    featured: true,
  },
  {
    title: "Car Driving Game Controller Using YOLOv8 and OpenCV",
    description: "Handcrafted gaming controller and AI with YOLOv8n + OpenCV for real-time control detection.",
    image: "/projects/CarControler/carcontroller.png",
    tags: ["YOLOv8", "Computer Vision", "Python", "C++"],
    link: "/projects/Car_Controller",
    gradient: {
      from: "from-red-500",
      to: "to-orange-600"
    },
    featured: false
  },
  {
    title: "Subway Surfers Motion Controller",
    description: "Play Subway Surfers with real-time body movements using OpenCV + MediaPipe",
    image: "/projects/SubwaySufer/subwaysufer.png",
    tags: ["Python", "Computer Vision"],
    link: "/projects/Subway_Surfers",
    gradient: {
      from: "from-purple-500",
      to: "to-teal-600"
    },
    featured: false
  },
  {
    title: "DL Agree Disease Detector",
    description: "A web app using a TensorFlow model to detect crop diseases and suggest fertilizers.",
    image: "/projects/Agree_detect/cover.jpg",
    tags: ["Deep Learning", "ML", "MERN", "Python", "FastAPI"],
    link: "/projects/Agree_Detect",
    gradient: {
      from: "from-orange-500",
      to: "to-purple-600"
    },
    featured: false
  },
  {
    title: "Ano Note Funny webapp",
    description: "A web app for sharing anonymous notes, checked by AI to ensure they're kind and respectful",
    image: "/projects/Ano_Note/cover.png",
    tags: ["FastAPI", "NLP", "MERN", "Python", "FastAPI"],
    link: "/projects/Ano_Notes",
    gradient: {
      from: "from-orange-500",
      to: "to-teal-600"
    },
    featured: false
  },
  {
    title: "QuickRef URL PDF referencer",
    description: "A streamlined tool to quickly upload PDFs or URLs, process them, and query their content effortlessly.",
    image: "/projects/QuickRef/cover.png",
    tags: ["LangChain", "Python", "AI Agents"],
    link: "/projects/QuickRef",
    gradient: {
      from: "from-orange-500",
      to: "to-red-600"
    },
    featured: false
  },
  {
    title: "To Doo Mobile App",
    description: "Mobile app enabling users to add tasks, deadlines, view tasks prioritized, and track performance.",
    image: "/projects/To_Doo/cover.png",
    tags: ["MERN"],
    link: "/projects/To_Doo",
    gradient: {
      from: "from-orange-500",
      to: "to-red-600"
    },
    featured: false
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

// ─── Extended project detail types ───────────────────────────────────────────

export interface ContentItem {
  title?: string;
  color?: 'blue' | 'green' | 'red' | 'orange' | 'purple';
  points?: string[];
  description?: string;
}

export interface ProjectSection {
  emoji: string;
  title: string;
  items?: string[];
  imageBlock?: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
  };
  content?: ContentItem[];
}

export type LinkType =
  | 'github' | 'linkedin' | 'wandb' | 'roboflow'
  | 'streamlit' | 'huggingface' | 'android' | 'ios';

export interface ProjectLink {
  type: LinkType;
  url: string;
}

export interface ProjectVideo {
  type: 'youtube' | 'embed';
  youtubeId?: string;
  embedHtml?: string;
  title?: string;
}

export interface ProjectDetail {
  slug: string;
  title: string;
  description: string;
  subtitle?: string;
  videos?: ProjectVideo[];
  coverImage?: string;
  coverEmbed?: string;
  coverYoutube?: string;
  coverYoutubes?: string[];
  tags: string[];
  links: ProjectLink[];
  sections: ProjectSection[];
  gradient: { from: string; to: string };
  featured?: boolean;
}

export const projectDetails: ProjectDetail[] = [
  sofiaData,
  lumRunMotionXData,
  carControllerData,
  subwaySurfersData,
  agreeDetectData,
  anoNotesData,
  quickRefData,
  toDooData,
];

export const getProjectDetail = (slug: string): ProjectDetail | undefined =>
  projectDetails.find(p => p.slug === slug);
