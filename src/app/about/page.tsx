"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight, Award, Target, Users } from "lucide-react";

export default function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: "easeOut" as const }
  };

  return (
    <div className="pt-20">
      {/* Header Banner */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop"
          alt="School Campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-bhs-green/80 mix-blend-multiply" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">Discover our journey, our values, and our commitment to excellence.</p>
        </div>
      </div>

      <div className="bg-[#0d1b11] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <motion.div {...fadeInUp}>
              <h2 className="text-sm font-bold text-white/80 tracking-widest uppercase mb-3">Our Journey</h2>
              <h3 className="text-4xl font-bold text-white mb-6 leading-tight">
                A Legacy of Qualitative Education
              </h3>
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                Founded with the goal of delivering qualitative education to young children, Blooming Heritage School began operations with just 15 pupils. Today, we have grown to serve over 200 students.
              </p>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Operating under Blooming Heritage Schools Limited, incorporated in Nigeria in 2013, our campus now features interactive whiteboards, a well-equipped science laboratory, a dedicated music room, and an extensive library to support holistic development.
              </p>
            </motion.div>
            <motion.div 
              className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
                alt="School campus"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 border-4 border-white/20 rounded-[2rem] z-10 m-4" />
            </motion.div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              {...fadeInUp}
              className="bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-sm"
            >
              <Target className="w-12 h-12 text-bhs-brown mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-white/80 leading-relaxed text-lg">
                To provide early childhood and primary education in a modern, nurturing environment designed to develop confident and creative learners equipped with 21st-century skills.
              </p>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-sm"
            >
              <Users className="w-12 h-12 text-bhs-green mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/80 leading-relaxed text-lg">
                To be the premier educational institution in Abuja, recognized for a blend of academic rigor, global mindedness, and holistic child development.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
