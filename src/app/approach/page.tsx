"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MonitorPlay, Users, MapPin, GraduationCap } from "lucide-react";

export default function ApproachPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: "easeOut" as const }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.2 }
  };

  return (
    <div className="pt-20">
      {/* Header Banner */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop"
          alt="Educational Approach"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-bhs-brown/80 mix-blend-multiply" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Approach</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">Combining Nigerian and British curricula to nurture globally minded learners.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl order-2 md:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop"
              alt="Classroom learning"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div {...fadeInUp} className="order-1 md:order-2">
            <h2 className="text-sm font-bold text-bhs-brown tracking-widest uppercase mb-3">Our Philosophy</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Lifelong Learning & <br/><span className="text-bhs-green">Leadership</span>
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Blooming Heritage School, we emphasize lifelong learning, creativity, and leadership. Through a blend of academic rigor and exciting extracurricular activities, we aim to raise globally minded learners.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our curriculum intentionally combines the best of Nigerian and British educational frameworks, providing students with a well-rounded and globally relevant academic experience.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
        >
          {[
            { title: "Digital Literacy", desc: "Equipping students with essential tech skills for the modern world.", icon: <MonitorPlay className="w-8 h-8" /> },
            { title: "Teamwork", desc: "Fostering collaboration and communication among peers through group projects.", icon: <Users className="w-8 h-8" /> },
            { title: "Social Responsibility", desc: "Instilling strong moral values and a sense of community.", icon: <MapPin className="w-8 h-8" /> },
            { title: "Inclusive Support", desc: "Providing tailored support for children with diverse learning needs.", icon: <GraduationCap className="w-8 h-8" /> },
          ].map((feature, i) => (
            <motion.div 
              key={i}
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-bhs-beige/30 text-bhs-green rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
