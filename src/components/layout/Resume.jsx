import { useState } from "react";

export default function Resume({ jsonData }) {
  const [activeTab, setActiveTab] = useState("experience");

  // Function to open LinkedIn resume in new tab
  const openLinkedInResume = () => {
    window.open('https://www.linkedin.com/in/ankyc/', '_blank');
  };

  return (
    <section id="resume" className="py-16 md:py-24 bg-dark-950">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Resume
          </h2>
          <p className="text-dark-400 text-lg mb-6">
            My professional journey
          </p>
          <button
            onClick={openLinkedInResume}
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            View Full Resume
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-dark-800 rounded-lg p-1 border border-dark-700">
            <button
              onClick={() => setActiveTab("experience")}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === "experience"
                  ? "bg-cyan-500 text-white"
                  : "text-dark-400 hover:text-white"
              }`}
            >
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Experience
              </span>
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === "education"
                  ? "bg-cyan-500 text-white"
                  : "text-dark-400 hover:text-white"
              }`}
            >
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Education
              </span>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === "experience" && (
            <div className="space-y-4">
              {jsonData.work &&
                jsonData.work.map((item, i) => (
                  <div
                    key={i}
                    className="bg-dark-800 p-5 md:p-6 rounded-xl border border-dark-700 hover:border-cyan-500/50 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                      <h4 className="text-lg font-semibold text-white">
                        {item.companyName}
                      </h4>
                      <span className="text-dark-500 text-sm bg-dark-700 px-3 py-1 rounded-full whitespace-nowrap">
                        {item.startDate} – {item.endDate}
                      </span>
                    </div>
                    <p className="text-cyan-400">{item.jobTitle}</p>
                  </div>
                ))}
            </div>
          )}

          {activeTab === "education" && (
            <div className="space-y-4">
              {jsonData.education &&
                jsonData.education.map((item, i) => (
                  <div
                    key={i}
                    className="bg-dark-800 p-5 md:p-6 rounded-xl border border-dark-700 hover:border-cyan-500/50 transition-colors"
                  >
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {item.uniName}
                    </h4>
                    <p className="text-cyan-400 mb-1">
                      {item.studyType}
                    </p>
                    <p className="text-dark-400 text-sm mb-2">
                      {item.programType}
                    </p>
                    <p className="text-dark-500 text-sm flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {item.finishDate}
                    </p>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
