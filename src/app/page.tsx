"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  BookOpen, 
  MonitorPlay, 
  Users, 
  Award, 
  ChevronRight,
  ChevronLeft
} from "lucide-react";

const carouselImages = [
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop"
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Carousel Section */}
      <section className="relative h-[85vh] overflow-hidden flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 -z-10"
          >
            <Image
              src={carouselImages[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-bhs-beige text-bhs-brown font-semibold text-sm mb-6 tracking-wide uppercase shadow-sm">
                Excellence in Early Education
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-md">
                Nurturing Confident <br/> & Creative Learners
              </h1>
              <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl drop-shadow-sm">
                A premier nursery and primary educational institution in Lokogoma, Abuja. Combining Nigerian and British curricula for a truly globally minded generation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about" className="bg-bhs-green text-white px-8 py-4 rounded-full font-semibold hover:bg-bhs-green/90 transition-all flex items-center justify-center gap-2 shadow-lg">
                  Discover Our School <ChevronRight className="w-5 h-5" />
                </Link>
                <Link href="/contact" className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all flex items-center justify-center">
                  View Admissions
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-8 right-8 flex gap-4 z-20">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-white/50 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-white/50 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="relative -mt-12 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-white rounded-3xl shadow-xl shadow-bhs-green/5 p-8 border border-gray-100 flex flex-col md:flex-row justify-around items-center gap-8">
          {[
            { icon: <Users className="w-8 h-8 text-bhs-green" />, stat: "200+", label: "Happy Students" },
            { icon: <MonitorPlay className="w-8 h-8 text-bhs-green" />, stat: "20+", label: "Modern Classrooms" },
            { icon: <BookOpen className="w-8 h-8 text-bhs-green" />, stat: "5,000+", label: "Library Books" },
            { icon: <Award className="w-8 h-8 text-bhs-green" />, stat: "10+", label: "Years of Excellence" },
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto bg-bhs-beige/30 rounded-2xl flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900">{item.stat}</div>
              <div className="text-sm text-gray-500 font-medium">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Intro Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Welcome to Blooming Heritage</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We are dedicated to providing a nurturing environment where children can discover their full potential. Explore our dedicated pages to learn more about who we are and what we do.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/about" className="px-6 py-3 bg-bhs-brown text-white rounded-full font-medium hover:bg-bhs-brown/90 transition-all shadow-md">About Us</Link>
            <Link href="/approach" className="px-6 py-3 bg-bhs-brown text-white rounded-full font-medium hover:bg-bhs-brown/90 transition-all shadow-md">Our Approach</Link>
            <Link href="/facilities" className="px-6 py-3 bg-bhs-brown text-white rounded-full font-medium hover:bg-bhs-brown/90 transition-all shadow-md">Facilities</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
