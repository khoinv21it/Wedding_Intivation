import { useEffect } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import CountdownSection from "./components/CountdownSection";
import FamilyInfoSection from "./components/FamilyInfoSection";
import GallerySection from "./components/GallerySection";
import EventDetailsSection from "./components/EventDetailsSection";
import RSVPSection from "./components/RSVPSection";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  // Scroll reveal effect
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    setTimeout(() => {
      const elements = document.querySelectorAll(".scroll-reveal");
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      const elements = document.querySelectorAll(".scroll-reveal");
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="wedding-invitation">
      <MusicPlayer />
      <HeroSection />
      <CountdownSection />
      <FamilyInfoSection />
      <GallerySection />
      <EventDetailsSection />
      <RSVPSection />
      <MapSection />
      <Footer />
    </div>
  );
}

export default App;
