"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <Link href="/" className="relative group">
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {/* Outer glow effect */}
        <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg opacity-0 group-hover:opacity-75 blur transition-opacity duration-500"></div>
        
        {/* Logo container */}
        <div className="relative flex items-center gap-2 bg-white px-3 py-2 rounded-lg">
          {/* Animated icon */}
          <motion.div
            className="relative w-10 h-10"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg viewBox="0 0 40 40" className="w-full h-full">
              {/* Background circle with gradient */}
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="50%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
              </defs>
              
              {/* Outer circle */}
              <circle cx="20" cy="20" r="18" fill="url(#logoGradient)" opacity="0.2" />
              
              {/* T letter */}
              <motion.path
                d="M 12 12 L 28 12 L 28 15 L 21.5 15 L 21.5 28 L 18.5 28 L 18.5 15 L 12 15 Z"
                fill="url(#logoGradient)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              
              {/* H letter overlay */}
              <motion.path
                d="M 25 16 L 25 28 L 28 28 L 28 16 Z M 32 16 L 32 28 L 35 28 L 35 16 Z M 25 21 L 35 21 L 35 23 L 25 23 Z"
                fill="url(#logoGradient)"
                opacity="0.7"
                transform="translate(-10, 0) scale(0.8)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.7 }}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>
          
          {/* Text logo */}
          <div className="flex flex-col leading-none">
            <motion.span
              className="text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Tarique
            </motion.span>
            <motion.span
              className="text-xs font-semibold text-gray-600"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              HAYAT
            </motion.span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
