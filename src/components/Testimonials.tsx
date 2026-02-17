export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "HomeCloser AI has completely changed how I approach showings. I feel safer knowing that if anything happens, help is just a phrase away. Plus, the notes it takes are incredible!",
      author: "Sarah M.",
      role: "Top Producer, Coldwell Banker",
      location: "Los Angeles, CA",
      image: "/testimonial-1.jpg",
      rating: 5,
    },
    {
      quote:
        "After a scary incident at a showing last year, I was hesitant to do solo showings. HomeCloser AI gave me back my confidence. The safety features are seamless and the AI notes help me remember every detail.",
      author: "Michael T.",
      role: "Broker Associate, RE/MAX",
      location: "Dallas, TX",
      image: "/testimonial-2.jpg",
      rating: 5,
    },
    {
      quote:
        "I was skeptical at first, but the sales analytics alone are worth it. I've identified patterns in my successful closings that I never noticed before. My conversion rate is up 23%!",
      author: "Jennifer L.",
      role: "Luxury Specialist, Sotheby's",
      location: "Miami, FL",
      image: "/testimonial-3.jpg",
      rating: 5,
    },
  ];

  const stats = [
    { number: "10,000+", label: "Showings Protected" },
    { number: "98%", label: "Would Recommend" },
    { number: "4.9", label: "App Store Rating" },
    { number: "< 3sec", label: "Alert Response Time" },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            Trusted by Agents Nationwide
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of real estate professionals who&apos;ve made HomeCloser AI
            their showing companion.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-emerald-400 flex items-center justify-center text-white font-semibold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured in */}
        <div className="mt-20">
          <p className="text-center text-gray-500 text-sm uppercase tracking-wider mb-8">
            As Featured In
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50">
            <span className="text-2xl font-bold text-gray-400">Inman</span>
            <span className="text-2xl font-bold text-gray-400">
              RealTrends
            </span>
            <span className="text-2xl font-bold text-gray-400">NAR</span>
            <span className="text-2xl font-bold text-gray-400">
              HousingWire
            </span>
            <span className="text-2xl font-bold text-gray-400">Forbes</span>
          </div>
        </div>
      </div>
    </section>
  );
}
