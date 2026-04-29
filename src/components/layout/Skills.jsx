export default function Skills({ jsonData }) {
  return (
    <section id="skills" className="py-16 md:py-24 bg-dark-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Skills
          </h2>
          <p className="text-dark-400 text-lg">
            Technologies I work with
          </p>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Technical Skills
            </h3>
            <div className="space-y-4">
              {jsonData.techSkills.list &&
                jsonData.techSkills.list.map((item, i) => (
                  <div key={i} className="bg-dark-800 rounded-lg p-4 border border-dark-700">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{item.skillName}</span>
                      <span className="text-cyan-400 text-sm">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-cyan-500 to-cyan-400 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a4 4 0 11-8 0 4 4 0 018 0zM7 10a1 1 0 011-1h1a1 1 0 110 2H8a1 1 0 01-1-1z" />
              </svg>
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {jsonData.softSkills.list &&
                jsonData.softSkills.list.map((item, i) => (
                  <div 
                    key={i} 
                    className="bg-dark-800 rounded-lg p-4 border border-dark-700 hover:border-green-500/50 transition-colors text-center"
                  >
                    <div className="text-2xl mb-1">
                      {item.skillName === 'Leadership' && '👔'}
                      {item.skillName === 'Communication' && '💬'}
                      {item.skillName === 'Problem Solving' && '🧩'}
                      {item.skillName === 'Agile/Scrum' && '🔄'}
                      {item.skillName === 'Team Building' && '👥'}
                      {item.skillName === 'Critical Thinking' && '🧠'}
                      {item.skillName === 'Active listening' && '👂'}
                      {item.skillName === 'Work Ethic' && '💪'}
                      {item.skillName === 'Team Building' && '🤝'}
                    </div>
                    <span className="text-white font-medium text-sm">{item.skillName}</span>
                    <div className="mt-2 w-full bg-dark-700 rounded-full h-1.5">
                      <div
                        className="bg-gradient-to-r from-green-500 to-green-400 h-1.5 rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
