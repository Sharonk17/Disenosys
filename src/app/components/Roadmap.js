"use client";

import { GraduationCap, BookOpen, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Learn",
    desc: "Gain in-depth knowledge through our interactive lessons. Our expert instructors will guide you with real-world examples.",
    icon: <BookOpen className="w-12 h-12 text-blue-500" />,
  },
  {
    id: 2,
    title: "Graduate",
    desc: "Earn a recognized certificate upon completion. Join our network of alumni who advanced their careers.",
    icon: <GraduationCap className="w-12 h-12 text-green-500" />,
  },
  {
    id: 3,
    title: "Work",
    desc: "Apply your skills in real projects. Our job assistance ensures you’re prepared for the professional world.",
    icon: <Briefcase className="w-12 h-12 text-purple-500" />,
  },
];

export default function Roadmap() {
  return (
    <section className="py-16 px-30 bg-gradient-to-r from-indigo-50 to-blue-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
           Our Placement Process
        </h2>
        <p className="text-gray-600 mb-12">
           An innovative roadmap designed for your success.
        </p>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-1xl shadow-xl p-6 border-blue=200 hover:shadow-2xl transition relative"
            >
              <div className="flex justify-center mb-4 animate-bounce">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">
                {String(step.id).padStart(2, "0")}. {step.title}
              </h3>
              <p className="text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
