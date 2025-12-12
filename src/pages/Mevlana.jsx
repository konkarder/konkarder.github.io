import mevlana from "../assets/mevlanamuzesi.jpg";

export default function Mevlana() {
  return (
    <div className="relative min-h-screen bg-white">
      <div 
        className="absolute inset-0 z-0 hidden md:block"
        style={{ 
          backgroundImage: `url(${mevlana})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-white/60"></div>
      </div>
      <div className="container mx-auto px-4 py-12 relative z-10">
      <h1 className="text-4xl font-bold  text-gray-800 mb-8 text-center">
        Mevlana Celaleddin-i Rumi
      </h1>

      <div className="max-w-4xl mx-auto">
        {/* Biography Section */}
        <div className="bg-white/20 backdrop-blur-sm rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Hayatı</h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Mevlana Celaleddin-i Rumi, 30 Eylül 1207'de Belh'te (günümüz Afganistan'ı) doğmuştur. 
              Babası Bahaeddin Veled, dönemin tanınmış bir alimi ve mutasavvıfıydı. Moğol istilası 
              nedeniyle ailesiyle birlikte Anadolu'ya göç etmiş ve 1228'de Konya'ya yerleşmiştir.
            </p>
            <p>
              Mevlana, gençlik yıllarında Şam ve Halep'te eğitim görmüş, dönemin en önemli ilim 
              merkezlerinde tahsil yapmıştır. 1244 yılında Şems-i Tebrizi ile tanışması, hayatında 
              dönüm noktası olmuş ve manevi yolculuğunu derinleştirmiştir.
            </p>
            <p>
              17 Aralık 1273'te Konya'da vefat eden Mevlana, bugün Mevlana Müzesi olarak bilinen 
              türbesinde yatmaktadır. Vefat günü "Şeb-i Arus" (Vuslat Gecesi) olarak anılır ve 
              her yıl düzenlenen törenlerle anılır.
            </p>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="bg-white/20 backdrop-blur-sm rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Felsefesi ve Öğretisi</h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Mevlana'nın felsefesi, evrensel sevgi, hoşgörü ve insanlık üzerine kuruludur. 
              "Gel, gel, ne olursan ol yine gel" sözüyle tüm insanlığı kucaklayan bir anlayışa sahiptir.
            </p>
            <p>
              Mevlana'ya göre, aşk ve sevgi evrenin temel dinamiğidir. İnsan, aşk yoluyla 
              kemale erer ve Yaratıcı'ya yaklaşır. Sema, bu manevi yolculuğun fiziksel bir 
              ifadesidir ve dönerek Allah'a ulaşma çabasını simgeler.
            </p>
            <p>
              Mevlana'nın en önemli eseri Mesnevi, altı ciltlik bir şiir külliyatıdır ve 
              "Farsça Kuran" olarak da anılır. Divan-ı Kebir, Fîhi Mâ Fîh ve Mektuplar 
              diğer önemli eserleridir.
            </p>
          </div>
        </div>

        {/* Legacy Section */}
        <div className="bg-white/20 backdrop-blur-sm rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Mirası</h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Mevlana'nın kurduğu Mevlevilik tarikatı, yüzyıllar boyunca Anadolu'da ve 
              İslam dünyasında etkili olmuştur. Sema törenleri, Mevlevi müziği ve edebiyatı 
              Türk kültürünün önemli bir parçasıdır.
            </p>
            <p>
              Günümüzde Mevlana'nın eserleri dünya çapında okunmakta ve öğretileri 
              evrensel barış ve hoşgörü mesajı olarak kabul edilmektedir. UNESCO, 2007 yılını 
              "Uluslararası Mevlana Yılı" ilan etmiştir.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
