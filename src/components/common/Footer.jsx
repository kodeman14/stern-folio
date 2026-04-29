import Socials from "../connect/Socials";

export default function Footer({ jsonData, allSiteData }) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="footer" className="bg-dark-950 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Social Links */}
        <div className="flex justify-center mb-8">
          <Socials socialMedia={jsonData.socialMedia} />
        </div>
        
        {/* Footer Content */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-white mb-2">
            {allSiteData.fullName}
          </h3>
          <p className="text-dark-400 text-sm mb-4">
            {jsonData.headerJob}
          </p>
          
          {/* Divider */}
          <div className="w-20 h-0.5 bg-dark-700 mx-auto mb-6" />
          
          {/* Copyright */}
          <p className="text-dark-500 text-sm">
            © {currentYear} {allSiteData.fullName}. All rights reserved.
          </p>
          <p className="text-dark-600 text-xs mt-2">
            Built with React + Tailwind CSS
          </p>
        </div>
        
        {/* Back to Top Button */}
        <div className="text-center mt-8">
          <a 
            href="#home" 
            className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}