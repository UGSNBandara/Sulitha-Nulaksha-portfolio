export interface Experience {
  year: string;
  title: string;
  organization: string;
  description: string;
  gradient: {
    from: string;
    to: string;
  };
  featured?: boolean; // Flag to indicate if experience should be shown on main page
}

// All experiences data
export const allExperiences: Experience[] = [
  {
    year: "2024",
    title: "Lead Organizer",
    organization: "HaXtreme 3.0 Hackathon",
    description: "Led the organization of a major hackathon event, coordinating teams and resources.",
    gradient: {
      from: "from-blue-500",
      to: "to-purple-600"
    },
    featured: true
  },
  {
    year: "2023",
    title: "Volunteer",
    organization: "Zero Plastic Initiative",
    description: "Contributed to environmental sustainability efforts through community engagement.",
    gradient: {
      from: "from-green-500",
      to: "to-teal-600"
    },
    featured: true
  },
  {
    year: "2023",
    title: "Participant",
    organization: "IEEEXtreme Coding Competition",
    description: "Competed in the prestigious IEEE coding competition, showcasing technical skills.",
    gradient: {
      from: "from-orange-500",
      to: "to-red-600"
    },
    featured: true
  },
  {
    year: "2022",
    title: "Team Lead",
    organization: "University Tech Club",
    description: "Led a team of students in developing innovative tech solutions for campus challenges.",
    gradient: {
      from: "from-pink-500",
      to: "to-purple-600"
    }
  },
  {
    year: "2022",
    title: "Mentor",
    organization: "Code for Good",
    description: "Mentored junior students in programming and software development fundamentals.",
    gradient: {
      from: "from-yellow-500",
      to: "to-orange-600"
    }
  },
  {
    year: "2021",
    title: "Student Ambassador",
    organization: "Tech Education Initiative",
    description: "Promoted technology education and coding literacy among high school students.",
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