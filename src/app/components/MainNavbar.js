"use client";
import Link from "next/link";
import { Montserrat } from "next/font/google";

// Load Google Font
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function MainNavbar() {
  return (
    <nav className="w-full fixed top-[40px] left-0 bg-gradient-to-r from-black via-[#13295f] to-black shadow-md z-40">
      <div className="max-w-7xl mx-auto flex justify-center space-x-12 py-3">
        {["Home", "Placement", "Course", "Plan & Purchase", "Contact Us"].map(
          (item, idx) => (
            <Link
              key={idx}
              href="#"
              className={`${montserrat.className} relative text-gray-100 md:text-lg text-base tracking-wide transition-all duration-300 ease-out hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#f8f8f8] hover:to-indigo-300 hover:scale-110 hover:drop-shadow-md`}
            >
              {item}
              {/* underline effect */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-indigo-200 to-indigo-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          )
        )}
      </div>
    </nav>
  );
}
