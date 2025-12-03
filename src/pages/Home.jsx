import { useState, useEffect } from 'react';
import konya1 from '../assets/konya1.jpeg';
import konya2 from '../assets/konya2.jpeg';
import konya3 from '../assets/konya3.jpeg';
import karaman1 from '../assets/karaman1.jpeg';
import karaman2 from '../assets/karaman2.jpeg';
import karaman3 from '../assets/karaman3.jpg';

export default function Home() {
  const images = [konya1, konya2, konya3, karaman1, karaman2, karaman3];
  const [currentImage, setCurrentImage] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Etkinlik tarihi - 24 Aralık 2025
  const eventDate = new Date('2025-12-24T00:00:00');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = eventDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const upcomingEvents = [
    {
      id: 1,
      name: "Şeb-i Arûs Programı",
      date: "2025-12-24",
      location: "Gazi Mustafa Kemal Atatürk Kültür Merkezi",
    },
    
  ];

  return (
    <div>
      {/* Hero Section with Image Carousel */}
      <div className="relative flex items-center justify-center overflow-hidden" style={{ height: '70vh' }}>
        {/* Background Images */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={img} 
              alt={`Konya Karaman ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 drop-shadow-lg">
            Ne Olursan Ol, Yine Gel
          </h1>
          <p className="text-xl md:text-2xl font-serif text-green-200 drop-shadow-lg">
            Hz. Mevlana
          </p>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentImage 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
 <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Hoş Geldiniz
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Konya ve Karaman illerinin kültürel mirasını yaşatmak, hemşehrilerimizi bir araya getirmek 
            ve bölgemizin değerlerini tanıtmak için çalışıyoruz.
          </p>
        </div>
      </div>
      {/* Countdown Section */}
      <div className="bg-gradient-to-r from-green-700 to-green-600 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            Mevlana'yı Anma Töreni'ne Kalan Süre
          </h2>
          <div className="flex justify-center gap-4 md:gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
              <div className="text-3xl md:text-5xl font-bold text-white">{timeLeft.days}</div>
              <div className="text-green-200 text-sm md:text-base mt-2">Gün</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
              <div className="text-3xl md:text-5xl font-bold text-white">{timeLeft.hours}</div>
              <div className="text-green-200 text-sm md:text-base mt-2">Saat</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
              <div className="text-3xl md:text-5xl font-bold text-white">{timeLeft.minutes}</div>
              <div className="text-green-200 text-sm md:text-base mt-2">Dakika</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
              <div className="text-3xl md:text-5xl font-bold text-white">{timeLeft.seconds}</div>
              <div className="text-green-200 text-sm md:text-base mt-2">Saniye</div>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
     

      {/* Upcoming Events Section */}
      {upcomingEvents.length > 0 && (
        <div className="bg-green-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              Yaklaşan Etkinlikler
            </h2>
            <div className="flex justify-center">
              <div className={`grid gap-6 w-full ${
                upcomingEvents.length === 1 
                  ? 'max-w-md' 
                  : upcomingEvents.length === 2 
                  ? 'grid-cols-1 md:grid-cols-2 max-w-3xl' 
                  : 'grid-cols-1 md:grid-cols-3 max-w-6xl'
              }`}>
                {upcomingEvents.map((event) => (
                  <div 
                    key={event.id}
                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border-t-4 border-green-600"
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {event.name}
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <p className="flex items-center">
                        <span className="text-green-600 mr-2">📅</span>
                        {new Date(event.date).toLocaleDateString('tr-TR', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                      <p className="flex items-center">
                        <span className="text-green-600 mr-2">📍</span>
                        {event.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Map Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
            Bizi Ziyaret Edin
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-green-700 to-green-600 text-white">
                <h3 className="text-xl font-bold mb-2">Adresimiz</h3>
                <p className="text-green-100">
                  Emirbeyazıt Mah. Çakırlar Sok No:3/B, Menteşe, Muğla, Turkey
                </p>
              </div>
              <div className="relative w-full h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3188.8!2d28.3622!3d37.2156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bf70e0e0e0e0e0%3A0x0!2sEmirbeyaz%C4%B1t%20Mah.%20%C3%87ak%C4%B1rlar%20Sok%20No%3A3%2FB%2C%20Mente%C5%9Fe%2C%20Mu%C4%9Fla!5e0!3m2!1str!2str!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="KONKARDER Konum"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
