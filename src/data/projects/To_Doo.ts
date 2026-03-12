import type { ProjectDetail } from '@/data/projects';

const project: ProjectDetail = {
  slug: 'To_Doo',
  title: 'To Doo: Task Management Mobile App',
  description:
    'To Doo is a task management mobile app built with React Native and Expo. It helps users organise tasks, track deadlines, and monitor productivity with an intuitive interface.',
  coverImage: '/projects/To_Doo/cover.png',
  tags: ['React Native', 'Expo', 'Mobile Development'],
  links: [
    { type: 'github',  url: 'https://github.com/UGSNBandara/To_doo_ReactNative' },
    {
      type: 'android',
      url: 'https://drive.google.com/drive/folders/1TUWgr3amH1zp3YLz60WbGKQaabiw0JOO?usp=sharing',
    },
  ],
  sections: [
    {
      emoji: '✨',
      title: 'Key Features',
      content: [
        {
          title: 'Task Management',
          color: 'orange',
          points: [
            'Add tasks with deadlines, sorted automatically by priority',
            'Urgent tasks highlighted in red for immediate visibility',
          ],
        },
        {
          title: 'Completed Tasks Overview',
          color: 'orange',
          description:
            'Completed tasks stored in a dedicated tab, sorted by completion time for easy progress tracking.',
        },
        {
          title: 'Profile & Performance',
          color: 'orange',
          points: [
            'Profile photo and personal details display',
            'Performance Grid showing pending and completed tasks',
            'Overall performance percentage based on completion rates',
          ],
        },
      ],
    },
    {
      emoji: '💻',
      title: 'Technical Implementation',
      content: [
        {
          title: 'React Native with Expo',
          color: 'red',
          description: 'Cross-platform functionality ensuring seamless experience on both Android and iOS devices.',
        },
        {
          title: 'Dynamic Features',
          color: 'red',
          points: ['Dynamic task sorting by deadlines', 'Visual highlighting for urgent tasks'],
        },
        {
          title: 'User-Centric Design',
          color: 'red',
          description: 'Simple and functional interface for quick task management and progress tracking.',
        },
      ],
    },
    {
      emoji: '🚀',
      title: 'Future Enhancements',
      items: [
        'Integration with calendars and reminders for better task notifications',
        'Addition of task categories and labels for improved organisation',
      ],
    },
  ],
  gradient: { from: 'from-orange-500', to: 'to-red-500' },
  featured: false,
};

export default project;
