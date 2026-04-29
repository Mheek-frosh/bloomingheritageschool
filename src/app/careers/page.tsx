"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase, ChevronRight, GraduationCap, Users } from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: "easeOut" as const }
  };

  return (
    <div className="pt-20 bg-[#faf9f6] min-h-screen">
      {/* Header Banner */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
          alt="Team Collaboration"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-bhs-green/80 mix-blend-multiply" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Careers</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">Join our team of dedicated educators and professionals.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div {...fadeInUp}>
            <h2 className="text-sm font-bold text-bhs-brown tracking-widest uppercase mb-3">Join Us</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Shape the Future</h3>
            <p className="text-lg text-gray-600">
              We are always on the lookout for passionate, innovative, and dedicated individuals to join our team. If you are committed to delivering excellence in education, we want to hear from you.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <motion.div {...fadeInUp} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 text-center">
            <div className="w-16 h-16 bg-bhs-green/10 text-bhs-green rounded-2xl flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Professional Growth</h4>
            <p className="text-gray-600">Continuous training and development opportunities to advance your career in education.</p>
          </motion.div>
          
          <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 text-center">
            <div className="w-16 h-16 bg-bhs-brown/10 text-bhs-brown rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Collaborative Team</h4>
            <p className="text-gray-600">Work in a supportive environment with like-minded professionals dedicated to student success.</p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 text-center">
            <div className="w-16 h-16 bg-bhs-beige/30 text-bhs-green rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Competitive Benefits</h4>
            <p className="text-gray-600">Enjoy competitive remuneration and benefits packages rewarding excellence and commitment.</p>
          </motion.div>
        </div>

        <motion.div {...fadeInUp} className="bg-white rounded-[2rem] shadow-xl p-8 md:p-12 border border-gray-100 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Open Positions</h3>
          <div className="text-center py-12">
            <p className="text-gray-500 mb-6 text-lg">There are currently no open positions, but we are always accepting resumes for future consideration.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-bhs-brown text-white px-8 py-3 rounded-full font-bold hover:bg-bhs-brown/90 transition-all shadow-md">
              Send Resume <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
