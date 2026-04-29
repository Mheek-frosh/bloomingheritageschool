"use client";

import Link from "next/link";
import { BookOpen, MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-24 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-bhs-green flex items-center justify-center">
                <BookOpen className="text-white w-6 h-6" />
              </div>
              <span className="font-bold text-2xl tracking-tight">
                Blooming Heritage
              </span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-sm mb-8">
              Providing a modern, nurturing environment to develop confident and creative learners.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-bhs-beige">Visit Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-bhs-green shrink-0 mt-1" />
                <span>A3 Ben Magaji Road,<br/>Nzube Estate, Lokogoma,<br/>Abuja, FCT, Nigeria</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-bhs-beige">Connect</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-bhs-green" />
                <span>0818 034 2163</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-bhs-green shrink-0 mt-1" />
                <div>
                  <span className="block text-white font-medium mb-1">Operating Hours</span>
                  <span>Mon - Fri: 8:00 AM - 6:00 PM</span><br/>
                  <span>Sat - Sun: Closed</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Blooming Heritage Schools Limited. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
