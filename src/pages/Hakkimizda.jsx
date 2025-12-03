export default function Hakkimizda() {
  const boardMembers = [
    {
      id: 1,
      name: "Ahmet Yılmaz",
      position: "Başkan",
      email: "ahmet.yilmaz@konkarder.org",
      phone: "+90 532 XXX XX XX",
      photo: "👨‍💼"
    },
    {
      id: 2,
      name: "Ayşe Demir",
      position: "Başkan Yardımcısı",
      email: "ayse.demir@konkarder.org",
      phone: "+90 533 XXX XX XX",
      photo: "👩‍💼"
    },
    {
      id: 3,
      name: "Mehmet Kaya",
      position: "Genel Sekreter",
      email: "mehmet.kaya@konkarder.org",
      phone: "+90 534 XXX XX XX",
      photo: "👨‍💼"
    },
    {
      id: 4,
      name: "Fatma Şahin",
      position: "Mali İşler Sorumlusu",
      email: "fatma.sahin@konkarder.org",
      phone: "+90 535 XXX XX XX",
      photo: "👩‍💼"
    },
    {
      id: 5,
      name: "Ali Özkan",
      position: "Üye",
      email: "ali.ozkan@konkarder.org",
      phone: "+90 536 XXX XX XX",
      photo: "👨‍💼"
    },
    {
      id: 6,
      name: "Zeynep Arslan",
      position: "Üye",
      email: "zeynep.arslan@konkarder.org",
      phone: "+90 537 XXX XX XX",
      photo: "👩‍💼"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        Hakkımızda
      </h1>
      
      {/* Mission and Vision Section */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Misyonumuz */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-green-600">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Misyonumuz (Ne Yapıyoruz?)</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Konya ve Karamanlı hemşehrilerimizi gurbette bir araya getirerek aramızdaki dostluk ve komşuluk bağlarını canlı tutmayı amaçlıyoruz.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              Kültürümüzü ve geleneklerimizi unutmadan yaşatmak, çocuklarımıza ve gençlerimize bu değerleri öğretmek için çalışıyoruz.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              Hemşehrilerimiz arasında köprü kurarak, birlik ve beraberlik içinde hareket ediyoruz.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Herkesin kendini evinde hissettiği, samimi ve güvenilir bir dayanışma ortamı sunuyoruz.
            </p>
          </div>

          {/* Vizyonumuz */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-green-600">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Vizyonumuz (Ne İstiyoruz?)</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Hemşehrilerimizin her zaman çekinmeden kapısını çalabileceği, dertlerini ve sevinçlerini paylaşabileceği sıcak bir aile yuvası olmak istiyoruz.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              Konya ve Karaman'ın hoşgörüsünü en güzel şekilde temsil eden, örnek bir topluluk olmayı hedefliyoruz.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-3">
              Gelecek nesillerin de kültürüne sahip çıktığı, köklerinden kopmadan büyüdüğü bir dernek bırakmak en büyük hayalimizdir.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Birlik içinde, herkesin takdir ettiği ve güvendiği bir çatı olarak anılmak istiyoruz.
            </p>
          </div>
        </div>
      </div>

      {/* Board Members Section */}
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Yönetim Kurulu
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boardMembers.map((member) => (
            <div 
              key={member.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-gradient-to-br from-green-600 to-green-800 h-40 flex items-center justify-center text-7xl">
                {member.photo}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-green-700 font-semibold mb-4">
                  {member.position}
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-start">
                    <span className="mr-2">📧</span>
                    <span className="break-all">{member.email}</span>
                  </p>
                  <p className="flex items-center">
                    <span className="mr-2">📱</span>
                    {member.phone}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
