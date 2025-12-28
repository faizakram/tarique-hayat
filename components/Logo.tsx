"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <Link href="/" className="relative group">
      <motion.div
        className="relative flex items-center gap-3"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {/* Outer glow effect */}
        <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-75 blur-lg transition-opacity duration-500"></div>
        
        {/* Clean Professional TH Monogram */}
        <motion.div
          className="relative w-12 h-12"
          animate={{ y: [0, -1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>

            {/* Modern square background */}
            <rect x="5" y="5" width="90" height="90" rx="12" fill="url(#logoGradient)" />
            
            {/* Letter T in white */}
            <path
              d="M 25 25 L 75 25 L 75 35 L 55 35 L 55 75 L 45 75 L 45 35 L 25 35 Z"
              fill="white"
            />
            
            {/* Letter H in white */}
            <path
              d="M 30 45 L 38 45 L 38 75 L 30 75 Z M 62 45 L 70 45 L 70 75 L 62 75 Z M 30 57 L 70 57 L 70 63 L 30 63 Z"
              fill="white"
              opacity="0.95"
            />
          </svg>
        </motion.div>
        
        {/* Text logo */}
        <div className="relative flex flex-col leading-none">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Tarique
          </span>
          <span className="text-xs font-semibold text-slate-600 tracking-wider">
            HAYAT
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
