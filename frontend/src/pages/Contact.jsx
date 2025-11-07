import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  toast.info("Sending your message...", { position: "top-center" });

  try {
    const response = await fetch("https://vaidehi-backend.onrender.com/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast.success("Message sent successfully, You will be contacted soon!", { position: "top-center" });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      toast.error("Failed to send message. Please try again.", {
        position: "top-center",
      });
    }
  } catch (error) {
    console.error("Error:", error);
    toast.error("⚠️ Something went wrong. Please try again later.", {
      position: "top-center",
    });
  }
};


  return (
    <div className="py-16 px-6 text-center bg-gray-50">
      <h2 className="text-4xl font-bold text-blue-700 mb-6">Contact Us</h2>

      {/* 📍 Contact Section */}
      <div className="mt-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        {/* Left: Google Map */}
        <div className="rounded-xl overflow-hidden shadow-lg border">
          <iframe
            title="Vaidehi Tour & Travels"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1803.401506394857!2d82.95779409906548!3d25.310821591973735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2da157fa4869%3A0x2dcff514dc7dc355!2sVaidehi%20tour%20and%20travels!5e0!3m2!1sen!2sin!4v1761999972743!5m2!1sen!2sin"
            width="100%"
            height="601"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white p-6 rounded-xl shadow-lg border text-left">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">Get In Touch</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Your Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Write Your Message
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white font-semibold py-3 rounded-lg hover:bg-blue-800 transition"
            >
              Send Message
            </button>

           <ToastContainer autoClose={3000} theme="colored" />
          </form>
        </div>
      </div>
    </div>
  );
}

