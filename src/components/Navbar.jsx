import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo.jpg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-gradient-to-r from-green-950/90 to-green-900/90 backdrop-blur-sm text-white shadow-lg relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition" onClick={closeMenu}>
            <img src={logo} alt="KONKARDER Logo" className="h-14 w-14 rounded-full object-cover" />
            <span className="text-xl font-bold">KONKARDER</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="hover:text-green-300 transition font-medium">
              Anasayfa
            </Link>
            <Link to="/konya-karaman" className="hover:text-green-300 transition font-medium">
              Konya & Karaman
            </Link>
            <Link to="/mevlana" className="hover:text-green-300 transition font-medium">
              Mevlana
            </Link>
            <Link to="/karamanoglu" className="hover:text-green-300 transition font-medium">
              Karamanoğlu Mehmet Bey
            </Link>
            <Link to="/sirketler" className="hover:text-green-300 transition font-medium">
              Şirketler
            </Link>
            <Link to="/etkinlikler" className="hover:text-green-300 transition font-medium">
              Etkinlikler
            </Link>
            <div className="relative group">
              <button className="hover:text-green-300 transition font-medium flex items-center gap-1">
                Haber
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left z-50">
                <Link to="/haber-konya" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700">Konya'dan Haberler</Link>
                <Link to="/haber-karaman" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700">Karaman'dan Haberler</Link>
              </div>
            </div>
            <Link to="/hakkimizda" className="hover:text-green-300 transition font-medium">
              Hakkımızda
            </Link>
          </div>

          {/* Burger Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 space-y-3">
            <Link to="/" onClick={closeMenu} className="block py-2 px-4 hover:bg-green-800/50 rounded transition font-medium">
              Anasayfa
            </Link>
            <Link to="/konya-karaman" onClick={closeMenu} className="block py-2 px-4 hover:bg-green-800/50 rounded transition font-medium">
              Konya & Karaman
            </Link>
            <Link to="/mevlana" onClick={closeMenu} className="block py-2 px-4 hover:bg-green-800/50 rounded transition font-medium">
              Mevlana
            </Link>
            <Link to="/karamanoglu" onClick={closeMenu} className="block py-2 px-4 hover:bg-green-800/50 rounded transition font-medium">
              Karamanoğlu Mehmet Bey
            </Link>
            <Link to="/sirketler" onClick={closeMenu} className="block py-2 px-4 hover:bg-green-800/50 rounded transition font-medium">
              Şirketler
            </Link>
            <Link to="/etkinlikler" onClick={closeMenu} className="block py-2 px-4 hover:bg-green-800/50 rounded transition font-medium">
              Etkinlikler
            </Link>
            <div className="space-y-1">
              <div className="px-4 py-2 text-green-200 text-sm font-semibold uppercase tracking-wider">Haberler</div>
              <Link to="/haber-konya" onClick={closeMenu} className="block py-2 pl-8 pr-4 hover:bg-green-800/50 rounded transition font-medium text-sm">Konya'dan Haberler</Link>
              <Link to="/haber-karaman" onClick={closeMenu} className="block py-2 pl-8 pr-4 hover:bg-green-800/50 rounded transition font-medium text-sm">Karaman'dan Haberler</Link>
            </div>
            <Link to="/hakkimizda" onClick={closeMenu} className="block py-2 px-4 hover:bg-green-800/50 rounded transition font-medium">
              Hakkımızda
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
