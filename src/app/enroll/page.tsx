"use client";

import { motion } from "framer-motion";
import { Send, FileText, User, MapPin } from "lucide-react";
import Image from "next/image";

export default function EnrollmentPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" as const }
  };

  return (
    <div className="pt-20 bg-[#faf9f6] min-h-screen pb-24">
      {/* Header Banner */}
      <div className="relative h-[30vh] min-h-[250px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
          alt="Enrollment"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-bhs-brown/90 mix-blend-multiply" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Enrollment</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">Begin your child's journey at Blooming Heritage School.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <motion.div {...fadeInUp} className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-gray-100">
          <div className="mb-8 border-b border-gray-100 pb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">2025/2026 Academic Session</h2>
            <p className="text-gray-600">Please fill out the details below to initiate the enrollment process. All fields marked with * are required.</p>
          </div>

          <form className="space-y-8">
            {/* Child Details */}
            <div>
              <h3 className="text-lg font-bold text-bhs-green flex items-center gap-2 mb-4">
                <User className="w-5 h-5" /> Child's Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">First Name *</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-bhs-green/20 focus:border-bhs-green transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Last Name *</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-bhs-green/20 focus:border-bhs-green transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Date of Birth *</label>
                  <input type="date" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-bhs-green/20 focus:border-bhs-green transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Gender *</label>
                  <select required className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-bhs-green/20 focus:border-bhs-green transition-all">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold text-gray-700">Class Applying For *</label>
                  <select required className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-bhs-green/20 focus:border-bhs-green transition-all">
                    <option value="">Select Class</option>
                    <option value="creche">Creche / Daycare</option>
                    <option value="nursery1">Nursery 1</option>
                    <option value="nursery2">Nursery 2</option>
                    <option value="primary1">Primary 1</option>
                    <option value="primary2">Primary 2</option>
                    <option value="primary3">Primary 3</option>
                    <option value="primary4">Primary 4</option>
                    <option value="primary5">Primary 5</option>
                    <option value="primary6">Primary 6</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Parent Details */}
            <div className="pt-6 border-t border-gray-100">
              <h3 className="text-lg font-bold text-bhs-green flex items-center gap-2 mb-4">
                <Users className="w-5 h-5" /> Parent/Guardian Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold text-gray-700">Full Name *</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-bhs-green/20 focus:border-bhs-green transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Email Address *</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-bhs-green/20 focus:border-bhs-green transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Phone Number *</label>
                  <input type="tel" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-bhs-green/20 focus:border-bhs-green transition-all" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold text-gray-700">Home Address *</label>
                  <textarea rows={3} required className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-bhs-green/20 focus:border-bhs-green transition-all resize-none"></textarea>
                </div>
              </div>
            </div>

            {/* Additional info */}
            <div className="pt-6 border-t border-gray-100">
              <h3 className="text-lg font-bold text-bhs-green flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5" /> Additional Information
              </h3>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Does the child have any special needs or medical conditions we should be aware of?</label>
                <textarea rows={3} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-bhs-green/20 focus:border-bhs-green transition-all resize-none"></textarea>
              </div>
            </div>

            <button 
              type="button"
              className="w-full bg-bhs-brown text-white py-4 rounded-xl font-bold text-lg hover:bg-bhs-brown/90 transition-all shadow-lg shadow-bhs-brown/20 flex items-center justify-center gap-2 mt-8"
            >
              Submit Application <Send className="w-5 h-5" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

// Just add this icon mapping since it was missing in the top imports
function Users(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  );
}
