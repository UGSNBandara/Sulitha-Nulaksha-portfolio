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
    year: "2025",
    title: "2nd Place Sri Lanka, 56th Worldwide",
    organization: "IEEEXtreme 19.0",
    description: "Team SimpleCoders achieved 2nd place in Sri Lanka and 56th worldwide in IEEEXtreme 19.0, a prestigious global coding competition organized by IEEE.",
    image: "/experiences/IEEE_Xtreme19.0/xtreme.jpeg",
    gradient: {
      from: "from-red-500",
      to: "to-yellow-600"
    },
    featured: true
  },
  {
    year: "2025",
    title: "Technical Team Member",
    organization: "HaXtreme 4.0",
    description: "Part of the Technical Team for HaXtreme 4.0, contributing technical expertise to this hackathon event.",
    image: "/experiences/HaXTreme4.0/haXtreme.jpeg",
    gradient: {
      from: "from-indigo-500",
      to: "to-blue-600"
    },
    featured: false
  },
  {
    year: "2025",
    title: "Program Team Member",
    organization: "EMINENCE 5.0 Organizing Committee",
    description: "Served as a program team member for EMINENCE 5.0, contributing to the organization and execution of this prestigious event.",
    image: "/experiences/Eminance/eminanceOc.jpeg",
    gradient: {
      from: "from-green-500",
      to: "to-emerald-600"
    },
    featured: false
  },
  {
    year: "2025",
    title: "1st Runner-Up",
    organization: "Code Night 2025",
    description: "Team Simple Trex secured 1st Runner-Up at Code Night 2025, organized by the Department of Electrical and Information Engineering, University of Ruhuna, in collaboration with the Career Guidance Unit, and awarded by Certix.",
    image: "/experiences/CodeNight/codenight.jpeg",
    gradient: {
      from: "from-blue-500",
      to: "to-cyan-600"
    },
    featured: true
  },
  {
    year: "2025",
    title: "1st Runner-Up",
    organization: "Red Cypher 2.0 CTF",
    description: "Secured 1st Runner-Up position in the Red Cypher 2.0 CTF competition, a cybersecurity capture the flag challenge.",
    image: "/experiences/RedChypher/Redcypher.jpeg",
    gradient: {
      from: "from-purple-500",
      to: "to-pink-600"
    },
    featured: true
  },
  {
    year: "2025",
    title: "Finalists",
    organization: "CodeJam by CSE department of UoM",
    description: "Finalists at CodeX and CyberRush, part of CodeJam by the Department of Computer Science & Engineering, University of Moratuwa.",
    image: "/experiences/CodeJam/cover.jpg",
    gradient: {
      from: "from-yellow-500",
      to: "to-orange-600"
    },
    featured: false
  },
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
    featured: false
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
    },
    featured: false
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
    featured: false
  },
];

// Get featured experiences for main page
export const getFeaturedExperiences = (): Experience[] => {
  return allExperiences.filter(experience => experience.featured);
};

// Get all experiences for experience page
export const getAllExperiences = (): Experience[] => {
  return allExperiences;
}; 