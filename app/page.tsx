"use client";

import Link from "next/link";
import { ArrowRight, Code, Cloud, Database, Globe, Sparkles, Zap, Rocket, Award } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedBackground from "@/components/AnimatedBackground";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
  },
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
        <AnimatedBackground />
        
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djRoLTJ2LTRoLTR2LTJoNHYtNGgydjRoNHYyaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNHY0aC00ek02IDM0djRINHYtNEgwdi0yaDR2LTRoMnY0aDR2MmgtNHptMC0zMFYwSDR2NEgwdjJoNHY0aDJWNmg0VjR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-5xl mx-auto text-center"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <motion.div
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-full shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(255,255,255,0.2)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Sparkles className="h-4 w-4 text-yellow-300 animate-pulse" />
                <span className="text-sm font-semibold text-white">Available for Exciting Projects</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </motion.div>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 leading-tight">
                <span className="block text-white mb-2">Hi, I'm</span>
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                    Tarique Hayat
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 blur-3xl opacity-30"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.h2 
              variants={itemVariants} 
              className="text-2xl sm:text-3xl md:text-4xl mb-4 font-bold bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent"
            >
              Java Backend Developer & Full Stack Engineer
            </motion.h2>

            {/* Description */}
            <motion.p 
              variants={itemVariants} 
              className="text-lg sm:text-xl md:text-2xl mb-7 text-blue-100 max-w-3xl mx-auto leading-relaxed font-light"
            >
              Building enterprise-grade backend systems with Java and Spring Boot, coupled with modern frontend technologies. 
              <span className="font-semibold text-white"> 4 years of expertise</span> in scalable microservices, 
              RESTful APIs, and full-stack development.
            </motion.p>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mb-8"
            >
              {[
                { number: "4+", label: "Years Experience" },
                { number: "50+", label: "Projects Delivered" },
                { number: "99%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-blue-200">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div 
              variants={itemVariants} 
              className="flex flex-col sm:flex-row gap-3 justify-center items-center"
            >
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }} 
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/projects"
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-900 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl overflow-hidden shadow-2xl transition-all"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View My Work
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }} 
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border-2 border-white/30 rounded-xl backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all shadow-lg"
                >
                  Let's Connect
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
            <motion.div 
              className="w-1.5 h-2 bg-white rounded-full mx-auto"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Core Expertise Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              What I Do Best
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
              Delivering end-to-end solutions across the full technology stack
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Database,
                title: "Backend Engineering",
                desc: "Enterprise Java applications with Spring Boot, Hibernate, JPA, and microservices architecture",
                color: "from-purple-500 to-pink-500",
                iconBg: "bg-purple-50",
                iconColor: "text-purple-600",
              },
              {
                icon: Code,
                title: "Frontend Development",
                desc: "Modern, responsive interfaces with Angular, React, TypeScript, and contemporary UI frameworks",
                color: "from-blue-500 to-cyan-500",
                iconBg: "bg-blue-50",
                iconColor: "text-blue-600",
              },
              {
                icon: Cloud,
                title: "Cloud & DevOps",
                desc: "Deployment and orchestration on AWS, Azure with Docker, Kubernetes, and CI/CD automation",
                color: "from-green-500 to-emerald-500",
                iconBg: "bg-green-50",
                iconColor: "text-green-600",
              },
              {
                icon: Globe,
                title: "Testing & Quality",
                desc: "TDD with JUnit, Mockito, integration testing, and ensuring code quality with best practices",
                color: "from-orange-500 to-red-500",
                iconBg: "bg-orange-50",
                iconColor: "text-orange-600",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-slate-100"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}></div>
                
                <div className={`${item.iconBg} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon className={`h-8 w-8 ${item.iconColor}`} />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                
                {/* Bottom accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick About Preview */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-full mb-6 border border-blue-400/30">
                <Award className="h-4 w-4 text-blue-400" />
                <span className="text-sm font-semibold text-blue-300">4 Years of Excellence</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Passionate About
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mt-2">
                  Clean Code & Innovation
                </span>
              </h2>
              
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                I transform complex business requirements into elegant, scalable solutions. 
                My approach combines cutting-edge technologies with best practices to deliver 
                exceptional user experiences and maintainable codebases.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { icon: Zap, label: "Fast Learner" },
                  { icon: Rocket, label: "Quick Delivery" },
                  { icon: Award, label: "Quality First" },
                  { icon: Globe, label: "Global Mindset" },
                ].map((badge, index) => (
                  <motion.div
                    key={badge.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/10"
                  >
                    <badge.icon className="h-5 w-5 text-cyan-400" />
                    <span className="text-sm font-medium">{badge.label}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-blue-500/50 transition-all"
                >
                  Learn More About Me
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">Tech Stack Highlights</h3>
                
                <div className="space-y-6">
                  {[
                    { category: "Backend", techs: ["Java", "Spring Boot", "Hibernate", "JPA"] },
                    { category: "Frontend", techs: ["Angular", "TypeScript", "React", "Next.js"] },
                    { category: "Database", techs: ["MySQL", "PostgreSQL", "Oracle", "MongoDB"] },
                    { category: "Testing", techs: ["JUnit", "Mockito", "Spring Test", "TDD"] },
                  ].map((stack, index) => (
                    <motion.div
                      key={stack.category}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-slate-300">{stack.category}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {stack.techs.map((tech) => (
                          <span
                            key={tech}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-lg text-sm text-slate-200 hover:bg-white/10 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  className="mt-8 pt-6 border-t border-white/10"
                  whileHover={{ scale: 1.02 }}
                >
                  <Link
                    href="/skills"
                    className="flex items-center justify-between text-cyan-400 hover:text-cyan-300 transition-colors group"
                  >
                    <span className="font-semibold">View All Skills</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-700 text-white relative overflow-hidden">
        {/* Animated background circles */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate on innovative projects.
              Let's turn your ideas into reality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold shadow-2xl hover:shadow-white/50 transition-all"
                >
                  Start a Conversation
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold backdrop-blur-sm hover:bg-white/10 transition-all"
                >
                  View Portfolio
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
