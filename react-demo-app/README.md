# Checkout App (React + StencilJS)

This repository contains the **React frontend integration** for a checkout workflow built using **StencilJS web components**. It demonstrates a clean, modular, and modern frontend setup that combines React (with Redux Toolkit) and reusable Web Components (built with Stencil).

---

## 📦 Tech Stack

- **React** (19+) + **TypeScript**
- **Vite** – lightning-fast dev server and bundler
- **Redux Toolkit** – global state management
- **StencilJS** – Web Components used across the UI
- **TailwindCSS** – utility-first, responsive styling

---

## 🚀 Getting Started

### 1. Clone and install dependencies

```bash
git clone https://github.com/nadeemgori2/checkout-demo-app.git
cd react-demo-app
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

App runs at: [http://localhost:5173](http://localhost:5173)

Stencil Web Components are auto-registered using `defineCustomElements()`.

---

## 🧱 Build for Production

```bash
npm run build
```

Vite will compile and output static assets to the `dist/` folder.

---

## 🧪 Test Linked Web Components (Stencil)

If testing alongside the local Stencil component repo:

```bash
cd ../checkout-asnmt-app
npm install
npm run test
npm run start
```

This will launch the Web Component dev server so React app can render live components.

---

## 🧠 Architecture Overview

```
src/
├── components/          # Shared UI & layout components
├── pages/               # Route views (Cart, Shipping, Confirmed)
├── store/               # Redux Toolkit slices (e.g., cartSlice.ts)
├── App.tsx              # Main router configuration
├── main.tsx             # Entrypoint with Web Component setup
└── index.css            # Tailwind & global CSS
```

Stencil events (e.g. `proceedToShipping`) are handled via `ref.current.addEventListener(...)`.

---

## 🤝 Integration Notes

```ts
import { defineCustomElements } from 'checkout-asnmt-app/loader';
defineCustomElements(); // Initializes the Stencil components
```

This ensures Web Components are defined in the browser at runtime.

---

## 📝 Highlights & Decisions

### Redux Toolkit

Although Redux Toolkit is not necessary for an app of this small size, it has been intentionally used to demonstrate:
- Scalable state management practices
- Familiarity with modern Redux patterns

It also serves as a placeholder for potential cart or shipping state flows in a real-world app.

### Unit Testing

No unit test cases are included in this React app because:
- The application mainly consumes pre-tested Stencil Web Components
- There is minimal internal logic in React itself
- Unit tests are thoroughly implemented in the `stencil-component/` project

---

## 📄 License

MIT © 2025 **Nadeem Gori**

---

ℹ️ For more on Web Component internals, refer to the `stencil-component/README.md` file.
