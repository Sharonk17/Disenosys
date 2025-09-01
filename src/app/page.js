import Image from "next/image";

import CarVFX from "./components/CarVFX";
import BenefitsSection from "./components/BenefitsSection";
import StatisticsSection from "./components/StatisticsSection";
import Alumni from "./components/alumni";
import { TrustedReviews } from "./components/TrustedReviews";
import  Roadmap  from   "./components/Roadmap"
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px]   ">
      <main className="flex flex-col gap-[0px] row-start-2  sm:items-start">
        
        <CarVFX/>
        <BenefitsSection/>
        <StatisticsSection/>
        <Alumni/>
        <TrustedReviews/>
        <Roadmap/>
        <Footer/>
      </main>
    </div>
  );
}
