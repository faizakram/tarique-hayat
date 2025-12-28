"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Linkedin, Circle, Twitter } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-blue-100">
              Let's discuss your project and how I can help bring your ideas to life
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Contact Information</h2>
              <p className="text-slate-700 mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of your vision. Feel free to reach out through any of the following channels.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-slate-900">Email</h3>
                    <a href="mailto:hayattarique3@gmail.com" className="text-slate-700 hover:text-blue-600">
                      hayattarique3@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-slate-900">Phone</h3>
                    <a href="tel:+917970325605" className="text-slate-700 hover:text-blue-600">
                      +91 7970325605
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-slate-900">Location</h3>
                    <p className="text-slate-700">Pinic Garden, Kolkata, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold mb-4 text-slate-900">Connect on Social Media</h3>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/in/tariqhyatt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a
                    href="https://github.com/tariqhyatt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 text-white p-3 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Circle className="h-6 w-6" />
                  </a>
                  <a
                    href="https://twitter.com/tariqhyatt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-400 text-white p-3 rounded-lg hover:bg-blue-500 transition-colors"
                  >
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                <h3 className="font-semibold mb-2 text-slate-900">Availability</h3>
                <p className="text-slate-800">
                  Currently available for freelance projects and consulting opportunities. 
                  I typically respond within 24 hours.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Send Me a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition text-slate-900 placeholder:text-slate-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition text-slate-900 placeholder:text-slate-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition text-slate-900 placeholder:text-slate-500"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition resize-none text-slate-900 placeholder:text-slate-500"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-colors inline-flex items-center justify-center ${
                    status === "sending"
                      ? "bg-gray-400 cursor-not-allowed"
                      : status === "success"
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {status === "sending" ? (
                    "Sending..."
                  ) : status === "success" ? (
                    "Message Sent!"
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>

                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-600 text-center"
                  >
                    Thank you! I'll get back to you soon.
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
