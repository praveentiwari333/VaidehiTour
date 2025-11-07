import { useState } from "react";

export default function OwnerDashboard() {
  const [services, setServices] = useState([
    { id: 1, title: "Varanasi Sightseeing", description: "Explore Kashi Ghats and Temples." },
  ]);
  const [messages, setMessages] = useState([
    { id: 1, name: "Ravi", email: "ravi@example.com", message: "Need a car tomorrow." },
  ]);
  const [newService, setNewService] = useState({ title: "", description: "" });

  const handleAddService = () => {
    if (newService.title.trim() === "") return;
    setServices([...services, { id: Date.now(), ...newService }]);
    setNewService({ title: "", description: "" });
  };

  const handleDeleteService = (id) => {
    setServices(services.filter((s) => s.id !== id));
  };

  return (
    <section className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Owner Dashboard</h2>

      <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* --- Manage Services --- */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Manage Services</h3>

          {/* Add New Service */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <input
              type="text"
              placeholder="Service title"
              value={newService.title}
              onChange={(e) => setNewService({ ...newService, title: e.target.value })}
              className="flex-1 border rounded-lg px-3 py-2"
            />
            <input
              type="text"
              placeholder="Description"
              value={newService.description}
              onChange={(e) => setNewService({ ...newService, description: e.target.value })}
              className="flex-1 border rounded-lg px-3 py-2"
            />
            <button
              onClick={handleAddService}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Add
            </button>
          </div>

          {/* Service List */}
          <ul className="space-y-3">
            {services.map((s) => (
              <li
                key={s.id}
                className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-lg border"
              >
                <div>
                  <p className="font-semibold">{s.title}</p>
                  <p className="text-sm text-gray-600">{s.description}</p>
                </div>
                <button
                  onClick={() => handleDeleteService(s.id)}
                  className="text-red-500 hover:text-red-700 font-medium"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* --- View Messages --- */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Customer Messages</h3>
          {messages.length === 0 ? (
            <p className="text-gray-600">No messages yet.</p>
          ) : (
            <div className="space-y-4 max-h-[400px] overflow-y-auto">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className="border rounded-lg p-4 bg-gray-50 text-left"
                >
                  <p className="font-semibold text-blue-700">{msg.name}</p>
                  <p className="text-sm text-gray-600">{msg.email}</p>
                  <p className="mt-2 text-gray-700">{msg.message}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
