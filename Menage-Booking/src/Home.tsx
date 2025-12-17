import React from "react";
import Section3 from "./components/Home/section3";
import Hero from "./components/Home/hero";
import ConferenceGallery from "./components/Home/ConferenceGallery";
import DateDesponible from "./components/Home/DateDesponible";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      
      <Hero />
      <ConferenceGallery />
      <Section3 />
      <DateDesponible />
      <Footer />
      
    </main>
  );
}
