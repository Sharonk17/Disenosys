"use client";
import { useState } from "react";
import { Search, Menu, X, ShoppingCart, Bell, Globe, User } from "lucide-react";

export default function TopStrip() {
  const [showDemo, setShowDemo] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      {/* Top Strip */}
      <div className="bg-gradient-to-r from-black via-[#13295f] to-black text-white px-6 py-2 flex justify-between items-center text-sm font-medium">
        
        {/* Left: Logo */}
        <div className="flex items-center space-x-4">
          <span className="text-lg font-bold tracking-wide">DISENOSYS</span>
        </div>

        {/* Middle: Demo Text + Book Now */}
        {showDemo && (
          <div className="flex items-center space-x-3">
            <span className="flex items-center space-x-2">
              <span role="img" aria-label="book">📚</span>
              <span>Book a Demo Class Today</span>
            </span>
            <button className="bg-white text-[#0d1039] font-semibold px-4 py-1 rounded-lg shadow-sm hover:bg-gray-100 transition">
              Book Now
            </button>
            {/* Close (X) button */}
            <button
              onClick={() => setShowDemo(false)}
              className="ml-2 hover:text-red-400 transition"
            >
              <X size={20} strokeWidth={2.5} />
            </button>
          </div>
        )}

        {/* Right: Search + Hamburger */}
        <div className="flex items-center space-x-4 relative">
          <button className="hover:text-gray-300 transition">
            <Search size={20} strokeWidth={2} />
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hover:text-gray-300 transition"
          >
            {menuOpen ? <X size={22} strokeWidth={2.5} /> : <Menu size={22} strokeWidth={2} />}
          </button>

          {/* Dropdown Menu with Smooth Transition */}
          <div
            className={`absolute right-0 top-10 w-64 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 transform transition-all duration-300 ease-in-out ${
              menuOpen
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 -translate-y-3 scale-95 pointer-events-none"
            }`}
          >
            <ul className="flex flex-col font-medium">
              <li className="px-4 py-3 hover:bg-gray-100 flex items-center space-x-2 cursor-pointer transition">
                <ShoppingCart className="w-5 h-5 text-blue-700" />
                <span>Add to Cart</span>
              </li>
              <li className="px-4 py-3 hover:bg-gray-100 flex items-center space-x-2 cursor-pointer transition">
                <Bell className="w-5 h-5 text-blue-700" />
                <span>Notifications</span>
              </li>
              <li className="px-4 py-3 hover:bg-gray-100 flex items-center space-x-2 cursor-pointer transition">
                <Globe className="w-5 h-5 text-blue-700" />
                <span>Choose Language</span>
              </li>
              <li className="px-4 py-3 hover:bg-gray-100 flex items-center space-x-2 cursor-pointer transition">
                <User className="w-5 h-5 text-blue-700" />
                <span>Sign Up</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
