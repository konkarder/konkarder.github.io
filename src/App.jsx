import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import KonyaKaraman from './pages/KonyaKaraman';
import Mevlana from './pages/Mevlana';
import Sirketler from './pages/Sirketler';
import Etkinlikler from './pages/Etkinlikler';
import Hakkimizda from './pages/Hakkimizda';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="konya-karaman" element={<KonyaKaraman />} />
          <Route path="mevlana" element={<Mevlana />} />
          <Route path="sirketler" element={<Sirketler />} />
          <Route path="etkinlikler" element={<Etkinlikler />} />
          <Route path="hakkimizda" element={<Hakkimizda />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
