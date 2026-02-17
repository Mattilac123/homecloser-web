export default function Features() {
  const features = [
    {
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
      title: "Voice-Activated Safety Phrase",
      description:
        "Set your personal safety phrase. In an emergency, simply say your phrase during a showing, and HomeCloser AI instantly alerts emergency dispatch with your name and exact location.",
      color: "red",
      bgColor: "bg-red-50",
      iconColor: "text-red-500",
      borderColor: "border-red-100",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Pre-Set Location Sharing",
      description:
        "Set your exact showing address before you arrive - down to the specific condo unit or floor. When you trigger an alert, emergency dispatch receives the precise address instantly. No GPS guesswork.",
      color: "blue",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
      borderColor: "border-blue-100",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
          />
        </svg>
      ),
      title: "Intelligent Recording",
      description:
        "Wear your AirPods during showings and HomeCloser AI records everything discreetly. Every conversation is captured and securely stored for your records and safety.",
      color: "purple",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-500",
      borderColor: "border-purple-100",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      title: "AI-Powered Notes",
      description:
        "Never miss a detail. Our AI automatically transcribes and summarizes each showing, capturing client preferences, questions, and key moments so you can focus on building relationships.",
      color: "emerald",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-500",
      borderColor: "border-emerald-100",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: "Sales Analytics & Insights",
      description:
        "Get actionable insights from every showing. Track what works, identify patterns in successful closings, and receive personalized tips to improve your sales performance.",
      color: "amber",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-500",
      borderColor: "border-amber-100",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      title: "Privacy & Security First",
      description:
        "Your recordings and data are encrypted end-to-end. Only you have access to your information. We comply with all real estate industry privacy regulations.",
      color: "slate",
      bgColor: "bg-slate-50",
      iconColor: "text-slate-500",
      borderColor: "border-slate-200",
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Features
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            Everything You Need to Stay Safe
            <br />
            <span className="text-blue-600">and Close More Deals</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            HomeCloser AI combines cutting-edge safety technology with
            intelligent sales tools, giving you peace of mind and a competitive
            edge.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl ${feature.bgColor} border ${feature.borderColor} hover:shadow-lg transition-shadow`}
            >
              <div
                className={`w-14 h-14 rounded-xl ${feature.bgColor} ${feature.iconColor} flex items-center justify-center mb-6`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
