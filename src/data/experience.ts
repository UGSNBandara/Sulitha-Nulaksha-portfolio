export interface Experience {
  year: string;
  title: string;
  organization: string;
  description: string;
  gradient: {
    from: string;
    to: string;
  };
}

export const experiences: Experience[] = [
  {
    year: "2024",
    title: "Lead Organizer",
    organization: "HaXtreme 3.0 Hackathon",
    description: "Led the organization of a major hackathon event, coordinating teams and resources.",
    gradient: {
      from: "from-blue-500",
      to: "to-purple-600"
    }
  },
  {
    year: "2023",
    title: "Volunteer",
    organization: "Zero Plastic Initiative",
    description: "Contributed to environmental sustainability efforts through community engagement.",
    gradient: {
      from: "from-green-500",
      to: "to-teal-600"
    }
  },
  {
    year: "2023",
    title: "Participant",
    organization: "IEEEXtreme Coding Competition",
    description: "Competed in the prestigious IEEE coding competition, showcasing technical skills.",
    gradient: {
      from: "from-orange-500",
      to: "to-red-600"
    }
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
  }
]; 