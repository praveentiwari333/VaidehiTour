import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // for mobile menu icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const linkClass = (path) =>
    `block px-4 py-2 rounded-md font-medium transition duration-300 ${
      location.pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:text-blue-700 hover:bg-blue-100"
    }`;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo + Brand Name */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/vlogo.png" // <-- put your logo file in /public/logo.png or update path
            alt="Vaidehi Logo"
            className="w-12 h-12 rounded-full border border-blue-300 shadow-sm hover:scale-105 transition-transform"
          />
          <span className="text-2xl font-extrabold text-blue-700 tracking-wide hover:text-blue-800 transition">
            Vaidehi Tour & Travels
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-3">
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>
          <Link to="/about" className={linkClass("/about")}>
            About
          </Link>
          <Link to="/services" className={linkClass("/services")}>
            Services
          </Link>
          <Link to="/gallery" className={linkClass("/gallery")}>
            Gallery
          </Link>
          <Link to="/contact" className={linkClass("/contact")}>
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-inner animate-slideDown">
          <div className="flex flex-col items-center py-3 space-y-2">
            <Link to="/" onClick={() => setIsOpen(false)} className={linkClass("/")}>
              Home
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className={linkClass("/about")}>
              About
            </Link>
            <Link to="/services" onClick={() => setIsOpen(false)} className={linkClass("/services")}>
              Services
            </Link>
            <Link to="/gallery" onClick={() => setIsOpen(false)} className={linkClass("/gallery")}>
              Gallery
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className={linkClass("/contact")}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}


