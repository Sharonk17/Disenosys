"use client";

import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Footer() {
  return (
    <footer className={`relative bg-blue-500 py-0 px-30 text-white ${montserrat.className}`}>
      {/* Wavy Top Divider */}
      <div className="absolute -top-[60px] left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-[60px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
        >
          <path
            d="M0,32L60,37.3C120,43,240,53,360,53.3C480,53,600,43,720,32C840,21,960,11,1080,10.7C1200,11,1320,21,1380,26.7L1440,32V60H0Z"
            fill="#092050ff"
          />
        </svg>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Left Section */}
            <div className="space-y-8">
              {/* Quick Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">QUICK LINKS</h4>
                <ul className="space-y-3 text-sm">
                  <li><a href="#about" className="hover:text-blue-900 transition-colors">About</a></li>
                  <li><a href="#courses" className="hover:text-blue-900  transition-colors">Courses</a></li>
                  <li><a href="#contact" className="hover:text-blue-900  transition-colors">Contact Us</a></li>
                </ul>
              </div>

              {/* Policy */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">POLICY</h4>
                <ul className="space-y-3 text-sm">
                  <li><a href="#privacy" className="hover:text-blue-900 transition-colors">Privacy Policy</a></li>
                  <li><a href="#terms" className="hover:text-blue-900 transition-colors">Terms and Conditions</a></li>
                  <li><a href="#faq" className="hover:text-blue-900 transition-colors">FAQ</a></li>
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:flex justify-center">
              <div className="w-px bg-white/20 h-full"></div>
            </div>

            {/* Right Section */}
            <div className="space-y-8">
              {/* Why Choose Us */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">WHY CHOOSE US?</h4>
                <div className="space-y-2 text-sm text-gray-200">
                  <p>
                    Industry-expert instructors with real-world experience delivering
                    comprehensive automotive design education.
                  </p>
                  <p>
                    Hands-on projects, placement assistance, and personalized mentorship
                    for career advancement.
                  </p>
                </div>

                {/* Social Media */}
                <div className="flex space-x-4 pt-4">
                  <a href="#" className="hover:bg-white/10 p-2 rounded-full transition">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="hover:bg-white/10 p-2 rounded-full transition">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="hover:bg-white/10 p-2 rounded-full transition">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="hover:bg-white/10 p-2 rounded-full transition">
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Contact */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">CONTACT</h4>
                <div className="space-y-3 text-sm text-gray-200">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>11, VOC St, Ranga Colony, Rajakilpakam, Tamilnadu 60073</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span>+91-9944303400</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span>info@Disenosys.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 py-6">
          <div className="text-center text-sm text-gray-200">
            © 2025 DISENOSYS. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
