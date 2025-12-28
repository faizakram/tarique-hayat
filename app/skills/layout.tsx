import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Skills & Expertise - Tarique Hayat',
  description: 'Explore Tarique Hayat\'s comprehensive technical skills including React, Next.js, Node.js, AWS, Azure, Google Cloud, Docker, Kubernetes, and modern development tools.',
  keywords: ['Technical Skills', 'Frontend Development', 'Backend Development', 'Cloud Services', 'DevOps', 'Full Stack Technologies'],
  openGraph: {
    title: 'Skills & Expertise - Tarique Hayat',
    description: 'Comprehensive overview of technical skills and expertise',
    type: 'website',
  },
};

export default function SkillsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
