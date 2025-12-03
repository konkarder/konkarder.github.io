export default function KonyaKaraman() {
  const konyaPlaces = [
    "Mevlana Müzesi ve Türbesi",
    "Alaaddin Tepesi ve Camii",
    "Çatalhöyük Neolitik Kenti",
    "Karatay Medresesi (Çini Eserler Müzesi)",
    "İnce Minareli Medrese",
    "Sille Köyü (Siyata)",
    "Konya Tropikal Kelebek Bahçesi",
    "Beyşehir Gölü ve Eşrefoğlu Camii",
    "Kilistra Antik Kenti",
    "Bedesten Çarşısı"
  ];

  const karamanPlaces = [
    "Karaman Kalesi",
    "Aktekke Camii (Mader-i Mevlana Türbesi)",
    "Hatuniye Medresesi",
    "Yunus Emre Camii ve Türbesi",
    "Taşkale Tahıl Ambarları",
    "Binbirkilise",
    "Manazan Mağaraları",
    "İncesu Mağarası",
    "Ermenek Turkuaz Gölü",
    "Tartanzade Konağı"
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
        Konya & Karaman
      </h1>

      {/* Konya Section */}
      <div className="mb-16 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-green-700 to-green-600 p-6">
          <h2 className="text-3xl font-bold text-white">Bozkırın Kalbi, Hoşgörü Şehri: Konya</h2>
        </div>
        <div className="p-8">
          <div className="text-gray-700 leading-relaxed space-y-4 mb-8">
            <p>
              Konya, sadece Türkiye'nin yüzölçümü bakımından en büyük şehri değil, aynı zamanda Anadolu tarihinin en derin hafızasıdır. 
              Yüzyıllar boyunca Anadolu Selçuklu Devleti'ne başkentlik yapmış bu kadim topraklar, ilim, sanat ve kültürün merkezi olmuştur. 
              Hz. Mevlana'nın "Ne olursan ol, yine gel" çağrısının yankılandığı sokakları, manevi atmosferiyle insanı sarıp sarmalar.
            </p>
            <p>
              Geniş ovaları, verimli toprakları ve kendine has mutfağıyla Konya, geçmişi bugüne bağlayan bir köprü gibidir. 
              Hem modern şehirciliğin hem de tarihi dokunun bir arada yaşadığı şehir, insanlığın bilinen en eski yerleşim yerlerinden biri olan 
              Çatalhöyük'e de ev sahipliği yapar. Konya'yı gezmek, zamanda bir yolculuğa çıkmak ve huzuru bulmaktır.
            </p>
          </div>

          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Konya'da Görülmesi Gereken Tarihi ve Turistik Yerler
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {konyaPlaces.map((place, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">{place}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Karaman Section */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-green-700 to-green-600 p-6">
          <h2 className="text-3xl font-bold text-white">Türk Dilinin Başkenti, Yiğitler Diyarı: Karaman</h2>
        </div>
        <div className="p-8">
          <div className="text-gray-700 leading-relaxed space-y-4 mb-8">
            <p>
              Tarih boyunca pek çok medeniyete ev sahipliği yapmış olan Karaman, Anadolu'nun en köklü ve stratejik şehirlerinden biridir. 
              Karamanoğulları Beyliği'ne başkentlik yapmış bu topraklar, Karamanoğlu Mehmet Bey'in meşhur fermanıyla Türkçemizin devlet dili 
              ilan edildiği, dilimizin kalesidir. Sadece tarihiyle değil, "Bizim Yunus" olarak bildiğimiz Yunus Emre'nin hoşgörü ikliminin 
              de hissedildiği bir maneviyat şehridir.
            </p>
            <p>
              Torosların eteğindeki konumuyla İç Anadolu'yu Akdeniz'e bağlayan Karaman; mağaraları, kanyonları ve yaylalarıyla eşsiz bir doğaya sahiptir. 
              Hem Mevlana Hazretleri'nin ailesinin ilk durağı olmasıyla Konya ile kopmaz bir bağı vardır, hem de kendine has kültürüyle dimdik ayakta 
              duran bir tarihtir. Karaman'ı tanımak, Anadolu'nun özünü ve Türkçenin sesini duymaktır.
            </p>
          </div>

          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Karaman'da Görülmesi Gereken Tarihi ve Turistik Yerler
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {karamanPlaces.map((place, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">{place}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
