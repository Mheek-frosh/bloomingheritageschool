"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Target, MessageSquare } from "lucide-react";

export default function CeoPage() {
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
        <div className="absolute inset-0 bg-bhs-brown/80 mix-blend-multiply" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Meet the CEO</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">A message from our visionary leader.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
          <motion.div 
            className="relative h-[600px] rounded-[2rem] overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* The user requested to use ceo.jpeg from their past uploads. */}
            <Image
              src="/ceo.jpeg"
              alt="CEO of Blooming Heritage School"
              fill
              className="object-cover"
              onError={(e) => {
                // Fallback in case the user hasn't added it to the public folder yet
                e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop";
              }}
            />
          </motion.div>
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-8 h-8 text-bhs-green" />
              <h2 className="text-3xl font-bold text-gray-900">Welcome Message</h2>
            </div>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Welcome to Blooming Heritage School, where every child's potential is recognized, nurtured, and celebrated. When we founded this institution, our primary goal was to create an environment where qualitative education meets exceptional character building.
              </p>
              <p>
                We believe that the early years of a child's life are the most critical. That is why we have invested heavily in creating a conducive learning environment, equipped with state-of-the-art facilities, from our science laboratories to our interactive whiteboards.
              </p>
              <p>
                Our unique blend of the Nigerian and British curricula ensures that our students are not only globally competitive but also locally grounded. We are raising leaders, innovators, and creative thinkers who will make significant impacts in their generation.
              </p>
              <p>
                Thank you for trusting us with the future of your children. We remain committed to our promise of excellence in early education.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="font-bold text-xl text-gray-900">Chief Executive Officer</h4>
              <p className="text-bhs-green font-medium">Blooming Heritage Schools Limited</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
