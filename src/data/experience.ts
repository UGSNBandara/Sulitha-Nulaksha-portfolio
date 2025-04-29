export interface Experience {
  year: string;
  title: string;
  organization: string;
  description: string;
  image?: string; // Optional image path
  gradient: {
    from: string;
    to: string;
  };
  featured?: boolean; // Flag to indicate if experience should be shown on main page
}

// Default experience image path
const DEFAULT_EXPERIENCE_IMAGE = "/experiences/default-experience.svg";

// All experiences data
export const allExperiences: Experience[] = [
  {
    year: "2024",
    title: "Working Experience",
    organization: "Car Max",
    description: "Worked at CarMax during the New Year holiday, gaining valuable experience and improving communication, leadership, and management skills.",
    image: "/experiences/Car_max/cover.jpeg",
    gradient: {
      from: "from-blue-500",
      to: "to-purple-600"
    },
    featured: true
  },
  {
    year: "2024",
    title: "Volunteer",
    organization: "Career Fair 2024",
    description: "Part of the organizing committee for Career Fair 2024 at the Faculty of Engineering, University of Ruhuna, contributing to event planning and execution.",
    image: "/experiences/CareerFair/cover.jpeg",
    gradient: {
      from: "from-green-500",
      to: "to-teal-600"
    },
    featured: true
  },
  {
    year: "2024",
    title: "Volunteer",
    organization: "IEEE Ruhuna VoltCast 1.0",
    description: "Served as a program team member for Voltcast 1.0, organized by the IEEE Student Branch of the University of Ruhuna.",
    image: "/experiences/VoltCast/cover.jpeg",
    gradient: {
      from: "from-orange-500",
      to: "to-red-600"
    }
  },
  {
    year: "2024",
    title: "Team Lead",
    organization: "HaXtreme 3.0",
    description: "Led a Program team of HaXtreme 3.0, a hackathon event organized by the IEEE Student Branch of the University of Ruhuna.",
    image: "/experiences/HaxTreme/cover.jpeg",
    gradient: {
      from: "from-pink-500",
      to: "to-purple-600"
    },
    featured: true
  },
  {
    year: "2024",
    title: "Participant",
    organization: "IEEE Xtreme 18.0",
    description: "Participated in IEEE Xtreme 18.0, a global coding competition.",
    image: "/experiences/IEEE_Xtreme/cover.jpg",
    gradient: {
      from: "from-yellow-500",
      to: "to-orange-600"
    },
    featured: true
  },
  {
    year: "2021",
    title: "Student Ambassador",
    organization: "Tech Education Initiative",
    description: "Promoted technology education and coding literacy among high school students.",
    image: "/experiences/default-experience.svg",
    gradient: {
      from: "from-indigo-500",
      to: "to-purple-600"
    }
  }
];

// Get featured experiences for main page
export const getFeaturedExperiences = (): Experience[] => {
  return allExperiences.filter(experience => experience.featured);
};

// Get all experiences for experience page
export const getAllExperiences = (): Experience[] => {
  return allExperiences;
}; 