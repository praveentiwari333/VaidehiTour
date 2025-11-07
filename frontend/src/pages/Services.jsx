export default function Services() {
  const services = [
    {
      title: "Local & Outstation Trips",
      emoji: "🚗",
      description:
        "Comfortable rides for your daily travel or long-distance journeys. Enjoy safe, clean, and on-time service across Varanasi and nearby cities.",
    },
    {
      title: "Varanasi Sightseeing",
      emoji: "🕉️",
      description:
        "Explore the spiritual heart of India — from the Ghats and temples to Sarnath — with knowledgeable local drivers guiding your way.",
    },
    {
      title: "Airport Transfers",
      emoji: "✈️",
      description:
        "Hassle-free pickup and drop to/from Lal Bahadur Shastri Airport. Always punctual, with real-time updates and smooth coordination.",
    },
    {
      title: "Nearby City Tours",
      emoji: "📍",
      description:
        "Visit nearby destinations like Prayagraj, Ayodhya, Lucknow, and Bodh Gaya in comfort, with flexible packages and experienced drivers.",
    },
    {
      title: "Corporate Travel",
      emoji: "💼",
      description:
        "Professional travel solutions for business meetings, guest transfers, and corporate events — ensuring class, comfort, and reliability.",
    },
    {
      title: "Wedding & Event Transport",
      emoji: "💒",
      description:
        "Elegant cars and courteous drivers to make your special occasions smooth and stylish — perfect for family and guests alike.",
    },
    {
      title: "24x7 Customer Support",
      emoji: "📞",
      description:
        "Our support team is available round-the-clock to assist with bookings, queries, or last-minute changes to your travel plans.",
    },
    {
      title: "Customized Packages",
      emoji: "🧭",
      description:
        "Tailor-made travel experiences to match your schedule, budget, and interests — from spiritual tours to leisure getaways.",
    },
  ];

  return (
    <div className="py-16 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-blue-700 mb-8">
        Our <span className="text-yellow-500">Services</span>
      </h2>
      <p className="max-w-3xl mx-auto text-gray-700 mb-12 text-lg">
        We offer a wide range of travel services designed to make your journey
        smooth, comfortable, and memorable — whether you're exploring Varanasi
        or traveling across India.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-2xl p-8 hover:shadow-2xl transition duration-300 border border-gray-100 hover:-translate-y-1"
          >
            <div className="text-5xl mb-4">{service.emoji}</div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

