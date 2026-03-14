import type { ProjectDetail } from '@/data/projects';

const project: ProjectDetail = {
  slug: 'LumRun_MotionX',
  title: 'LumRun – MotionX',
  subtitle: 'AI-Driven Pose-Controlled Running Game',
  description:
    'LumRun is a motion-controlled running game in the MotionX series that turns full-body movement into live gameplay using real-time pose tracking. It was first showcased at Winning Hearts 1.0 and will be publicly playable at REXTRO 2025.',
  coverImage: '/projects/LumRun_MotionX/cover.jpg',
  videos: [
    {
      type: 'embed',
      title: 'LumRun – Winning Hearts 1.0 Snippet',
      embedHtml:
        '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7393006362882060288?compact=1" height="399" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
    },
  ],
  tags: ['Computer Vision', 'Unity', 'Python'],
  links: [],
  sections: [
    {
      emoji: '🎮',
      title: 'What is LumRun?',
      items: [
        'LumRun is a pose-controlled running game where players move their bodies to control the character on screen.',
        'The experience is designed to be fun and accessible for participants of all ages.',
        'Part of the broader MotionX game series focused on real-time physical-to-digital interaction.',
      ],
    },
    {
      emoji: '⚙️',
      title: 'MotionX – Real-Time Physical-to-Digital Interaction System',
      items: [
        'Computer vision-based interaction system that maps human body movements directly to game controls.',
        'Uses real-time body pose tracking to enable physical activities like running, jumping, or casting spells to control the game.',
        'Built multiple prototypes, including gesture-based magic spell casting and motion-controlled running games.',
      ],
    },
    {
      emoji: '📍',
      title: 'Showcases & Events',
      items: [
        'First public showcase at Winning Hearts 1.0, bringing smiles and high-energy gameplay to participants.',
        'Planned major showcase at REXTRO 2025 – Silver Jubilee Engineering Exhibition of the University of Ruhuna.',
        'Designed for live, on-site play where anyone can step in front of the camera and start running.',
      ],
    },
    {
      emoji: '🧠',
      title: 'Technology Stack',
      content: [
        {
          title: 'Core Technologies',
          color: 'blue',
          points: ['Unity for game logic and visuals', 'Real-time pose tracking pipeline', 'Custom motion-mapping logic for gameplay'],
        },
        {
          title: 'Computer Vision Layer',
          color: 'green',
          points: [
            'Camera input processed in real time',
            'Pose landmarks extracted and smoothed for stable control',
            'Physical motion translated into discrete in-game actions',
          ],
        },
      ],
    },
  ],
  gradient: { from: 'from-purple-500', to: 'to-indigo-600' },
  featured: true,
};

export default project;
