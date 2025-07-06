# Web Component Challenge – Nadeem Gori

This repository showcasing a custom Web Component and a demo integration in a React application.

---

## ⚙️ Requirements

- Node.js `v18.17.0+`
- npm `v8+`
- Compatible modern browser (Chrome, Firefox, Edge, Safari)

---

## 🚀 Quick Setup Instructions

To clone, build, and run both apps locally:

```bash
git clone https://github.com/nadeemgori2/checkout-demo-app.git
```

---

## 🧩 Project Structure

```
.
├── stencil-component/    # StencilJS-based custom web component
├── react-demo-app/       # React + Vite demo app that uses the web component
├── .gitignore            # Common ignores for both projects
└── README.md             # This file
```

> ℹ️ Each project (`stencil-component/` and `react-demo-app/`) contains its **own README.md** with more detailed instructions, architecture explanation, and technical decisions.

---

## 📦 stencil-component/

- Built with **StencilJS**
- Contains a reusable `<cart-items>` Web Component
- Includes fallback logic for API failure
- Optimized and structured for reusability

### 🔧 To Run:
```bash
cd stencil-component
npm install
npm start
```

This will start the Stencil dev server (usually on `http://localhost:3333`).

---

## ⚛️ react-demo-app/

- Built with **React** + **Vite**
- Demonstrates integration of the Web Component
- Global state managed via Redux Toolkit
- API fallback and cart rendering logic in place

### 🔧 To Run:
```bash
cd react-demo-app
npm install
npm run dev
```

Runs at: [http://localhost:5173](http://localhost:5173)

---

## ✅ Notes

- Each project is self-contained and runs independently.
- Justifications and technical decisions are commented within the respective code.

---

Thanks for reviewing!

— Nadeem Gori
