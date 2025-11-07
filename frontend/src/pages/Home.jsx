export default function Home() {
  return (
    <section className="text-center py-20 bg-gradient-to-b from-blue-100 via-white to-gray-50">
      {/* Headline */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-4">
        Welcome to <span className="text-yellow-500">Vaidehi Tour & Travels</span>
      </h1>

      {/* Subheadline */}
      <p className="max-w-3xl mx-auto text-gray-700 text-lg md:text-xl leading-relaxed mb-8 px-4">
        Experience comfort, safety, and reliability with our{" "}
        <b>car rental with driver services</b> across{" "}
        <b>Varanasi and nearby cities</b>. Whether you’re here for a spiritual
        journey, a family vacation, or a business trip — we make travel
        effortless and enjoyable.
      </p>

      {/* Call to action buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
        <a
          href="tel:+917355669873"
          className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
        >
          📞 Call Now to Book
        </a>
        <a
          href="/services"
          className="inline-block bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          🚗 View Our Services
        </a>
      </div>

      {/* Hero Image */}
      <div className="mt-10 relative">
        <img
          src="/vaidehitour.png"
          alt="Vaidehi Tour Car"
          className="rounded-3xl shadow-2xl mx-auto max-w-3xl w-full hover:scale-105 transition-transform duration-500"
        />
        
      </div>

      {/* Highlight Section */}
      <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 max-w-6xl mx-auto ">
        {[
          { emoji: "🚖", title: "Clean & Comfortable Cars" },
          { emoji: "🧭", title: "Expert Local Drivers" },
          { emoji: "💸", title: "Affordable Pricing" },
          { emoji: "🕐", title: "On-Time Every Time" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-transform hover:-translate-y-1 border border-gray-400"
          >
            <div className="text-4xl mb-3">{item.emoji}</div>
            <h3 className="font-semibold text-blue-700">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
