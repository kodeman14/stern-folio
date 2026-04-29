export default function AboutMe({ jsonData }) {
  return (
    <section id="about" className="py-16 md:py-24 bg-dark-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Description */}
          <div className="space-y-6">
            <p className="text-dark-300 text-lg leading-relaxed">
              {jsonData.aboutMe.description}
            </p>
            
            {/* Interests */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {jsonData.aboutMe.interests.map((interest, i) => (
                  <span 
                    key={i} 
                    className="bg-dark-800 text-dark-300 px-4 py-2 rounded-full text-sm border border-dark-700"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Knowledge */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {jsonData.aboutMe.knowledge.map((tech, i) => (
                  <span 
                    key={i} 
                    className="bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm border border-cyan-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats/Highlights */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-dark-800 p-6 rounded-xl border border-dark-700 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">8+</div>
              <div className="text-dark-400 text-sm">Years Experience</div>
            </div>
            <div className="bg-dark-800 p-6 rounded-xl border border-dark-700 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">10+</div>
              <div className="text-dark-400 text-sm">Projects Completed</div>
            </div>
            <div className="bg-dark-800 p-6 rounded-xl border border-dark-700 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">5+</div>
              <div className="text-dark-400 text-sm">Companies Worked</div>
            </div>
            <div className="bg-dark-800 p-6 rounded-xl border border-dark-700 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">∞</div>
              <div className="text-dark-400 text-sm">Coffee Consumed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
