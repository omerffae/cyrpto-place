# Crypto Place

Crypto Place is a comprehensive crypto data platform developed to analyze cryptocurrency markets. It provides real-time price data, volume information, market cap statistics, and historical performance metrics via the CoinGecko API.

![Project Preview](/public/crypto_place.gif)

## 📜 Overview
- **Real-time data streaming**: Updates every second for 5000+ cryptocurrencies
- **Modular architecture**: Easily extensible with independent components
- **Adaptive design**: Mobile-first approach and cross-browser compatibility
- **Data visualization**: Interactive candlestick charts and dynamic data tables
- **Smart API management**: Automatic request throttling and caching
- **Global state management**: Centralized data storage with Context API

## 📂 Detailed File Structure
```
├── src/
│   ├── components/
│   │   ├── charts/          # Customizable charts built with Recharts
│   │   ├── ui/              # UI kit components with Storybook support
│   │   │   ├── CustomTable  # Smart table with sorting and pagination
│   │   │   ├── DataCard     # Responsive data cards
│   │   │   └── ThemeToggle  # Dark/Light theme switcher
│   │   └── CryptoList/      # Optimized main list with virtualized rendering
│   │
│   ├── pages/
│   │   ├── HomePage.js      # Main dashboard and global stats
│   │   └── CoinDetail.js    # Detailed analysis page for each coin
│   │
│   ├── utils/
│   │   ├── api.js           # HTTP client powered by Axios interceptors
│   │   ├── formatters.js    # Data formatting helpers
│   │   └── constants.js     # Project-wide constants
│   │
│   ├── assets/
│   │   ├── images/          # SVG icon sets and optimized assets
│   │   └── styles/          # CSS-in-JS global theme configurations
│   │
│   ├── routes/              # Dynamic route configuration
│   └── context/             # State management layer (Redux-like)
│
├── public/                  # PWA manifest and service worker configs
└── package.json             # NPM workspace and script optimizations
```

## 🛠️ Installation Guide
1. Clone the repository and set up the project:
```bash
git clone https://github.com/omerffae/cyrpto-place.git
cd cyrpto-place
```
2. Install dependencies:
```bash
npm ci --legacy-peer-deps # Full dependency tree install
# OR
yarn install --frozen-lockfile # Lockfile-based install
```

## 🔧 Development Environment
```bash
# Custom development environment
npm run dev -- --host # Live server with hot-reload

# Production optimizations
npm run build -- --profile # Generate bundle analysis report

# Testing environment
npm test -- --coverage # Test coverage report
npm run test:watch     # Interactive test mode
```

## 🧩 Component Architecture
- **`CryptoTable`**:
  - Server-side pagination support
  - Multi-column sorting
  - Custom renderer support
- **`PriceChart`**:
  - Zoomable timeline
  - Technical indicator support (RSI, MACD)
  - Crosshair data display
- **`MarketStats`**:
  - Comparative analysis panel
  - Historical snapshot comparison
- **`SearchFilter`**:
  - Fuzzy search algorithm
  - Multi-criteria filtering
  - Keyboard navigation support

## 🌐 API Integration Details
Advanced configuration in `src/utils/api.js`:
- **Axios Instance**:
  - BaseURL: `https://api.coingecko.com/api/v3`
  - Default headers: `Content-Type: application/json`
  - Timeout: 15s fallback
- **Interceptors**:
  - Automatic retry for 429 errors
  - Request throttling (5 requests/sec limit)
  - Automatic normalization of response data
- **Cache Layer**:
  - LRU cache strategy
  - 5-minute stale-while-revalidate

## 🛡️ Security Measures
- **HTTPS Enforcement**:
  - Mixed content blocker
  - HSTS header configuration
- **XSS Protection**:
  - Data sanitization with DOMPurify
  - CSP header policies
- **Rate Limiting**:
  - Debounce mechanism for API requests
  - IP-based request tracking

## 📊 Data Processing Pipeline
1. **Data Fetching**:
   - Real-time updates via WebSocket
   - REST API polling as fallback
2. **Normalization**:
   - Data type validation
   - Fiat currency conversion
3. **State Management**:
   - Data integrity with Immutable.js
   - Optimistic updates
4. **Render Optimization**:
   - Memoization techniques
   - Virtualized list rendering
5. **User Interaction**:
   - Event debouncing
   - Analytics integration

## 🚨 Troubleshooting Guide
| Issue                      | Solution Steps                                                                |
|----------------------------|-------------------------------------------------------------------------------|
| **429 Error**              | Exponential backoff algorithm is triggered                                    |
| **Date Formatting**        | Localized formatting with Luxon library                                       |
| **Responsive Breakpoints** | Adaptive layout with CSS Grid + container queries                             |
| **Chart Lag**              | Data processing with Web Worker + request deduplication                       |
| **API Key Rotation**       | JWT-based auth system + key rotation middleware                               |
| **Data Inconsistency**     | SWR (stale-while-revalidate) pattern + background sync                        |
