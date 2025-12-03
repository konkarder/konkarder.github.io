export default function Sirketler() {
  const companies = [
    {
      id: 1,
      name: "Teknoloji A.Ş.",
      expertise: "Yazılım Geliştirme",
      logo: "🖥️"
    },
    {
      id: 2,
      name: "İnşaat Yapı Ltd.",
      expertise: "İnşaat ve Mimarlık",
      logo: "🏗️"
    },
    {
      id: 3,
      name: "Gıda Sanayi A.Ş.",
      expertise: "Gıda Üretimi",
      logo: "🍽️"
    },
    {
      id: 4,
      name: "Tekstil Fabrikası",
      expertise: "Tekstil ve Konfeksiyon",
      logo: "👔"
    },
    {
      id: 5,
      name: "Otomotiv Parça Ltd.",
      expertise: "Otomotiv Yan Sanayi",
      logo: "🚗"
    },
    {
      id: 6,
      name: "Enerji Sistemleri A.Ş.",
      expertise: "Yenilenebilir Enerji",
      logo: "⚡"
    },
    {
      id: 7,
      name: "Lojistik Taşımacılık",
      expertise: "Lojistik ve Nakliye",
      logo: "🚚"
    },
    {
      id: 8,
      name: "Danışmanlık Hizmetleri",
      expertise: "İş Danışmanlığı",
      logo: "💼"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        Şirketler ve Tanıtım
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Federasyonumuza üye derneklerin temsil ettiği başarılı şirketler
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {companies.map((company) => (
          <div 
            key={company.id}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
          >
            <div className="flex flex-col items-center text-center">
              <div className="text-6xl mb-4 bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center">
                {company.logo}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {company.name}
              </h3>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Uzmanlık Alanı:</span>
              </p>
              <p className="text-blue-700 font-medium">
                {company.expertise}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
