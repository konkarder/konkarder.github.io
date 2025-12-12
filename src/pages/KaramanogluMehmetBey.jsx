import karamanoglu from "../assets/karamanoglu.jpg";

export default function KaramanogluMehmetBey() {
  return (
    <div className="relative min-h-screen bg-white">
      <div 
        className="absolute inset-0 z-0 hidden md:block"
        style={{ 
          backgroundImage: `url(${karamanoglu})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-white/60"></div>
      </div>
      <div className="container mx-auto px-4 py-12 relative z-10">
      <h1 className="text-4xl font-bold  text-gray-800 mb-8 text-center">
        Karamanoğlu Mehmet Bey
      </h1>

      <div className="max-w-4xl mx-auto">
        {/* Hayatı Section */}
        <div className="bg-white/20 backdrop-blur-sm rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Hayatı</h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Karamanoğlu Mehmet Bey, 13. yüzyılda Anadolu’nun siyasi ve kültürel tarihinde kritik bir rol oynamış önemli bir devlet adamıdır. Karamanoğulları Beyliği’nin en etkili liderlerinden biri olarak, hem Anadolu Selçuklu Devleti ile ilişkilerinde hem de Türk dilinin gelişiminde kalıcı bir iz bırakmıştır.
            </p>
          </div>
        </div>

        {/* Doğumu ve Kökeni Section */}
        <div className="bg-white/20 backdrop-blur-sm rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Doğumu ve Kökeni</h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Mehmet Bey’in doğum tarihi kesin kaynaklarda yer almamakla birlikte, 13. yüzyılın başlarında dünyaya geldiği kabul edilir. O, Karamanoğulları’nın kurucu kuşağına mensup seçkin bir lider olarak yetişmiş; askeri becerileri, siyasi zekâsı ve liderlik kabiliyetiyle kısa sürede öne çıkmıştır.
            </p>
          </div>
        </div>

        {/* Siyasi Yükselişi Section */}
        <div className="bg-white/20 backdrop-blur-sm rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Siyasi Yükselişi</h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Mehmet Bey’in yükselişi, dönemin zorlu Anadolu siyasi ortamında şekillenmiştir. Moğol baskısının arttığı, Selçuklu merkezi otoritesinin zayıfladığı bu dönemde, Anadolu’nun farklı bölgelerinde beyler öne çıkmaya başlamıştı.
            </p>
            <p>
              Mehmet Bey, Karamanoğulları Beyliği’nin nüfuz alanını hızla genişleterek Konya ve çevresinde etkili bir güç haline geldi. Selçuklu taht mücadelelerinde rol oynadı ve zaman zaman Selçuklu sultanları ile ittifak, zaman zaman mücadele içinde oldu.
            </p>
          </div>
        </div>

        {/* Dil Fermanı Section */}
        <div className="bg-white/20 backdrop-blur-sm rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">“Dilde, Fikirde, İşte Birlik”: Türk Dilinin Resmiyet Kazanması</h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Mehmet Bey’i tarih sahnesinde öne çıkaran en önemli olay, 13 Mayıs 1277 tarihinde ilan ettiği ünlü fermanıdır. Bu fermanda:
            </p>
            <div className="border-l-4 border-blue-900 pl-4 py-2 my-4 bg-blue-50/30 italic font-semibold">
              “Bugünden sonra divanda, dergâhta, bargâhta, mecliste ve meydanda Türkçeden başka dil kullanılmayacaktır.”
            </div>
            <p>
              diyerek Türkçeyi resmî devlet dili ilan etti.
            </p>
            <p>
              Bu karar, Türk dili tarihinde bir dönüm noktasıdır ve Mehmet Bey’i Türk kültür tarihinde ayrıcalıklı bir konuma yerleştirir.
            </p>
          </div>
        </div>

        {/* Askeri Faaliyetleri Section */}
        <div className="bg-white/20 backdrop-blur-sm rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Askeri Faaliyetleri ve Mücadeleleri</h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Mehmet Bey, Selçuklu otoritesine karşı zaman zaman sert bir politika izlemiş, özellikle Moğol baskısına karşı Anadolu’daki direniş hareketlerinin şekillenmesinde pay sahibi olmuştur. Selçuklu tahtında söz sahibi olmak isteyen çeşitli taraflarla ittifaklar kurmuş, Konya’yı kısa süreliğine kontrolü altına almıştır.
            </p>
            <p>
              Ancak Moğol destekli Selçuklu kuvvetleriyle yaşadığı çatışmalar sonucunda güç dengesi tersine dönmüş; Mehmet Bey 1277 yılı sonlarında bir savaş sırasında hayatını kaybetmiştir.
            </p>
          </div>
        </div>

        {/* Ölümü ve Mirası Section */}
        <div className="bg-white/20 backdrop-blur-sm rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Ölümü ve Mirası</h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Mehmet Bey’in ölümü, Karamanoğulları açısından bir kayıp olsa da beyliğin gücünü tamamen kırmamıştır. Karamanoğulları yaklaşık iki yüzyıl daha Anadolu’nun en etkin Türk beyliklerinden biri olarak varlığını sürdürmüştür.
            </p>
            <p>
              Mehmet Bey’in en kalıcı mirası ise siyasî başarılarından öte, Türk diline verdiği destektir. Türkçeyi devlet dili düzeyine taşıyan bu karar, yüzyıllar boyunca Anadolu’da Türkçenin gelişimine zemin hazırlamıştır.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}