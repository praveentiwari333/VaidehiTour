export default function Gallery() {
  const images = [
    { src: "/dzires.jpg", title: "Dzires" },
    { src: "/ertiga.jpeg", title: "Ertiga" },
    { src: "/innova.webp", title: "Innova" },
    { src: "/force.webp", title: "Force" },
    { src: "/nexa.webp", title: "Nexa" },
  ];

  return (
    <div className="py-16 px-6 text-center bg-white">
      <h2 className="text-4xl font-bold text-blue-700 mb-8">Gallery</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((img, i) => (
          <div key={i} className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition">
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-64 object-cover rounded-t-xl hover:scale-105 transition-transform duration-300"
            />
            <p className="text-lg font-semibold text-gray-700 py-3">
              {img.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
