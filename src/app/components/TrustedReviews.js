"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

const StarRating = ({ rating }) => {
  return (
    <div className="flex space-x-1 mb-2">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={`${
            i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-blue-100 rounded-2xl shadow-lg p-6 mx-3 min-h-[300px] flex flex-col">
      {/* Header with profile and stars */}
      <div className="flex items-start space-x-4 mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={review.image}
            alt={review.name}
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-grow">
          <StarRating rating={review.rating} />
          <h4 className="font-semibold text-foreground text-sm mb-1">
            {review.name}
          </h4>
          <p className="text-xs text-muted-foreground">{review.company}</p>
          <p className="text-xs text-muted-foreground">{review.location}</p>
        </div>
      </div>

      {/* Review text */}
      <div className="flex-grow">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {review.review}
        </p>
      </div>
    </div>
  );
};

export function TrustedReviews() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      name: "Raghul Srivatsa",
      company: "Mahindra",
      location: "India",
      image:
        "https://images.unsplash.com/photo-1685475887169-9c9a84bf740f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      review:
        "I gained a solid understanding of Wiring Harness routing design through Disenosys' well-structured online course, which I had been seeking for two years. It's an excellent platform for freshers to learn both design and the manufacturing process.",
      rating: 5,
    },
    {
      name: "Jayesh K J",
      company: "Renault Nissan",
      location: "India",
      image:
        "https://images.unsplash.com/photo-1618593706014-06782cd3bb3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      review:
        "As a Sheetmetal design engineer, I struggled with BIW design during interviews. Disenosys, with experienced professionals and 50% lower fees, helped me master BIW concepts and boosted my confidence. They even moved my profile for interviews. Highly recommended!",
      rating: 5,
    },
    {
      name: "Siva Subramanian",
      company: "Renault Nissan",
      location: "India",
      image:
        "https://images.unsplash.com/photo-1580983218547-8333cb1d76b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      review:
        "I enrolled in the Automotive BIW Design course at Disenosys based on a colleague's recommendation. Despite my 1.5 years of experience, I learned a lot, thanks to a supportive mentor with 12+ years in the industry. The assignments were excellent, boosting my confidence for interviews.",
      rating: 5,
    },
  ];

  // Group reviews into slides of 3
  const slides = [];
  for (let i = 0; i < reviews.length; i += 3) {
    slides.push(reviews.slice(i, i + 3));
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-16 px-30 bg-gradient-to-b from-gray-700 via-[#13295f] to-blue-700">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Trusted Reviews
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our successful
            alumni have to say about their transformative learning experience
            with DISENOSYS.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-primary hover:bg-primary hover:text-white"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-primary hover:bg-primary hover:text-white"
          >
            <ChevronRight size={24} />
          </button>

          {/* Reviews Slider */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-16"
              >
                {slides[currentSlide]?.map((review, index) => (
                  <ReviewCard key={`${currentSlide}-${index}`} review={review} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">
            Join thousands of successful professionals who transformed their
            careers with DISENOSYS
          </p>
          <button className="bg-white text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
}
