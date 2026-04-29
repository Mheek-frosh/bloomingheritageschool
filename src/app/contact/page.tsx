"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export default function ContactPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: "easeOut" as const }
  };

  return (
    <div className="pt-20 bg-[#faf9f6] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div {...fadeInUp}>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-600">
              We would love to hear from you. Visit us, call us, or send us a message to learn more about Blooming Heritage School admissions and programs.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div 
            {...fadeInUp}
            className="lg:col-span-1 space-y-8"
          >
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-bhs-green/10 text-bhs-green rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Location</h4>
                <p className="text-gray-600 leading-relaxed">
                  A3 Ben Magaji Road,<br/>
                  Nzube Estate, Lokogoma,<br/>
                  Abuja, FCT, Nigeria
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-bhs-brown/10 text-bhs-brown rounded-xl flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Phone</h4>
                <p className="text-gray-600 leading-relaxed">
                  0818 034 2163
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-bhs-beige/30 text-bhs-green rounded-xl flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Operating Hours</h4>
                <p className="text-gray-600 leading-relaxed">
                  Monday - Friday:<br/>8:00 AM - 6:00 PM<br/>
                  <span className="text-sm text-gray-400 mt-1 block">Closed on Weekends</span>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 bg-white p-10 md:p-12 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-bhs-green/20 focus:border-bhs-green transition-all"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-bhs-green/20 focus:border-bhs-green transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-bhs-green/20 focus:border-bhs-green transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-bhs-green/20 focus:border-bhs-green transition-all"
                    placeholder="+234 ..."
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Message</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-bhs-green/20 focus:border-bhs-green transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="button"
                className="w-full bg-bhs-brown text-white py-4 rounded-xl font-bold text-lg hover:bg-bhs-brown/90 transition-all shadow-lg shadow-bhs-brown/20 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
