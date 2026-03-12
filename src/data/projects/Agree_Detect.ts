import type { ProjectDetail } from '@/data/projects';

const project: ProjectDetail = {
  slug: 'Agree_Detect',
  title: 'Potato & Bell Pepper Disease Predictor',
  description:
    'An AI-based system to classify crops and predict diseases for Potato and Bell Pepper using TensorFlow, with suggestions for appropriate fertilizers.',
  coverImage: '/projects/Agree_detect/cover.jpg',
  tags: ['React.js', 'FastAPI', 'TensorFlow', 'Deep Learning', 'Python'],
  links: [
    { type: 'github',   url: 'https://github.com/UGSNBandara/Agri-Detect' },
    {
      type: 'linkedin',
      url: 'https://www.linkedin.com/posts/nulaksha-bandara_deeplearning-tensorflow-reactjs-activity-7283206658623774720-Wn4m',
    },
  ],
  sections: [
    {
      emoji: '🤖',
      title: 'Trained CNN Models',
      content: [
        {
          title: 'Bell Pepper Disease Prediction',
          color: 'green',
          description: 'Identifies and diagnoses diseases in bell pepper leaves with high accuracy.',
        },
        {
          title: 'Potato Disease Prediction',
          color: 'green',
          description: 'Specialises in detecting various potato leaf diseases for targeted interventions.',
        },
        {
          title: 'Crop Classification',
          color: 'green',
          description:
            'Distinguishes between potato and bell pepper leaves, ensuring appropriate disease models are applied.',
        },
      ],
    },
    {
      emoji: '💻',
      title: 'Tech Stack',
      content: [
        {
          title: 'React.js — Frontend',
          color: 'blue',
          points: [
            'Intuitive interface for uploading crop leaf images',
            'Displays disease predictions, actionable tips, and fertilizer recommendations',
          ],
        },
        {
          title: 'FastAPI — Backend',
          color: 'blue',
          points: [
            'Bridges the frontend and machine learning models',
            'Processes uploaded images and routes them to appropriate CNN models',
            'Returns predictions and recommendations to the frontend',
          ],
        },
      ],
    },
  ],
  gradient: { from: 'from-green-500', to: 'to-yellow-500' },
  featured: true,
};

export default project;
