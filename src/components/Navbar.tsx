"use client";

import Link from "next/link";
import { BookOpen, MapPin, Phone, Clock } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/approach", label: "Approach" },
    { href: "/facilities", label: "Facilities" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Thin Announcement Bar */}
      <div className="bg-bhs-brown text-white text-xs font-medium py-2 px-4 sm:px-6 lg:px-8 hidden md:block z-[60] relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><Phone className="w-3 h-3" /> 0818 034 2163</span>
            <span className="flex items-center gap-2"><MapPin className="w-3 h-3" /> A3 Ben Magaji Road, Lokogoma, Abuja</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3 h-3" />
            <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-bhs-beige shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-bhs-green flex items-center justify-center group-hover:scale-105 transition-transform">
                <BookOpen className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-bhs-green tracking-tight leading-none">
                  Blooming Heritage
                </span>
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">School</span>
              </div>
            </Link>
            
            <div className="hidden md:flex items-center space-x-1">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link 
                    key={link.href} 
                    href={link.href}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                      isActive 
                        ? "bg-bhs-green/10 text-bhs-green" 
                        : "text-gray-600 hover:text-bhs-green hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-4">
              <Link href="/contact" className="bg-bhs-green text-white px-6 py-2.5 rounded-full font-medium hover:bg-bhs-green/90 transition-all shadow-md shadow-bhs-green/20 hidden md:block">
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
