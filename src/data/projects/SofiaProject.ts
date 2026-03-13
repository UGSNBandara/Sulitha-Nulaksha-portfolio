import type { ProjectDetail } from '@/data/projects';

const project: ProjectDetail = {
  slug: 'SOFIA',
  title: 'SOFIA: An AI-Powered Virtual Customer Interaction Assistant',
  subtitle: 'Smart Omni-Functional Interactive Assistant',
  description:
    'SOFIA is a context-aware virtual AI assistant designed to transform customer interaction through conversational AI, computer vision, behavioral analytics, 3D experiences, and augmented reality.',
  coverImage: '/projects/SOFIA/cover.JPG',
  videos: [
    {
      type: 'embed',
      title: 'SOFIA Demo 1',
      embedHtml:
        '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7411897688784465920?compact=1" height="399" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
    },
    {
      type: 'youtube',
      title: 'SOFIA Demo 2',
      youtubeId: 'ls0h1kAHRIo',
    },
  ],
  tags: [
    'AI Agents',
    'Computer Vision',
    'Behavior Analytics',
    '3D Interface',
    'Augmented Reality',
    'FastAPI',
    'SQLite',
    'Google ADK',
    'Unity',
    'Three.js',
  ],
  links: [],
  sections: [
    {
      emoji: '🧠',
      title: 'Introduction',
      items: [
        'SOFIA (Smart Omni-Functional Interactive Assistant) is a context-aware virtual assistant that combines AI with immersive interfaces.',
        'Traditional assistants are often rule-based and static; SOFIA introduces emotional awareness and contextual intelligence.',
        'It is designed to interact through voice, vision, and natural conversation, not only text prompts.',
        'SOFIA blends intelligent backend models with a human-like 3D avatar to create natural, engaging digital interactions.',
      ],
    },
    {
      emoji: '❗',
      title: 'Problem Statement',
      items: [
        'Most digital customer systems are not emotionally intelligent and cannot adapt to user mood or context.',
        'Conventional systems rely on predefined commands and deliver generic recommendations.',
        'They fail to react well to contextual signals such as weather, stock availability, time of day, and active campaigns.',
        'This causes weaker personalization, lower engagement, and missed business opportunities.',
        'SOFIA addresses this by understanding customer behavior, environment, and emotional cues in real time.',
      ],
    },
    {
      emoji: '✨',
      title: 'Key Features',
      content: [
        {
          title: '3D Interactive Web Interface',
          color: 'blue',
          points: [
            'Fully animated 3D virtual character for human-like interaction',
            'Lip-synchronized voice responses',
            'Smooth conversational flow with voice and text inputs',
            'Higher engagement than static chat interfaces',
          ],
        },
        {
          title: 'Augmented Reality (AR) Assistant',
          color: 'blue',
          points: [
            'Built using Unity for immersive mobile AR experiences',
            'Assistant can be visualized in real-world environments',
            'Useful for retail floors, exhibitions, and service spaces',
          ],
        },
        {
          title: 'Vision-Based Understanding',
          color: 'green',
          points: [
            'Facial expression analysis',
            'Approximate age and gender estimation',
            'Emotion cue detection to adapt responses',
            'Improves support quality for confused or frustrated users',
          ],
        },
        {
          title: 'Context Awareness',
          color: 'green',
          points: [
            'Integrates weather API signals and time context',
            'Reads product availability and promotions from store-side data',
            'Generates timely, relevant recommendations',
          ],
        },
        {
          title: 'Customer Behavior Learning',
          color: 'purple',
          points: [
            'Learns from browsing and purchase behavior',
            'Uses clustering to detect customer segments',
            'Tracks product popularity trends and recurring interests',
            'Becomes more personalized over time',
          ],
        },
        {
          title: 'Business Intelligence and Analytics',
          color: 'purple',
          points: [
            'Interaction pattern analysis',
            'Behavioral heatmaps and peak engagement windows',
            'Product popularity statistics dashboards',
            'Supports data-driven promotion and inventory decisions',
          ],
        },
      ],
    },
    {
      emoji: '🏗️',
      title: 'System Architecture',
      content: [
        {
          title: 'Core AI Modules',
          color: 'orange',
          points: [
            'Vision AI Module: extracts emotional and demographic cues',
            'Conversation: Multi-agent architecture using Google ADK and TTS/STT models, including context and clustering models',
          ],
        },
        {
          title: 'Data and Infrastructure',
          color: 'orange',
          points: [
            'MongoDB for persistent long-term data',
            'SQLite for active session state',
            'FastAPI backend as orchestration layer',
            'External Weather API integration for contextual personalization',
          ],
        },
        {
          title: 'User Interfaces',
          color: 'orange',
          points: [
            'Web-based 3D interface for desktop interactions',
            'AR mobile app for in-environment assistance',
            'Voice, visual, and conversational multimodal interaction',
          ],
        },
      ],
    },
    // ...existing code...
    {
      emoji: '🛠️',
      title: 'Technology Stack',
      content: [
        {
          title: 'Frontend & Experience',
          color: 'blue',
          points: ['Three.js', '3D web rendering pipeline', 'Unity AR engine', 'Web UI frameworks'],
        },
        {
          title: 'AI Capabilities',
          color: 'blue',
          points: [
            'Facial recognition and expression analysis models',
            'Google ADK-powered LLM workflows',
            'STT (speech-to-text) and TTS (speech synthesis)',
          ],
        },
        {
          title: 'Personalization & Analytics',
          color: 'red',
          points: [
            'Customer clustering algorithms',
            'Popularity analytics pipelines',
            'Behavioral learning components',
          ],
        },
        {
          title: 'Backend',
          color: 'red',
          points: ['FastAPI', 'MongoDB', 'SQLite'],
        },
      ],
    },
    {
      emoji: '🔮',
      title: 'Future Potential',
      items: [
        'Emotionally deeper assistants that adapt tone based on nuanced emotional signals',
        'Smart retail copilots for store navigation, product discovery, and campaign guidance',
        'Expanded multimodal input with gesture tracking and gaze-aware interaction',
        'Higher-fidelity digital humans with more realistic animation and interaction',
        'Predictive customer intelligence that anticipates needs proactively',
      ],
    },
    {
      emoji: '✅',
      title: 'Conclusion',
      items: [
        'SOFIA is more than a chatbot; it is an intelligent, human-centered interaction agent.',
        'It combines context awareness, emotional understanding, and continuous learning.',
        'The platform helps users through personalized engagement while providing business teams actionable insight.',
        'It represents an important first step toward advanced AI research in intelligent interactive systems.',
      ],
    },
  ],
  gradient: { from: 'from-blue-500', to: 'to-cyan-600' },
  featured: true,
};

export default project;
