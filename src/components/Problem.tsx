export default function Problem() {
  const stats = [
    {
      number: "75,000+",
      label: "As many as 75,000 serious crimes committed against real estate agents annually",
    },
    {
      number: "38%",
      label: "Of agents have felt unsafe during a showing",
    },
    {
      number: "1 in 3",
      label: "Agents have feared for their personal safety at work",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 font-semibold text-sm mb-6">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            The Reality of Real Estate
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Real Estate is One of the Most
            <br />
            <span className="text-red-600">Dangerous Professions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every day, real estate agents meet strangers alone in empty
            properties. The risk is real, and the consequences can be
            devastating.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-red-100 text-center"
            >
              <div className="text-4xl sm:text-5xl font-bold text-red-600 mb-3">
                {stat.number}
              </div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Additional context */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                You Shouldn&apos;t Have to Choose Between Your Career and Your
                Safety
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-600">
                    Agents often meet unknown clients alone in vacant properties
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-600">
                    Open houses advertise when agents will be alone and
                    vulnerable
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-600">
                    Traditional panic buttons require reaching for your phone -
                    often impossible in an emergency
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-emerald-500 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-semibold mb-3">
                There&apos;s a Better Way
              </h4>
              <p className="text-white/90 mb-6">
                HomeCloser AI provides hands-free, voice-activated protection
                that works even when you can&apos;t reach your phone. Just say your
                safety phrase, and help is on the way.
              </p>
              <a
                href="#features"
                className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all"
              >
                See How It Works
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
