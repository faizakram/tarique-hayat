"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-xl border-b border-slate-200"
            : "bg-white/90 backdrop-blur-sm shadow-md"
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center">
              <Logo />
            </div>

            <div className="hidden md:flex md:space-x-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative px-5 py-2.5 rounded-xl font-semibold text-sm transition-all group"
                  >
                    <span className={`relative z-10 transition-colors ${isActive ? "text-white" : "text-slate-700 group-hover:text-slate-900"}`}>
                      {item.name}
                    </span>
                    {isActive ? (
                      <motion.div layoutId="navbar-indicator" className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="flex md:hidden">
              <motion.button whileTap={{ scale: 0.95 }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="inline-flex items-center justify-center rounded-xl p-2.5 text-slate-700 hover:bg-blue-600 hover:text-white transition-colors">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence mode="wait">
        {mobileMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} onClick={() => setMobileMenuOpen(false)} className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden" style={{ zIndex: 99998 }} />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 30, stiffness: 300 }} className="fixed right-0 top-0 h-screen w-80 max-w-[85vw] bg-white shadow-2xl md:hidden flex flex-col" style={{ zIndex: 99999 }}>
              <div className="flex items-center justify-between p-6 border-b border-slate-200 flex-shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">TH</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Tarique Hayat</h3>
                    <p className="text-xs text-slate-600">Java Backend Developer</p>
                  </div>
                </div>
                <motion.button whileTap={{ scale: 0.9 }} onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
                  <X className="h-6 w-6 text-slate-700" />
                </motion.button>
              </div>
              <div className="flex-1 overflow-y-auto">
                <div className="p-6 space-y-2 pb-32">
                  {navigation.map((item, index) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.div key={item.name} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.08, type: "spring", stiffness: 300, damping: 24 }}>
                        <Link href={item.href} onClick={() => setMobileMenuOpen(false)} className={`relative flex items-center justify-between px-5 py-4 rounded-xl font-semibold text-base transition-all ${isActive ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30" : "text-slate-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-slate-900"}`}>
                          <span className="flex items-center gap-3">
                            <span className={`w-1.5 h-1.5 rounded-full transition-all ${isActive ? "bg-white w-2 h-2" : "bg-blue-600 opacity-0"}`}></span>
                            {item.name}
                          </span>
                          {isActive && <div className="w-2 h-2 bg-white rounded-full"></div>}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="border-t border-slate-200 bg-gradient-to-br from-blue-50 to-purple-50 p-6 flex-shrink-0">
                <p className="text-sm text-slate-600 text-center mb-3">Let's connect!</p>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
