import { useState } from "react";
import sa1 from "../assets/2025sa1.jpeg"
import sa from "../assets/2025sa.jpeg"
import sa24 from "../assets/2024sa.jpeg"

export default function Etkinlikler() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      name: "Şeb-i Arûs Programı",
      date: "2025-12-24",
      location: "Gazi Mustafa Kemal Atatürk Kültür Merkezi",
      image: sa1
    },
      {
      id: 2,
      name: "Şeb-i Arûs Programı",
      date: "2024-12-25",
      location: "Gazi Mustafa Kemal Atatürk Kültür Merkezi",
      image: sa24
    }
    /*
    {
      id: 2,
      name: "Geleneksel El Sanatları Sergisi",
      date: "2026-03-15",
      location: "Karaman Kültür Merkezi",
      image: "🎨"
    },
    {
      id: 3,
      name: "Konya Mutfağı Festivali",
      date: "2026-05-20",
      location: "Alaeddin Tepesi",
      image: "🍲"
    },
    {
      id: 4,
      name: "Yunus Emre Şiir Akşamı",
      date: "2026-06-10",
      location: "Karaman Yunus Emre Kültür Merkezi",
      image: "📖"
    },
    {
      id: 5,
      name: "Selçuklu Tarihi Konferansı",
      date: "2026-09-05",
      location: "Konya Üniversitesi",
      image: "🏛️"
    },
    {
      id: 6,
      name: "Geleneksel Müzik Konseri",
      date: "2026-10-12",
      location: "Mevlana Kültür Merkezi",
      image: "🎵"
    }*/
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        Etkinlikler
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Yaklaşan kültürel ve sosyal etkinliklerimiz
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div 
            key={event.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => setSelectedEvent(event)}
          >
            <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
              {event.image.length > 5 ? (
                <img 
                  src={event.image} 
                  alt={event.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              ) : (
                <span className="text-6xl">{event.image}</span>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {event.name}
              </h3>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center">
                  <span className="font-semibold mr-2">📅 Tarih:</span>
                  {new Date(event.date).toLocaleDateString('tr-TR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                <p className="flex items-center">
                  <span className="font-semibold mr-2">📍 Yer:</span>
                  {event.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Event Modal Popup */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-white bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedEvent(null)}>
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl border border-gray-100" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 bg-white rounded-full p-2 text-gray-600 hover:text-gray-900 shadow-md z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="h-64 md:h-96 bg-white flex items-center justify-center">
              {selectedEvent.image.length > 5 ? (
                <img 
                  src={selectedEvent.image} 
                  alt={selectedEvent.name} 
                  className="w-full h-full object-contain"
                />
              ) : (
                <span className="text-9xl">{selectedEvent.image}</span>
              )}
            </div>
            
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">{selectedEvent.name}</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p className="flex items-center">
                  <span className="font-bold mr-3 min-w-[80px]">📅 Tarih:</span>
                  {new Date(selectedEvent.date).toLocaleDateString('tr-TR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    weekday: 'long'
                  })}
                </p>
                <p className="flex items-center">
                  <span className="font-bold mr-3 min-w-[80px]">📍 Yer:</span>
                  {selectedEvent.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
