# KONKARDER - Konya Karaman Dernekleri Federasyonu

Modern, responsive web sitesi - React, Vite ve Tailwind CSS ile geliştirilmiştir.

## Özellikler

- ⚡ Vite ile hızlı geliştirme ortamı
- ⚛️ React 19 ile modern component yapısı
- 🎨 Tailwind CSS ile responsive tasarım
- 🧭 React Router ile çok sayfalı navigasyon
- 📱 Mobil uyumlu tasarım

## Sayfalar

1. **Ana Sayfa** - Hero section ve hoş geldiniz mesajı
2. **Konya & Karaman Tanıtımı** - İllerin tarihi ve kültürel bilgileri
3. **Mevlana Tanıtımı** - Mevlana'nın hayatı, felsefesi ve mirası
4. **Şirketler** - Üye derneklerin temsil ettiği şirketler (grid layout)
5. **Etkinlikler** - Yaklaşan kültürel ve sosyal etkinlikler (card layout)
6. **Hakkımızda** - Federasyon hakkında bilgi ve yönetim kurulu üyeleri

## Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build
npm run build

# Build önizleme
npm run preview
```

## Teknolojiler

- React 19.2.0
- Vite 7.2.4
- React Router DOM 7.x
- Tailwind CSS 3.x
- ESLint

## Geliştirme

Proje `http://localhost:5173` adresinde çalışacaktır.

## Proje Yapısı

```
src/
├── components/
│   ├── Layout.jsx      # Ana layout wrapper
│   ├── Navbar.jsx      # Navigasyon menüsü
│   └── Footer.jsx      # Footer bileşeni
├── pages/
│   ├── Home.jsx        # Ana sayfa
│   ├── KonyaKaraman.jsx
│   ├── Mevlana.jsx
│   ├── Sirketler.jsx
│   ├── Etkinlikler.jsx
│   └── Hakkimizda.jsx
├── App.jsx             # Router yapılandırması
└── main.jsx            # Uygulama giriş noktası
```
