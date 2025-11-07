import { Phone, MapPin, Mail, Facebook, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-gray-200 pt-12 pb-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center sm:text-left">
        
        {/* Column 1 - Company Info */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">
            Vaidehi Tour & Travels
          </h3>
          <p className="text-sm leading-relaxed">
            Reliable car rental with driver service across
            Varanasi, Prayagraj, Ayodhya & Bodhgaya.  
            Available 24×7 for your comfort and convenience.
          </p>
          <div className="flex justify-center sm:justify-start gap-4 mt-4">
            <a href="https://www.facebook.com/deepak.sharma.503961" target="_blank" rel="noreferrer">
              <Facebook className="w-5 h-5 hover:text-yellow-400 transition-colors" />
            </a>
            <a href="https://www.instagram.com/sharmadeepak__0999/" target="_blank" rel="noreferrer">
              <Instagram className="w-5 h-5 hover:text-yellow-400 transition-colors" />
            </a>
            <a href="https://wa.me/917355669873" target="_blank" rel="noreferrer">
              <MessageCircle className="w-5 h-5 hover:text-yellow-400 transition-colors" />
            </a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-yellow-400">Home</a></li>
            <li><a href="/about" className="hover:text-yellow-400">About Us</a></li>
            <li><a href="/services" className="hover:text-yellow-400">Services</a></li>
            <li><a href="/gallery" className="hover:text-yellow-400">Gallery</a></li>
            <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Contact Us</h4>
          <p className="flex items-center justify-center sm:justify-start gap-2">
            <MapPin className="w-4 h-4 text-yellow-400" />
            Shital Complex, G.T. Road (Near HDFC Bank), Chandpur, Varanasi - 221106
          </p>
          <p className="flex items-center justify-center sm:justify-start gap-2 mt-2">
            <Phone className="w-4 h-4 text-yellow-400" />
            <a href="tel:+917355669873" className="hover:text-yellow-400">
              +91 73556 69873
            </a>
          </p>
          <p className="flex items-center justify-center sm:justify-start gap-2 mt-2">
            <Mail className="w-4 h-4 text-yellow-400" />
            <a href="mailto:dkumarsh6@gmail.com" className="hover:text-yellow-400">
              dkumarsh6@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">Vaidehi Tour & Travels</span>.  
          All Rights Reserved.
        </p>
        <p className="mt-1">
          Designed with ❤️ in Varanasi.
        </p>
      </div>
    </footer>
  );
}
