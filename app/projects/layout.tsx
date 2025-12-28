import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Projects - Tarique Hayat Portfolio',
  description: 'Showcase of Tarique Hayat\'s software development projects including e-commerce platforms, cloud-native applications, analytics dashboards, and real-time systems.',
  keywords: ['Software Projects', 'Web Development Portfolio', 'Full Stack Projects', 'Cloud Applications', 'React Projects', 'Node.js Projects'],
  openGraph: {
    title: 'Projects - Tarique Hayat Portfolio',
    description: 'Explore recent projects and technical implementations',
    type: 'website',
  },
};

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
