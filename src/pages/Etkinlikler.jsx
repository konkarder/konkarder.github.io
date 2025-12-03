export default function Etkinlikler() {
  const events = [
    {
      id: 1,
      name: "Mevlana'yı Anma Töreni",
      date: "2025-12-17",
      location: "Konya Kongre Merkezi",
      image: "🎭"
    },
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
    }
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
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 h-48 flex items-center justify-center text-8xl">
              {event.image}
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
    </div>
  );
}
