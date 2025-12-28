"use client";

import { motion } from "framer-motion";
import { Code2, Server, Database, Cloud, GitBranch, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    color: "blue",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Material-UI", level: 85 },
      { name: "Redux & Context API", level: 85 },
      { name: "Vue.js", level: 75 },
    ]
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "purple",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 90 },
      { name: "NestJS", level: 85 },
      { name: "Python", level: 80 },
      { name: "Django", level: 75 },
      { name: "RESTful APIs", level: 95 },
      { name: "GraphQL", level: 85 },
      { name: "WebSockets", level: 80 },
      { name: "Microservices", level: 85 },
    ]
  },
  {
    title: "Database Technologies",
    icon: Database,
    color: "green",
    skills: [
      { name: "MongoDB", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 85 },
      { name: "Redis", level: 80 },
      { name: "Firebase", level: 80 },
      { name: "Elasticsearch", level: 75 },
      { name: "DynamoDB", level: 75 },
      { name: "Prisma ORM", level: 85 },
    ]
  },
  {
    title: "Cloud Services",
    icon: Cloud,
    color: "orange",
    skills: [
      { name: "AWS (EC2, S3, Lambda, RDS)", level: 90 },
      { name: "Azure (App Service, Functions)", level: 85 },
      { name: "Google Cloud Platform", level: 80 },
      { name: "AWS CloudFormation", level: 75 },
      { name: "Azure DevOps", level: 80 },
      { name: "Serverless Framework", level: 85 },
      { name: "Cloud Architecture", level: 85 },
      { name: "CDN & Edge Computing", level: 80 },
    ]
  },
  {
    title: "DevOps & Tools",
    icon: GitBranch,
    color: "red",
    skills: [
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 80 },
      { name: "Git & GitHub", level: 95 },
      { name: "CI/CD (Jenkins, GitLab CI)", level: 85 },
      { name: "GitHub Actions", level: 90 },
      { name: "Nginx", level: 80 },
      { name: "Linux/Unix", level: 85 },
      { name: "Monitoring (Prometheus, Grafana)", level: 75 },
    ]
  },
  {
    title: "Additional Skills",
    icon: Wrench,
    color: "indigo",
    skills: [
      { name: "Agile/Scrum", level: 90 },
      { name: "Test-Driven Development", level: 85 },
      { name: "Jest & Testing Library", level: 85 },
      { name: "Webpack & Vite", level: 80 },
      { name: "Socket.io", level: 85 },
      { name: "OAuth & JWT", level: 90 },
      { name: "SEO Optimization", level: 80 },
      { name: "Performance Optimization", level: 85 },
    ]
  },
];

const colorVariants: Record<string, { bg: string; text: string; progress: string }> = {
  blue: { bg: "bg-blue-100", text: "text-blue-600", progress: "bg-blue-600" },
  purple: { bg: "bg-purple-100", text: "text-purple-600", progress: "bg-purple-600" },
  green: { bg: "bg-green-100", text: "text-green-600", progress: "bg-green-600" },
  orange: { bg: "bg-orange-100", text: "text-orange-600", progress: "bg-orange-600" },
  red: { bg: "bg-red-100", text: "text-red-600", progress: "bg-red-600" },
  indigo: { bg: "bg-indigo-100", text: "text-indigo-600", progress: "bg-indigo-600" },
};

export default function Skills() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Skills & Expertise</h1>
            <p className="text-xl text-blue-100">
              A comprehensive overview of my technical stack and proficiency levels
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              const colors = colorVariants[category.color];
              
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className={`${colors.bg} p-3 rounded-lg mr-4`}>
                      <Icon className={`h-8 w-8 ${colors.text}`} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">{category.title}</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-slate-800">{skill.name}</span>
                          <span className="text-slate-700">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.05 }}
                            viewport={{ once: true }}
                            className={`${colors.progress} h-2.5 rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">Certifications & Learning</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2 text-slate-900">AWS Certified Solutions Architect</h3>
                <p className="text-slate-800">Amazon Web Services</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2 text-slate-900">Microsoft Azure Fundamentals</h3>
                <p className="text-slate-800">Microsoft</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2 text-slate-900">Google Cloud Associate</h3>
                <p className="text-slate-800">Google Cloud Platform</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2 text-slate-900">MongoDB Certified Developer</h3>
                <p className="text-slate-800">MongoDB University</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
