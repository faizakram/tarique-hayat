import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Contact Tarique Hayat - Get In Touch',
  description: 'Contact Tarique Hayat for software development projects, consulting, or collaboration opportunities. Available for freelance work and full-time positions.',
  keywords: ['Contact', 'Hire Full Stack Developer', 'Software Development Consulting', 'Freelance Developer'],
  openGraph: {
    title: 'Contact Tarique Hayat',
    description: 'Get in touch for projects and opportunities',
    type: 'website',
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
