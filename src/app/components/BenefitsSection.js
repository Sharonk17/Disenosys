"use client";
import Image from "next/image";

const clipPaths = [
  "circle(50% at 50% 50%)", // simple circle
  "circle(50% at 50% 50%)", 
  "circle(50% at 50% 50%)", 
  "circle(50% at 50% 50%)" 
];

const benefits = [
  { image: "/1.jpg", title: "100% Live Interactive Experience" },
  { image: "/2.jpg", title: "Weekend Classes" },
  { image: "/3.jpg", title: "100% Job Assistance" },
  { image: "/4.png", title: "Hands-on Projects" },
];

const BenefitCard = ({ image, title, clipPath }) => (
  <div className="flex flex-col items-center space-y-7">
    <div className="relative w-34 h-40">
      {/* Shadow */}
      <div
        className="absolute inset-0 bg-black/20 blur-sm rounded-full"
        style={{ clipPath }}
      />

      {/* Image clipped to irregular shape */}
      <div
        className="relative w-38 h-38 overflow-hidden transition-transform duration-500 hover:scale-110"
        style={{
          clipPath,
          filter:
            "drop-shadow(0 20px 25px rgba(255, 41, 123, 0.15)) drop-shadow(0 8px 10px rgba(255, 0, 0, 0.1))",
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="192px"
        />
      </div>
    </div>
    <h3 className="text-lg font-Poppins text-center">{title}</h3>
  </div>
);

export default function BenefitsSection() {
  return (
    <section className="py-18 px-59 bg-gradient-to-br from-[#dbe9fb] via-[#e6f0fa] to-[#f0f7ff] ">
      <div className="flex flex-wrap text-center justify-center gap-10">
        {benefits.map((b, i) => (
          <BenefitCard key={i} image={b.image} title={b.title} clipPath={clipPaths[i]} />
        ))}
      </div>
    </section>
  );
}
