import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import KonyaKaraman from './pages/KonyaKaraman';
import Mevlana from './pages/Mevlana';
import Karamanoglu from './pages/KaramanogluMehmetBey';
import Sirketler from './pages/Sirketler';
import Etkinlikler from './pages/Etkinlikler';
import Haber from './pages/Haber';
import Hakkimizda from './pages/Hakkimizda';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="konya-karaman" element={<KonyaKaraman />} />
          <Route path="mevlana" element={<Mevlana />} />
          <Route path='karamanoglu' element={<Karamanoglu/>}/>
          <Route path="sirketler" element={<Sirketler />} />
          <Route path="etkinlikler" element={<Etkinlikler />} />
          <Route path="haber-konya" element={<Haber title="Konya'dan Haberler" url="https://www.konya.bel.tr/haber" fallbackText="orijinal siteyi" />} />
          <Route path="haber-karaman" element={<Haber title="Karaman'dan Haberler" url="https://www.karaman.bel.tr/Menu/31/Haberler.aspx" fallbackText="orijinal siteyi" />} />
          <Route path="hakkimizda" element={<Hakkimizda />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
