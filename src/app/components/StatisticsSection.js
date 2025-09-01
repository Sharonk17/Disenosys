"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function StatisticCard({ number, label, start }) {
  const numericPart = parseFloat(number.replace(/[+%]/g, ""));
  const suffix = number.match(/[+%]/g)?.join("") || "";

  return (
    <div className="text-center space-y-2">
      <div className="text-2xl font-semibold text-blue-200">
        {start ? (
          <CountUp end={numericPart} duration={1.5} suffix={suffix} />
        ) : (
          "0"
        )}
      </div>
      <div className="text-sm text-white">{label}</div>
    </div>
  );
}

export default function StatisticsSection() {
  const statistics = [
    { number: "5000+", label: "Trained" },
    { number: "3800+", label: "5 Star Reviews" },
    { number: "200+", label: "Live Classes Every Month" },
    { number: "85+", label: "Corporate Partners" },
    { number: "210+", label: "College Partners" },
    { number: "87%", label: "Reported Career Benefits" },
  ];

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <section ref={ref} className="py-20 px-30 bg-gradient-to-b from-gray-700 via-[#13295f] to-blue-700">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">
            Numbers Tell Our Story!
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
          {statistics.map((stat, index) => (
            <StatisticCard
              key={index}
              number={stat.number}
              label={stat.label}
              start={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}