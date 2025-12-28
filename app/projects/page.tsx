"use client";

import { motion } from "framer-motion";
import { ExternalLink, Circle } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard. Built with modern technologies for optimal performance.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "AWS S3", "Redis"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    github: "https://github.com/tariqhyatt/ecommerce-platform",
    demo: "https://demo-ecommerce.example.com",
    highlights: [
      "Handles 10,000+ daily transactions",
      "Real-time inventory synchronization",
      "Multi-currency support",
      "Advanced analytics dashboard"
    ]
  },
  {
    title: "Cloud-Native Task Management",
    description: "Enterprise task management system with team collaboration features, built on microservices architecture and deployed on AWS.",
    technologies: ["React", "NestJS", "PostgreSQL", "Docker", "Kubernetes", "AWS"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
    github: "https://github.com/tariqhyatt/task-manager",
    demo: "https://demo-tasks.example.com",
    highlights: [
      "Microservices architecture",
      "Real-time collaboration",
      "Scalable to 100K+ users",
      "99.9% uptime"
    ]
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time analytics platform with AI-driven insights, predictive analytics, and customizable reporting for business intelligence.",
    technologies: ["Next.js", "Python", "TensorFlow", "D3.js", "GraphQL", "Azure"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    github: "https://github.com/tariqhyatt/analytics-dashboard",
    demo: "https://demo-analytics.example.com",
    highlights: [
      "Machine learning predictions",
      "Real-time data visualization",
      "Custom report generation",
      "Multi-tenant architecture"
    ]
  },
  {
    title: "Social Media Integration Platform",
    description: "Unified platform for managing multiple social media accounts with scheduling, analytics, and engagement tracking capabilities.",
    technologies: ["React", "Node.js", "MongoDB", "Redis", "Bull Queue", "GCP"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    github: "https://github.com/tariqhyatt/social-platform",
    demo: "https://demo-social.example.com",
    highlights: [
      "Multi-platform integration",
      "Automated scheduling",
      "Engagement analytics",
      "AI-powered content suggestions"
    ]
  },
  {
    title: "Healthcare Patient Portal",
    description: "HIPAA-compliant patient portal with appointment scheduling, medical records management, and telemedicine integration.",
    technologies: ["Next.js", "Express", "PostgreSQL", "WebRTC", "AWS", "Docker"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    github: "https://github.com/tariqhyatt/healthcare-portal",
    demo: "https://demo-healthcare.example.com",
    highlights: [
      "HIPAA compliant",
      "Secure video consultations",
      "Electronic health records",
      "Appointment management"
    ]
  },
  {
    title: "Real-Time Chat Application",
    description: "Scalable chat application with WebSocket support, file sharing, group conversations, and end-to-end encryption.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redis", "AWS Lambda"],
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=600&fit=crop",
    github: "https://github.com/tariqhyatt/realtime-chat",
    demo: "https://demo-chat.example.com",
    highlights: [
      "End-to-end encryption",
      "Real-time messaging",
      "File sharing",
      "Group conversations"
    ]
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
            <p className="text-xl text-blue-100">
              A showcase of my recent work and technical implementations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-64 bg-gradient-to-br from-blue-500 to-purple-600">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                    >
                      <Circle className="h-5 w-5 text-gray-900" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                    >
                      <ExternalLink className="h-5 w-5 text-gray-900" />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">{project.title}</h3>
                  <p className="text-slate-700 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-slate-900">Key Highlights:</h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-700">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="text-sm">{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Contribution */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Open Source Contributions</h2>
            <p className="text-lg text-slate-800 mb-8">
              I actively contribute to open source projects and believe in giving back to the 
              developer community. Check out my GitHub profile for more projects and contributions.
            </p>
            <a
              href="https://github.com/tariqhyatt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              <Circle className="mr-2 h-5 w-5" />
              View GitHub Profile
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
