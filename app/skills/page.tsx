"use client";

import { motion } from "framer-motion";
import { Code2, Server, Database, Cloud, GitBranch, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    color: "blue",
    skills: [
      "Angular",
      "TypeScript",
      "JavaScript (ES6+)",
      "React.js",
      "Next.js",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Material-UI",
      "RxJS",
      "Responsive Design",
    ]
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "purple",
    skills: [
      "Java",
      "Spring Boot",
      "Spring Framework",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate ORM",
      "JPA",
      "Maven/Gradle",
      "RESTful APIs",
      "Microservices Architecture",
      "Apache Kafka",
      "RabbitMQ",
    ]
  },
  {
    title: "Database & ORM",
    icon: Database,
    color: "green",
    skills: [
      "Hibernate ORM",
      "JPA (Java Persistence API)",
      "Spring Data JPA",
      "MySQL",
      "PostgreSQL",
      "Oracle Database",
      "MongoDB",
      "Redis",
      "JDBC",
      "Query Optimization",
    ]
  },
  {
    title: "Cloud Services",
    icon: Cloud,
    color: "orange",
    skills: [
      "AWS EC2",
      "AWS S3",
      "AWS Lambda",
      "AWS RDS",
      "Azure",
      "Google Cloud",
      "CloudFormation",
      "Terraform",
      "Cloud Architecture",
      "Serverless",
    ]
  },
  {
    title: "DevOps & Tools",
    icon: GitBranch,
    color: "red",
    skills: [
      "Docker",
      "Kubernetes",
      "Git & GitHub",
      "Jenkins",
      "GitLab CI",
      "GitHub Actions",
      "Nginx",
      "Linux/Unix",
      "Prometheus",
      "Grafana",
    ]
  },
  {
    title: "Testing & Quality",
    icon: Wrench,
    color: "indigo",
    skills: [
      "JUnit",
      "Mockito",
      "Test-Driven Development",
      "Integration Testing",
      "Unit Testing",
      "Spring Boot Test",
      "MockMvc",
      "Code Coverage",
      "Debugging",
      "Performance Testing",
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
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className={`${colors.bg} ${colors.text} px-4 py-2 rounded-full font-medium text-sm hover:scale-105 transition-transform cursor-default`}
                      >
                        {skill}
                      </motion.div>
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
