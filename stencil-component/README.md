[![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?style=flat-square&logo=Stencil&logoColor=white&colorA=16161d)](https://stenciljs.com)

# 🛒 Salla Checkout Web Components

> A reusable, framework-agnostic **Web Component Library** built with **StencilJS** and **TailwindCSS** for the Salla coding challenge.

This project showcases reusable cart-related UI components that integrate smoothly into various frontend frameworks like **React**, **Vue**, or **vanilla JS**.

---

## ✨ Features

- ⚙️ **Built with StencilJS** — Web-native and framework-neutral
- 🎨 **TailwindCSS** — Utility-first styling with theming support
- 🔁 **API Fallback Logic** — Handles live and offline data gracefully
- ⚛️ **Framework Agnostic** — Works across React, Vue, Angular
- 🧠 **Stateful Components** — Leverages props, state, and custom events
- 📦 **Modular & Typed** — Components are reusable and written in TypeScript
- 🧪 **Test Ready** — Configured for Jest unit testing

---

## 📁 Project Structure

```
stencil-component/
├── components/
│   ├── cart-items/
│   ├── shipping-companies/
│   ├── payment-confirmed/
│   ├── cart-coupon/
│   ├── store-header/
│   └── cart-items-skeleton/
│
├── constants/             # Fallback mock data
├── services/              # fetchWithFallback and API utils
├── utils/                 # Formatters and helpers
├── global/                # Tailwind config and CSS variables
└── index.html             # Test harness for components
```

---

## 🚀 Getting Started

Clone & install dependencies:

```bash
git clone https://github.com/SallaChallenges/WebComponent-Challenge-nadeemgori2-5685.git
cd stencil-component
npm install
npm start
```

---

## 📦 Build & Use

```bash
npm run build
```
---

Usage in React App:

Add dependencies: package.json

```
"salla-asnmt-app": "file:../salla-asnmt-app"

```
Stencil components are auto-registered using: main.tsx

```
import { defineCustomElements } from "../../stencil-component/loader";
// Register Stencil web components globally
defineCustomElements();
```
Add COnfiguration: vite.config.ts

```
import { defineCustomElements } from "../../stencil-component/loader";

// Register Stencil web components globally
".", // always allow project root
path.resolve(__dirname, "../stencil-component/dist"),
path.resolve(__dirname, "../stencil-component")
```

Usage in vanilla HTML:

```html
<script type="module" src="/build/salla-asnmt-app.esm.js"></script>
<cart-items></cart-items>
```

---

## 🧪 Run Tests

Run all tests:

```bash
npm test
```

Run with coverage report:

```bash
npm test -- --coverage
```

Optional watch mode (if configured):

```bash
npm run test:watch
```

---

## 🎨 Styling System

- Built with **TailwindCSS**
- Uses `variables.css` for theme control (colors, spacing, radius)
- Apply styles using:

```css
color: var(--primary-color);
```

```ts
bg-[var(--background-light)] text-[var(--text-dark)]
```

---

## 🔁 Fallback Data Handling

Fallback logic is used when API calls fail:

```ts
await fetchWithFallback(API_PATH.ITEMS, FALLBACK_CART_ITEMS);
```

---

## 💡 Concepts Showcased

- Event-driven architecture
- Component state + prop management
- Fallback resilience
- Responsive layout (mobile-first)
- Currency formatting with `Intl.NumberFormat`
- Shimmer loading UI
- Custom Tailwind tokens

---

## 📦 Output Artifacts

- `dist/`: For bundler integrations (Webpack/Vite/etc.)
- `dist-custom-elements/`: For no-bundler usage
- `loader/`: Auto registration support

---

## 👀 Live Preview

Copy `www/index.html` and open in browser after running `npm start`.

---

## 📄 License

MIT © 2025 **Nadeem Gori**
