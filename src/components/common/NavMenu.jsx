import { useState } from "react";

export default function NavMenu({ allSiteData }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-dark-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Click to scroll to top */}
          <a href="#home" className="text-white text-xl md:text-2xl font-bold hover:text-cyan-400 transition-colors">
            {allSiteData.fullName.split(' ')[0]}
            <span className="text-cyan-400">{allSiteData.fullName.split(' ')[1]}</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <ul className="flex gap-6 lg:gap-8">
              {allSiteData.navmenu.map((item, i) => (
                <li key={i}>
                  <a
                    className="text-dark-300 hover:text-cyan-400 transition-colors text-sm font-medium uppercase tracking-wide"
                    href={item.href}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-slate-900 border-t border-dark-700">
            <ul className="py-4 space-y-1">
              {allSiteData.navmenu.map((item, i) => (
                <li key={i}>
                  <a
                    className="block text-dark-300 hover:text-cyan-400 hover:bg-dark-800 transition-colors py-3 px-4"
                    href={item.href}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
