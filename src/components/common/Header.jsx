import { useState, useEffect } from "react";
import Socials from "../connect/Socials";
import NavMenu from "./NavMenu";

// Typewriter hook
function useTypewriter(text, speed = 50, delay = 1000) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (isTyping) {
      if (displayedText.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, displayedText.length + 1));
        }, speed);
      } else {
        // Pause after completing, then restart
        timeout = setTimeout(() => setIsTyping(false), delay);
      }
    } else {
      // Delete effect
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, displayedText.length - 1));
        }, speed / 2);
      } else {
        // Restart typing
        timeout = setTimeout(() => setIsTyping(true), delay);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, text, speed, delay]);

  return displayedText;
}

export default function Header({ jsonData, allSiteData }) {
  const tagline = "Welcome to my portfolio!";
  const typedTagline = useTypewriter(tagline, 80, 2000);

  return (
    <>
      <header id="header" className="relative min-h-[60vh] md:min-h-[70vh]">
        {/* Background Image */}
        <div
          id="background"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/temp/bg-sunset.png")' }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Navigation */}
        <section className="relative z-10">
          <NavMenu allSiteData={allSiteData} />
        </section>
        
        {/* Hero Content */}
        <section className="relative z-10 flex flex-col items-center justify-center min-h-[50vh] md:min-h-[60vh] px-4 text-center">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
              {jsonData.name}
            </h1>
            <p className="text-lg md:text-xl text-cyan-400 font-semibold mb-2">
              {jsonData.headerJob}
            </p>
            {/* Typewriter tagline */}
            <p className="text-dark-300 text-sm md:text-base mb-6 h-6">
              <span className="border-r-2 border-cyan-400 animate-pulse">
                {typedTagline}
              </span>
            </p>
            <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6" />
            <Socials socialMedia={jsonData.socialMedia} />
          </div>
        </section>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-cyan-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </header>
    </>
  );
}