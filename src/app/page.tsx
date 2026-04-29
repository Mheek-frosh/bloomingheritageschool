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
  ChevronLeft,
  X
} from "lucide-react";

const carouselImages = [
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop"
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);

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
              <span className="inline-block py-1 px-3 rounded-full bg-bhs-beige text-bhs-brown font-semibold text-xs md:text-sm mb-6 tracking-wide uppercase shadow-sm">
                Excellence in Early Education
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-md">
                Nurturing Confident <br/> & Creative Learners
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl drop-shadow-sm">
                A premier nursery and primary educational institution in Lokogoma, Abuja. Combining Nigerian and British curricula for a truly globally minded generation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about" className="bg-bhs-green text-white px-8 py-4 rounded-full font-semibold hover:bg-bhs-green/90 transition-all flex items-center justify-center gap-2 shadow-lg">
                  Discover Our School <ChevronRight className="w-5 h-5" />
                </Link>
                <button 
                  onClick={() => setIsAdmissionModalOpen(true)}
                  className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all flex items-center justify-center"
                >
                  View Admissions
                </button>
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
      <section className="py-24 bg-bhs-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <h2 className="text-sm font-bold text-white/80 tracking-widest uppercase mb-3">Welcome to Blooming Heritage</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Where Every Child Blossoms</h3>
          <p className="text-xl text-white mb-10 leading-relaxed">
            We are dedicated to providing a nurturing environment where children can discover their full potential. Through a carefully crafted curriculum and state-of-the-art facilities, we ensure that every student receives the foundation they need for lifelong success.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/about" className="px-8 py-4 bg-white text-bhs-green rounded-full font-bold hover:bg-gray-100 transition-all shadow-md">About Us</Link>
            <Link href="/approach" className="px-8 py-4 bg-transparent text-white border border-white/50 rounded-full font-bold hover:bg-white/10 transition-all shadow-sm">Our Approach</Link>
            <Link href="/facilities" className="px-8 py-4 bg-transparent text-white border border-white/50 rounded-full font-bold hover:bg-white/10 transition-all shadow-sm">Facilities</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#0d1b11] text-white border-t border-b border-[#0d1b11]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-bhs-beige tracking-widest uppercase mb-3">Why Choose Us</h2>
              <h3 className="text-4xl font-bold text-white mb-8">A Foundation Built on Excellence</h3>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-bhs-beige/10 text-bhs-beige flex items-center justify-center shrink-0">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Dual Curriculum</h4>
                    <p className="text-white/80">A perfect blend of Nigerian and British curricula, ensuring our students are globally competitive and locally grounded.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-bhs-brown/20 text-bhs-beige flex items-center justify-center shrink-0">
                    <MonitorPlay className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Modern Facilities</h4>
                    <p className="text-white/80">From interactive whiteboards to fully equipped science labs, our environment is designed to stimulate learning.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-bhs-beige/10 text-bhs-beige flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Expert Educators</h4>
                    <p className="text-white/80">Our team consists of highly qualified, passionate teachers who are dedicated to the holistic development of every child.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop"
                alt="Students learning"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 border-4 border-white/10 rounded-[2rem] m-4" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-bhs-green rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Join the Blooming Heritage Family?</h2>
            <p className="text-xl text-white/80 mb-10">
              Admissions are currently open for the upcoming academic session. Give your child the gift of qualitative education today.
            </p>
            <Link href="/enroll" className="inline-flex items-center justify-center gap-2 bg-white text-bhs-green px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:scale-105">
              Begin Application <ChevronRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Admission Modal */}
      <AnimatePresence>
        {isAdmissionModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsAdmissionModalOpen(false)}
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl w-full max-w-lg p-8 relative z-10 shadow-2xl"
            >
              <button 
                onClick={() => setIsAdmissionModalOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors text-gray-500"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="text-center mb-6 pt-4">
                <div className="w-16 h-16 bg-bhs-green/10 text-bhs-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">2025/2026 Admissions Ongoing</h3>
                <p className="text-gray-600">
                  Secure a spot for your child in a school dedicated to academic excellence and moral uprightness. Spaces are filling up quickly.
                </p>
              </div>
              
              <div className="space-y-4">
                <Link 
                  href="/enroll" 
                  onClick={() => setIsAdmissionModalOpen(false)}
                  className="w-full block text-center bg-bhs-green text-white py-4 rounded-xl font-bold text-lg hover:bg-bhs-green/90 transition-all shadow-md shadow-bhs-green/20"
                >
                  Enroll Your Child Now
                </Link>
                <button 
                  onClick={() => setIsAdmissionModalOpen(false)}
                  className="w-full text-center py-4 rounded-xl font-bold text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  Maybe Later
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
