"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CarVFX() {
  return (
    <section className="relative w-full  bg-[#0d1039] overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#13295f] to-black"></div>

      {/* Neon Glow Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,150,255,0.25),transparent_70%)]"></div>

      {/* Animated Car */}
      <motion.div
        animate={{ x: ["-130%", "130%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-0 right-0 flex justify-center "
      >
        <Image
          src="/neon-car.jpg"
          alt="Neon Car"
          width={1200}
          height={650}
          className="drop-shadow-[0_0_50px_rgba(0,150,255,0.95)] object-contain"
          priority
        />
      </motion.div>

      {/* Hero Text */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-6">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg mt-0">
          Drive Your Future with <span className="text-blue-400">DISENOSYS</span>
        </h1>
        <p className="text-lg max-w-2xl opacity-90">
          Explore courses, placements, and career growth powered by innovation.
        </p>
      </div>
    </section>
  );
}
                                                                                                                                                                                                                                