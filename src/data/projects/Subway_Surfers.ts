import type { ProjectDetail } from '@/data/projects';

const project: ProjectDetail = {
  slug: 'Subway_Surfers',
  title: 'Subway Surfers Motion Controller',
  description:
    'Turned gaming into a fun workout by controlling Subway Surfers with real-time pose detection. Using OpenCV and MediaPipe, the system tracks body movements and translates them into in-game actions, creating an immersive interactive gaming experience.',
  subtitle: 'Featured on LinkedIn with 1600+ reactions',
  coverEmbed:
    '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7332286590385381378?compact=1" height="399" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
  tags: ['Python', 'OpenCV', 'MediaPipe', 'Real-Time Computer Vision'],
  links: [
    {
      type: 'linkedin',
      url: 'https://www.linkedin.com/posts/nulaksha-bandara_posedetection-opencv-activity-7332288288591962112-0hoc',
    },
  ],
  sections: [
    {
      emoji: '⚙️',
      title: 'How It Works',
      items: [
        'Real-time pose estimation with MediaPipe to track full-body movements.',
        'OpenCV processes video frames and maps poses to game controls.',
        'Control Subway Surfers using gestures for active, full-body gameplay.',
      ],
    },
    {
      emoji: '✨',
      title: 'Outcomes / Highlights',
      items: [
        'Fun, interactive AI project demonstrating real-time motion tracking.',
        'Practical application of computer vision in gaming and physical activity.',
        'Ready for integration into more games and interactive AI projects.',
      ],
    },
  ],
  gradient: { from: 'from-purple-500', to: 'to-teal-600' },
  featured: true,
};

export default project;
