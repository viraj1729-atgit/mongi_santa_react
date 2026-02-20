# mongiSanta – React + Vite SPA

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server  ← use this instead of npm start
npm run dev
```

Open **http://localhost:5173** in your browser.

---

## Commands

| Command         | Description                  |
|-----------------|------------------------------|
| `npm run dev`   | Start dev server (hot reload)|
| `npm run build` | Build for production         |
| `npm run preview` | Preview production build   |

---

## 📁 Project Structure

```
mongisanta/
├── index.html                  ← Vite entry HTML (root level)
├── vite.config.js              ← Vite config
├── package.json
└── src/
    ├── main.jsx                ← ReactDOM entry point
    ├── App.jsx                 ← Root component
    ├── index.css               ← Global reset + animations
    ├── constants/
    │   ├── data.js             ← All static data
    │   └── theme.js            ← Colour tokens
    └── components/
        ├── SafeImg.jsx         ← img with error fallback
        ├── Header.jsx          ← Sticky nav + dark toggle + hamburger
        ├── Hero.jsx            ← Auto image slider + promo bubble
        ├── InfoCards.jsx       ← Cards + modal popup
        ├── ProductGrid.jsx     ← Reusable product circles (used ×2)
        ├── Countdown.jsx       ← Live sale countdown
        ├── PromoBanner.jsx     ← Discount banner
        ├── Testimonials.jsx    ← Review cards
        ├── Newsletter.jsx      ← Email form + validation
        ├── Speciality.jsx      ← Show/hide stats toggle
        ├── Footer.jsx          ← Links + social buttons
        └── ScrollToTop.jsx     ← Fixed ↑ button
```

---

## ✅ React Features

- **10 components** — all separated into individual files  
- **Props** — `ProductGrid` and `Testimonials` receive data via props  
- **6 state features** — slider, dark mode, modal, form validation, show/hide, active nav  
- **localStorage** — theme persists across sessions  
- **Image fallback** — broken images auto-replaced with placeholder  

## ⚠️ Why Vite instead of Create React App?

`react-scripts` (Create React App) is deprecated and has known install issues on Windows.  
Vite is the modern standard — faster, lighter, no config needed.  
The only difference: use `npm run dev` instead of `npm start`.
