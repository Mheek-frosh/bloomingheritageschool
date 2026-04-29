"use client";

import Link from "next/link";
import { BookOpen, MapPin, Phone, Clock, ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Thin Announcement Bar */}
      <div className="bg-bhs-brown text-white text-xs font-medium py-2 px-4 sm:px-6 lg:px-8 hidden md:block z-[60] relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><Phone className="w-3 h-3" /> 0818 034 2163</span>
            <span className="flex items-center gap-2"><MapPin className="w-3 h-3" /> A3 Ben Magaji Road, Lokogoma, Abuja</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3 h-3" />
            <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-bhs-beige shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-3 group z-50">
              <div className="w-10 h-10 rounded-full bg-bhs-green flex items-center justify-center group-hover:scale-105 transition-transform">
                <BookOpen className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg md:text-xl text-bhs-green tracking-tight leading-none">
                  Blooming Heritage
                </span>
                <span className="text-[9px] md:text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">School</span>
              </div>
            </Link>
            
            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-1 relative">
              <Link 
                href="/"
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  pathname === "/" ? "bg-bhs-green/10 text-bhs-green" : "text-gray-600 hover:text-bhs-green hover:bg-gray-50"
                }`}
              >
                Home
              </Link>

              {/* About Us Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsAboutHovered(true)}
                onMouseLeave={() => setIsAboutHovered(false)}
              >
                <button 
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-1 ${
                    ['/about', '/ceo', '/careers'].includes(pathname) ? "bg-bhs-green/10 text-bhs-green" : "text-gray-600 hover:text-bhs-green hover:bg-gray-50"
                  }`}
                >
                  About Us <ChevronDown className="w-4 h-4" />
                </button>
                
                {isAboutHovered && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-100 rounded-2xl shadow-xl py-2 flex flex-col z-50 overflow-hidden">
                    <Link href="/about" className="px-4 py-2 text-sm text-gray-600 hover:bg-bhs-green/5 hover:text-bhs-green font-medium">Our Journey</Link>
                    <Link href="/ceo" className="px-4 py-2 text-sm text-gray-600 hover:bg-bhs-green/5 hover:text-bhs-green font-medium">Meet the CEO</Link>
                    <Link href="/careers" className="px-4 py-2 text-sm text-gray-600 hover:bg-bhs-green/5 hover:text-bhs-green font-medium">Careers</Link>
                  </div>
                )}
              </div>

              <Link 
                href="/approach"
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  pathname === "/approach" ? "bg-bhs-green/10 text-bhs-green" : "text-gray-600 hover:text-bhs-green hover:bg-gray-50"
                }`}
              >
                Approach
              </Link>
              
              <Link 
                href="/facilities"
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  pathname === "/facilities" ? "bg-bhs-green/10 text-bhs-green" : "text-gray-600 hover:text-bhs-green hover:bg-gray-50"
                }`}
              >
                Facilities
              </Link>

              <Link 
                href="/contact"
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  pathname === "/contact" ? "bg-bhs-green/10 text-bhs-green" : "text-gray-600 hover:text-bhs-green hover:bg-gray-50"
                }`}
              >
                Contact
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Link href="/enroll" className="bg-bhs-green text-white px-6 py-2.5 rounded-full font-medium hover:bg-bhs-green/90 transition-all shadow-md shadow-bhs-green/20">
                Enroll Now
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-gray-600 hover:text-bhs-green transition-colors z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-0 left-0 w-full bg-white border-b border-gray-100 shadow-xl overflow-y-auto"
              style={{ top: "80px", height: "calc(100vh - 80px)" }}
            >
              <div className="p-6 flex flex-col gap-4">
                <Link 
                  href="/"
                  className={`p-4 rounded-2xl font-bold text-lg ${pathname === "/" ? "bg-bhs-green/10 text-bhs-green" : "text-gray-800 bg-gray-50"}`}
                >
                  Home
                </Link>

                <div className="bg-gray-50 rounded-2xl overflow-hidden">
                  <button 
                    onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                    className="w-full p-4 flex justify-between items-center font-bold text-lg text-gray-800"
                  >
                    About Us
                    <ChevronDown className={`w-5 h-5 transition-transform ${isMobileAboutOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {isMobileAboutOpen && (
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="flex flex-col bg-white/50 px-4 pb-4"
                      >
                        <Link href="/about" className="py-3 px-4 text-gray-600 font-medium border-b border-gray-100">Our Journey</Link>
                        <Link href="/ceo" className="py-3 px-4 text-gray-600 font-medium border-b border-gray-100">Meet the CEO</Link>
                        <Link href="/careers" className="py-3 px-4 text-gray-600 font-medium">Careers</Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link 
                  href="/approach"
                  className={`p-4 rounded-2xl font-bold text-lg ${pathname === "/approach" ? "bg-bhs-green/10 text-bhs-green" : "text-gray-800 bg-gray-50"}`}
                >
                  Approach
                </Link>

                <Link 
                  href="/facilities"
                  className={`p-4 rounded-2xl font-bold text-lg ${pathname === "/facilities" ? "bg-bhs-green/10 text-bhs-green" : "text-gray-800 bg-gray-50"}`}
                >
                  Facilities
                </Link>

                <Link 
                  href="/contact"
                  className={`p-4 rounded-2xl font-bold text-lg ${pathname === "/contact" ? "bg-bhs-green/10 text-bhs-green" : "text-gray-800 bg-gray-50"}`}
                >
                  Contact
                </Link>

                <Link 
                  href="/enroll"
                  className="mt-4 p-4 rounded-2xl font-bold text-lg text-center bg-bhs-green text-white shadow-lg shadow-bhs-green/20"
                >
                  Enroll Now
                </Link>

                {/* Mobile Contact Info */}
                <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col gap-4 text-gray-500 text-sm font-medium">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-bhs-brown/10 text-bhs-brown flex items-center justify-center">
                      <Phone className="w-4 h-4" />
                    </div>
                    0818 034 2163
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-bhs-green/10 text-bhs-green flex items-center justify-center">
                      <MapPin className="w-4 h-4" />
                    </div>
                    Lokogoma, Abuja
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-bhs-beige/30 text-bhs-brown flex items-center justify-center">
                      <Clock className="w-4 h-4" />
                    </div>
                    Mon - Fri: 8:00 AM - 6:00 PM
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
