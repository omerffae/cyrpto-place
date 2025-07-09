# Crypto Place

Proje kripto para piyasalarını analiz etmek için geliştirilmiş, CoinGecko API'si üzerinden anlık fiyat verileri, hacim bilgileri, piyasa değeri istatistikleri ve tarihsel performans metriklerini sunan kapsamlı bir kripto veri platformudur.


![Proje Görseli](/public/crypto_place.gif)  


## 📜 Genel Bakış
- **Gerçek zamanlı veri akışı**: 5000+ kripto para birimi için saniyelik güncellemeler
- **Modüler mimari**: Bağımsız çalışan component yapısıyla kolay genişletilebilirlik
- **Adaptif tasarım**: Mobil-first yaklaşım ve cross-browser uyumluluğu
- **Veri görselleştirme**: Interactive candlestick chart'lar ve dinamik veri tabloları
- **Akıllı API yönetimi**: Otomatik request throttling ve cache mekanizması
- **Global state yönetimi**: Context API ile merkezi veri depolama

## 📂 Detaylı Dosya Dizini
```
├── src/
│   ├── components/
│   │   ├── charts/          # Recharts kütüphanesi ile oluşturulan özelleştirilebilir grafikler
│   │   ├── ui/              # Storybook desteği bulunan UI kit bileşenleri
│   │   │   ├── CustomTable  # Sort ve pagination özellikli akıllı tablo
│   │   │   ├── DataCard     # Responsive veri kartları
│   │   │   └── ThemeToggle  # Karanlık/Açık tema geçiş mekanizması
│   │   └── CryptoList/      # Virtualized list ile optimize edilmiş ana liste
│   │
│   ├── pages/
│   │   ├── HomePage.js      # Ana dashboard ve global istatistikler
│   │   └── CoinDetail.js    # Coin'e özel detaylı analiz sayfası
│   │
│   ├── utils/
│   │   ├── api.js           # Axios interceptors ile güçlendirilmiş HTTP client
│   │   ├── formatters.js    # Veri formatlama helper'ları
│   │   └── constants.js     # Proje geneli sabitler
│   │
│   ├── assets/
│   │   ├── images/          # SVG ikon setleri ve optimize edilmiş asset'ler
│   │   └── styles/          # CSS-in-JS global theme konfigürasyonları
│   │
│   ├── routes/              # Dinamik route yapılandırması
│   └── context/             # Redux benzeri state yönetim katmanı
│
├── public/                  # PWA manifest ve service worker konfigürasyonları
└── package.json             # NPM workspace ve script optimizasyonları
```

## 🛠️ Detaylı Kurulum Rehberi
1. Repoyu klonlayın ve gerekli ayarları yapın:
```bash
git clone https://github.com/omerffae/cyrpto-place.git
cd cyrpto-place
```
2. Bağımlılıkları yükleyin:
```bash
npm ci --legacy-peer-deps # Tam dependency tree ile kurulum
# VEYA
yarn install --frozen-lockfile # Lockfile tabanlı kurulum
```

## 🔧 Gelişmiş Geliştirme Ortamı
```bash
# Özelleştirilmiş development ortamı
npm run dev -- --host # Hot-reload ile canlı sunucu

# Production optimizasyonları
npm run build -- --profile # Bundle analiz raporu oluşturma

# Test ortamı
npm test -- --coverage # Test coverage raporu
npm run test:watch     # Interactive test modu
```

## 🧩 Component Mimarisi
- **`CryptoTable`**: 
  - Server-side pagination desteği
  - Multi-column sorting
  - Custom renderer desteği
- **`PriceChart`**: 
  - Zoomable timeline
  - Technical indicator desteği (RSI, MACD)
  - Crosshair veri gösterimi
- **`MarketStats`**: 
  - Comparative analysis paneli
  - Historical snapshot karşılaştırma
- **`SearchFilter`**: 
  - Fuzzy search algoritması
  - Multi-criteria filtering
  - Keyboard navigation desteği

## 🌐 API Entegrasyon Detayları
`src/utils/api.js` içerisinde bulunan gelişmiş konfigürasyon:
- **Axios Instance**: 
  - BaseURL: `https://api.coingecko.com/api/v3`
  - Default headers: `Content-Type: application/json`
  - Timeout: 15s fallback mekanizması
- **Interceptors**:
  - 429 hataları için otomatik retry mekanizması
  - Request throttling (5 request/sn limit)
  - Response verilerinin otomatik normalizasyonu
- **Cache Layer**: 
  - LRU cache stratejisi
  - 5 dakikalık stale-while-revalidate

## 🛡️ Güvenlik Önlemleri
- **HTTPS Enforcement**: 
  - Mixed content blocker
  - HSTS header konfigürasyonu
- **XSS Protection**: 
  - DOMPurify ile veri sanitizasyonu
  - CSP header politikaları
- **Rate Limiting**: 
  - API isteklerinde debounce mekanizması
  - IP-based request tracking

## 📊 Veri İşleme Pipeline'ı
1. **Veri Çekme**: 
   - WebSocket ile real-time updates
   - Fallback olarak REST API polling
2. **Normalizasyon**: 
   - Veri tipi validasyonu
   - Fiat para birimi conversion
3. **State Management**: 
   - Immutable.js ile veri bütünlüğü
   - Optimistic updates
4. **Render Optimizasyonu**: 
   - Memoization teknikleri
   - Virtualized list rendering
5. **Kullanıcı Etkileşimi**: 
   - Event debouncing
   - Analytics entegrasyonu

## 🚨 Sorun Çözme Rehberi
| Sorun                      | Çözüm Adımları                                                                 |
|----------------------------|--------------------------------------------------------------------------------|
| **429 Error**              | Exponential backoff algoritması devreye alınır                                |
| **Tarih Formatı**          | Luxon kütüphanesi ile localized formatting                                    |
| **Responsive Breakpoints** | CSS Grid ile adaptive layout + container queries                              |
| **Grafik Gecikmesi**       | Web Worker ile veri işleme + request deduplication                            |
| **API Key Rotasyonu**      | JWT tabanlı auth sistem + key rotation middleware                             |
| **Veri Tutarsızlığı**      | SWR (stale-while-revalidate) pattern + background sync                        |
