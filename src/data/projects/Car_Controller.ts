import type { ProjectDetail } from '@/data/projects';

const project: ProjectDetail = {
  slug: 'Car_Controller',
  title: 'Car Driving Game Controller Using YOLOv8 and OpenCV',
  description:
    'I built a gaming controller using regiform (foam materials) and AI! This project combines YOLOv8n with OpenCV to create a fully functional controller with a steering wheel, gear, and brake system.',
  coverEmbed:
    '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7334563296475258880?compact=1" height="399" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
  tags: ['YOLOv8', 'OpenCV', 'Roboflow', 'Computer Vision', 'Python', 'C++'],
  links: [
    {
      type: 'linkedin',
      url: 'https://www.linkedin.com/posts/nulaksha-bandara_gamecontroller-yolov8-opencv-activity-7334565205672165380-hgP5',
    },
    {
      type: 'wandb',
      url: 'https://wandb.ai/nulakshastudy19-university-of-ruhuna/YOLOv8?nw=nwusernulakshastudy19',
    },
    {
      type: 'roboflow',
      url: 'https://universe.roboflow.com/sulithasroboflow/driving-controller',
    },
  ],
  sections: [
    {
      emoji: '⚙️',
      title: 'How It Works',
      items: [
        'The steering wheel, gear, and brake are handcrafted from regiform (foam materials).',
        'Movements are detected by a camera in real-time.',
        'YOLOv8n model (trained with Roboflow) identifies control movements.',
        'Detected movements are converted into game input commands.',
      ],
    },
    {
      emoji: '📈',
      title: 'Training Process',
      content: [
        {
          title: 'Dataset & Annotation',
          color: 'red',
          points: [
            'Custom dataset collected and annotated using Roboflow',
            'Labelled classes: steering wheel positions, gear states, brake activation',
          ],
        },
        {
          title: 'Model Training',
          color: 'red',
          points: [
            'YOLOv8n fine-tuned on the custom dataset',
            'Training metrics tracked on Weights & Biases',
            'Optimised for real-time inference speed',
          ],
        },
      ],
    },
  ],
  gradient: { from: 'from-red-500', to: 'to-orange-600' },
  featured: true,
};

export default project;
