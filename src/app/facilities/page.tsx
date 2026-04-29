"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Microscope, Music, Award, MonitorPlay, BookOpen, MapPin } from "lucide-react";

export default function FacilitiesPage() {
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
          src="https://images.unsplash.com/photo-1526715655513-33fa0f6f7eb3?q=80&w=2069&auto=format&fit=crop"
          alt="School Facilities"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">World-Class Facilities</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">State-of-the-art amenities designed for balanced intellectual and physical development.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div {...fadeInUp}>
            <h2 className="text-sm font-bold text-bhs-brown tracking-widest uppercase mb-3">Extracurriculars & Amenities</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Fostering Balanced Development</h3>
            <p className="text-lg text-gray-600">
              Blooming Heritage School offers a range of modern amenities. Our extracurricular opportunities include swimming, music, debate, field trips, martial arts, and arts and crafts.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Science Lab", image: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=2069&auto=format&fit=crop", icon: <Microscope />, desc: "Fully equipped for practical experiments and discovery." },
            { title: "Art Room", image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop", icon: <Music />, desc: "Dedicated spaces to explore creativity and artistic expression." },
            { title: "Sports Facilities", image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2070&auto=format&fit=crop", icon: <Award />, desc: "Expansive areas for physical education and athletic training." },
            { title: "Computer Lab", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop", icon: <MonitorPlay />, desc: "Modern tech hubs and interactive digital learning stations." },
            { title: "Library", image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop", icon: <BookOpen />, desc: "A vast collection of resources spanning various disciplines." },
            { title: "Gardens and Green Spaces", image: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=1974&auto=format&fit=crop", icon: <MapPin />, desc: "Beautifully maintained outdoor areas for relaxation and nature study." },
            { title: "Modern & Conducive Classrooms", image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop", icon: <BookOpen />, desc: "Comfortable, technologically integrated spaces for optimal learning." },
          ].map((facility, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer shadow-xl"
            >
              <Image
                src={facility.image}
                alt={facility.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                <div className="w-12 h-12 bg-bhs-brown text-white rounded-full flex items-center justify-center backdrop-blur-md mb-4 shadow-lg shadow-black/50">
                  {facility.icon}
                </div>
                <h4 className="text-2xl font-bold text-white mb-2 drop-shadow-md">{facility.title}</h4>
                <p className="text-white/90 line-clamp-2 drop-shadow-md">{facility.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
