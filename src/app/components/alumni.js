"use client";

import { useState, useRef } from "react";

const images = [
  { src: "/a1.png", company: "MAHINDRA" },
  { src: "/a2.png", company: "TATA ELECTRONICS" },
  { src: "/a3.png", company: "MAHINDRA" },
  { src: "/a4.png", company: "QUESS" },
  { src: "/a5.png", company: "IJL" },
  { src: "/a6.png", company: "CONTINENTAL" },
  { src: "/a7.png", company: "MAHINDRA" },
  { src: "/a8.png", company: "RENAULT" },
  { src: "/a9.png", company: "QUESS" },
  { src: "/a10.png", company: "RENAULT NISSAN" },
];

const chunkSize = 3;

export default function Alumni() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const totalChunks = Math.ceil(images.length / chunkSize);

  const next = () => {
    if (index < totalChunks - 1) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) next();
    if (distance < -50) prev();
  };

  return (
    <div
      className="relative overflow-hidden w-full py-10 bg-gradient-to-br from-[#dbe9fb] via-[#e6f0fa] to-[#f0f7ff]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl px-4 text-gray-600 hover:text-black z-10"
      >
        &#10094;
      </button>

      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {Array.from({ length: totalChunks }).map((_, chunkIndex) => {
            const start = chunkIndex * chunkSize;
            const chunk = images.slice(start, start + chunkSize);
            return (
              <div
                key={chunkIndex}
                className="grid grid-cols-3 gap-6 w-full flex-shrink-0 px-10"
              >
                {chunk.map((item, i) => (
                  <div key={i} className="text-center">
                    <img
                      src={item.src}
                      alt={item.company}
                      className="w-28 h-28 mx-auto rounded-full object-cover shadow-md"
                    />
                    <p className="mt-3 font-semibold text-gray-700">
                      {item.company}
                    </p>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={next}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-3xl px-4 text-gray-600 hover:text-black z-10"
      >
        &#10095;
      </button>
    </div>
  );
}