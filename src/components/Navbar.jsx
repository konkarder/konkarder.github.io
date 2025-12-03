import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-green-950/90 to-green-900/90 backdrop-blur-sm text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition">
            <img src={logo} alt="KONKARDER Logo" className="h-14 w-14 rounded-full object-cover" />
            <span className="text-xl font-bold">KONKARDER</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-green-300 transition font-medium">
              Anasayfa
            </Link>
            <Link to="/konya-karaman" className="hover:text-green-300 transition font-medium">
              Konya & Karaman
            </Link>
            <Link to="/mevlana" className="hover:text-green-300 transition font-medium">
              Mevlana
            </Link>
            <Link to="/sirketler" className="hover:text-green-300 transition font-medium">
              Şirketler
            </Link>
            <Link to="/etkinlikler" className="hover:text-green-300 transition font-medium">
              Etkinlikler
            </Link>
            <Link to="/hakkimizda" className="hover:text-green-300 transition font-medium">
              Hakkımızda
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
