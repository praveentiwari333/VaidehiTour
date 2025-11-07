import { Phone,MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <a
        href="tel:+917355669873"
        className="bg-blue-600 text-white rounded-full p-3 shadow-lg hover:bg-blue-700"
        title="Call Now"
      >
        <Phone size={24} />
      </a>
      <a
        href="https://wa.me/+917355669873"
        className="bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}
