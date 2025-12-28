"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Target } from "lucide-react";

export default function About() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-blue-100">
              Passionate about building exceptional digital experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Profile Section with Photo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 mb-12"
            >
              <div className="grid md:grid-cols-3 gap-8 items-start">
                {/* Professional Photo */}
                <div className="md:col-span-1">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 shadow-xl">
                      <img
                        src="/profile.jpg"
                        alt="Tarique Hayat - Java Backend Developer"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to gradient with initials if image not found
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = `
                            <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600">
                              <span class="text-6xl font-bold text-white">TH</span>
                            </div>
                          `;
                        }}
                      />
                    </div>
                    {/* Decorative border */}
                    <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl -z-10 blur-sm opacity-50"></div>
                  </motion.div>
                </div>

                {/* Journey Content */}
                <div className="md:col-span-2">
                  <h2 className="text-3xl font-bold mb-6 text-slate-900">My Journey</h2>
              <p className="text-lg text-slate-800 mb-4">
                I'm Tarique Hayat, a Java Backend Developer with 4 years of professional experience 
                specializing in enterprise application development. My expertise centers on building robust, 
                scalable backend systems using Java, Spring Boot, and related technologies, complemented by 
                full-stack capabilities in modern frontend frameworks.
              </p>
              <p className="text-lg text-slate-800 mb-4">
                Throughout my career, I've architected and developed enterprise-grade backend services, 
                microservices architectures, and RESTful APIs. My core strengths include Java ecosystem 
                technologies (Spring Boot, Hibernate, JPA), database design with MySQL, PostgreSQL, and Oracle, 
                and implementing comprehensive testing strategies using JUnit and Mockito. On the frontend, 
                I work with Angular and React to deliver complete solutions.
              </p>
              <p className="text-lg text-slate-800">
                I'm committed to writing clean, maintainable code following best practices and design patterns. 
                My approach emphasizes test-driven development, performance optimization, and delivering 
                solutions that meet both technical requirements and business objectives.
              </p>
                </div>
              </div>
            </motion.div>

            {/* Experience Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">Professional Experience</h2>
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-start">
                    <Briefcase className="h-8 w-8 text-blue-600 mt-1 mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-slate-900">Senior Java Backend Developer</h3>
                      <p className="text-slate-600 mb-2">Tech Solutions Inc. • 2022 - Present</p>
                      <ul className="list-disc list-inside space-y-2 text-slate-800">
                        <li>Developed enterprise microservices using Java Spring Boot serving 1M+ users</li>
                        <li>Implemented RESTful APIs and integrated messaging systems with Kafka and RabbitMQ</li>
                        <li>Designed and optimized database schemas for MySQL, PostgreSQL, and Oracle</li>
                        <li>Achieved 90%+ code coverage using JUnit and Mockito test frameworks</li>
                        <li>Led backend architecture decisions and mentored junior developers</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-start">
                    <Briefcase className="h-8 w-8 text-blue-600 mt-1 mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-slate-900">Full Stack Developer</h3>
                      <p className="text-slate-600 mb-2">Digital Innovations Ltd. • 2021 - 2022</p>
                      <ul className="list-disc list-inside space-y-2 text-slate-800">
                        <li>Developed responsive web applications using React and Node.js</li>
                        <li>Integrated third-party APIs and payment gateways</li>
                        <li>Optimized database queries improving performance by 40%</li>
                        <li>Collaborated with cross-functional teams in Agile environment</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-start">
                    <Briefcase className="h-8 w-8 text-blue-600 mt-1 mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-slate-900">Junior Software Engineer</h3>
                      <p className="text-slate-600 mb-2">StartUp Ventures • 2020 - 2021</p>
                      <ul className="list-disc list-inside space-y-2 text-slate-800">
                        <li>Built RESTful APIs and implemented authentication systems</li>
                        <li>Developed frontend components using React and TypeScript</li>
                        <li>Participated in daily standups and sprint planning</li>
                        <li>Wrote unit tests achieving 85% code coverage</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skills Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-slate-900">Mission</h3>
                <p className="text-slate-700">
                  To build innovative solutions that solve real-world problems
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-slate-900">Achievements</h3>
                <p className="text-slate-700">
                  AWS Certified, Multiple hackathon wins, Open source contributor
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <GraduationCap className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-slate-900">Education</h3>
                <p className="text-slate-700">
                  B.S. Computer Science, Continuous learning enthusiast
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
