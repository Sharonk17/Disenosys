"use client";
import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HeroOverlay() {
  const [showOverlay, setShowOverlay] = useState(true);
  const router = useRouter();

  if (!showOverlay) return null;

  return (
    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative bg-white rounded-2xl shadow-2xl w-[90%] max-w-4xl flex flex-col md:flex-row overflow-hidden">

        {/* Left: Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
          <Image
            src="/launch-banner.png"   // 🔹 put your image inside /public
            alt="Course Launch Banner"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right: Text + Button */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#0d1039] to-[#2641a6] text-white">
          <h2 className="text-3xl font-bold mb-4">🚀 New Course Launching Soon</h2>
          <p className="text-lg mb-6">Get ready to upgrade your skills with our upcoming program.</p>
          
          <button
            onClick={() => router.push("/signup")}
            className="flex items-center space-x-2 bg-white text-[#0d1039] font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 hover:bg-gray-100 transition"
          >
            <span>Get Started</span>
            <span>➡️</span>
          </button>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setShowOverlay(false)}
          className="absolute top-4 right-4 text-white bg-black/40 rounded-full p-2 hover:bg-black/70 transition"
        >
          <X size={24} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
