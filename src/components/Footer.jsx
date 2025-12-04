export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-950/90 to-green-900/90 backdrop-blur-sm text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-3">KONKARDER</h3>
            <p className="text-green-300 text-sm">
              Konyalılar ve Karamanlılar Dayanışma ve Yardımlaşma Derneği
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">İletişim</h3>
            <p className="text-green-300 text-sm">
              E-posta: info@konkarder.org<br />
              Tel: +90 XXX XXX XX XX
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">Adres</h3>
            <p className="text-green-300 text-sm">
              Emirbeyazıt Mah. Çakırlar Sok No:3/B<br />
              Menteşe, Muğla, Türkiye
            </p>
          </div>
        </div>
        <div className="border-t border-green-800 mt-6 pt-6 text-center text-green-300 text-sm">
           © {new Date().getFullYear()} Virtus Arge Yazılım A.Ş. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
