import type { ProjectDetail } from '@/data/projects';

const project: ProjectDetail = {
  slug: 'Ano_Notes',
  title: 'Ano Note: Anonymous Messaging Platform with NLP-Powered Harm Detection',
  description:
    'Ano Note lets users receive anonymous messages through a unique shareable link. Built with the MERN stack, it integrates NLP to analyse messages for harmful content in English, Sinhala, and Singlish.',
  coverYoutube: 'D0ovN-djlNE',
  tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'FastAPI', 'NLP', 'TF-IDF'],
  links: [
    { type: 'github',      url: 'https://github.com/UGSNBandara/AnoNotes_WebApp' },
    { type: 'huggingface', url: 'https://huggingface.co/spaces/Sulitha/Sinhala_comment_classifier_v1' },
  ],
  sections: [
    {
      emoji: '✨',
      title: 'Key Features',
      content: [
        {
          title: 'Anonymous Messaging',
          color: 'blue',
          description: "Users share a unique link to receive notes without revealing the sender's identity.",
        },
        {
          title: 'Advanced Content Analysis',
          color: 'blue',
          points: [
            'Four separate models trained using TF-IDF vectorisation',
            'Custom SpaCy pipeline to identify predefined bad words',
            'Multi-language support: English, Sinhala, and Singlish',
          ],
        },
      ],
    },
    {
      emoji: '💻',
      title: 'Technical Implementation',
      content: [
        {
          title: 'Model Architecture',
          color: 'purple',
          points: [
            'TF-IDF vectorisation for text embeddings',
            '3 models for English, Sinhala, and Singlish harm detection',
            '1 model for English-Singlish classification',
            'Models deployed on Hugging Face',
          ],
        },
        {
          title: 'Tech Stack',
          color: 'purple',
          points: [
            'React.js for the user interface',
            'Node.js and Express.js for backend processes',
            'FastAPI integration for model inference and SpaCy pipelines',
            'MongoDB for database storage',
          ],
        },
      ],
    },
    {
      emoji: '🚀',
      title: 'Future Plans',
      items: [
        'Expand the dataset to improve accuracy',
        'Implement detection using a fine-tuned model for better performance',
      ],
    },
  ],
  gradient: { from: 'from-blue-500', to: 'to-purple-500' },
  featured: true,
};

export default project;
