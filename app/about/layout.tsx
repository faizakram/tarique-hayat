import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'About Tarique Hayat - Full Stack Developer',
  description: 'Learn about Tarique Hayat, a Full Stack Developer with 4 years of experience in building scalable web applications. Explore my professional journey, skills, and achievements.',
  keywords: ['About Tarique Hayat', 'Software Engineer Experience', 'Full Stack Developer Bio', 'Professional Background'],
  openGraph: {
    title: 'About Tarique Hayat - Full Stack Developer',
    description: 'Professional background and experience of Tarique Hayat',
    type: 'profile',
  },
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
