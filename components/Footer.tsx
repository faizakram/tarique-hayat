"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/tariquehayat", label: "GitHub", color: "hover:text-slate-900" },
    { icon: Linkedin, href: "https://linkedin.com/in/tariquehayat", label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: Twitter, href: "https://twitter.com/tariquehayat", label: "Twitter", color: "hover:text-sky-500" },
    { icon: Mail, href: "mailto:hayattarique3@gmail.com", label: "Email", color: "hover:text-red-500" },
  ];

  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Tarique Hayat
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Full Stack Developer & Cloud Architect passionate about building scalable, innovative solutions that make a difference.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-white/5 backdrop-blur-sm border border-white/10 p-3 rounded-xl transition-colors ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center group"
                  >
                    <ExternalLink className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold text-white">Get In Touch</h4>
            <div className="space-y-3 text-slate-400">
              <p className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 text-cyan-400 flex-shrink-0" />
                <a href="mailto:hayattarique3@gmail.com" className="hover:text-cyan-400 transition-colors">
                  hayattarique3@gmail.com
                </a>
              </p>
              <p className="text-sm leading-relaxed">
                Available for freelance opportunities and full-time positions. Let's create something amazing together!
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex justify-center items-center">
            <p className="text-slate-400 text-sm text-center">
              © {new Date().getFullYear()} Tarique Hayat. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
