import { useState, useEffect, useRef } from "react";
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
        timeout = setTimeout(() => setIsTyping(false), delay);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, displayedText.length - 1));
        }, speed / 2);
      } else {
        timeout = setTimeout(() => setIsTyping(true), delay);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, text, speed, delay]);

  return displayedText;
}

// Parallax background hook
function useParallax() {
  const [offset, setOffset] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrolled = window.scrollY;
        setOffset(scrolled * 0.4);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { ref, offset };
}

export default function Header({ jsonData, allSiteData }) {
  const tagline = "Welcome to my portfolio!";
  const typedTagline = useTypewriter(tagline, 80, 2000);
  const { ref: parallaxRef, offset } = useParallax();

  return (
    <>
      <header id="header" className="relative min-h-[70vh] md:min-h-[80vh] overflow-hidden">
        {/* Parallax Background */}
        <div
          ref={parallaxRef}
          className="absolute inset-0 w-full h-[120%]"
          style={{
            backgroundImage: 'url("/temp/bg-sunset.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${offset}px)`,
          }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        
        {/* Navigation */}
        <section className="relative z-10">
          <NavMenu allSiteData={allSiteData} />
        </section>
        
        {/* Hero Content */}
        <section className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] md:min-h-[70vh] px-4 text-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-3 tracking-tight">
              {jsonData.name}
            </h1>
            <p className="text-lg md:text-xl text-cyan-400 font-medium mb-3">
              {jsonData.headerJob}
            </p>
            {/* Typewriter tagline */}
            <p className="text-zinc-300 text-sm md:text-base mb-6 h-6">
              <span className="border-r-2 border-cyan-400 animate-pulse">
                {typedTagline}
              </span>
            </p>
            <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6 rounded-full" />
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