"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SupportWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    // Mock submit
    alert("Thank you for your message. A representative will contact you shortly.");
    setMessage("");
    setIsOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-[350px] bg-white rounded-2xl shadow-2xl z-[100] border border-gray-100 overflow-hidden"
          >
            <div className="bg-bhs-green text-white p-4 flex justify-between items-center">
              <div>
                <h4 className="font-bold">Blooming Support</h4>
                <p className="text-xs text-white/80">We typically reply in a few minutes.</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4 h-[250px] bg-gray-50 flex flex-col justify-end">
              <div className="bg-white p-3 rounded-2xl rounded-tl-sm shadow-sm border border-gray-100 max-w-[85%] mb-4">
                <p className="text-sm text-gray-700">Hello! 👋 How can we help you today with admissions or general inquiries?</p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-100 flex items-center gap-2">
              <input 
                type="text" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-bhs-green/20"
              />
              <button 
                type="submit"
                className="w-10 h-10 rounded-full bg-bhs-brown text-white flex items-center justify-center hover:bg-bhs-brown/90 transition-colors shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-bhs-brown text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform z-[100]"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </>
  );
}
