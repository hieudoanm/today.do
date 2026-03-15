import {
  LandingContent,
  LandingTemplate,
} from '@tasks/templates/LandingTemplate';
import { NextPage } from 'next';

const content: LandingContent = {
  navbar: {
    title: 'TaskMaster',
    buttonText: 'Open App',
    buttonHref: '/app',
  },
  hero: {
    title: 'Organize Your Tasks Effortlessly',
    tagline:
      'A fast, privacy-first to-do app that helps you track, manage, and complete tasks from anywhere.',
    buttonText: 'Start Managing',
    buttonHref: '/app',
  },
  features: {
    title: 'Features',
    items: [
      {
        id: 'quick-add',
        emoji: '⚡',
        title: 'Quick Task Add',
        description:
          'Add tasks instantly with minimal effort and stay on top of your to-do list.',
      },
      {
        id: 'task-categories',
        emoji: '🗂️',
        title: 'Organize with Categories',
        description:
          'Group tasks by projects, priorities, or custom tags for better organization.',
      },
      {
        id: 'reminders',
        emoji: '⏰',
        title: 'Smart Reminders',
        description:
          'Never miss a deadline with notifications and recurring task reminders.',
      },
      {
        id: 'privacy-first',
        emoji: '🔒',
        title: 'Privacy First',
        description:
          'All your tasks stay in your browser. No data is uploaded or stored remotely.',
      },
      {
        id: 'cross-device-sync',
        emoji: '🔗',
        title: 'Cross-Device Sync',
        description:
          'Synchronize your tasks across devices without compromising your privacy.',
      },
      {
        id: 'progress-tracking',
        emoji: '📈',
        title: 'Progress Tracking',
        description:
          'Track completed tasks and visualize your productivity over time.',
      },
    ],
  },
  cta: {
    title: 'Start Managing Your Tasks Today',
    description:
      'Stay organized, meet deadlines, and boost productivity. No signup required.',
    buttonText: 'Open App',
    buttonHref: '/app',
  },
  footer: {
    name: 'TaskMaster',
  },
};

const HomePage: NextPage = () => {
  return <LandingTemplate content={content} />;
};

export default HomePage;
