import Link from "next/link";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with basic safety features",
      features: [
        "Voice-activated safety phrase",
        "Emergency dispatch alerts",
        "Location sharing",
        "5 showings per month",
        "Basic AI notes",
      ],
      cta: "Get Started Free",
      popular: false,
    },
    {
      name: "Pro",
      price: "$19",
      period: "/month",
      description: "Everything you need for full-time real estate work",
      features: [
        "Everything in Free",
        "Unlimited showings",
        "Advanced AI notes & summaries",
        "Sales analytics dashboard",
        "Client insights & patterns",
        "Priority emergency response",
        "Recording history (90 days)",
      ],
      cta: "Start Pro Trial",
      popular: true,
    },
    {
      name: "Team",
      price: "$49",
      period: "/month",
      description: "For brokerages and teams who prioritize agent safety",
      features: [
        "Everything in Pro",
        "Up to 10 team members",
        "Team safety dashboard",
        "Manager alerts & notifications",
        "Team performance analytics",
        "Custom safety protocols",
        "Dedicated support",
        "Recording history (1 year)",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Pricing
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            Choose Your Protection Plan
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Start free and upgrade when you&apos;re ready. All plans include our
            core safety features.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 ${
                plan.popular
                  ? "ring-2 ring-blue-600 shadow-xl scale-105"
                  : "shadow-sm hover:shadow-lg"
              } transition-all`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-emerald-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan details */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="#download"
                className={`block w-full py-3 px-6 text-center font-semibold rounded-full transition-all ${
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/25"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ teaser */}
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            Have questions?{" "}
            <a href="#faq" className="text-blue-600 hover:underline font-medium">
              Check out our FAQ
            </a>{" "}
            or{" "}
            <a
              href="mailto:support@homecloserai.com"
              className="text-blue-600 hover:underline font-medium"
            >
              contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
