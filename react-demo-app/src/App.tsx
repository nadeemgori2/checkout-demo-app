// App.tsx
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Lazy-loaded page components
const CartPage = lazy(() => import("./pages/CartPage"));
const ShippingPage = lazy(() => import("./pages/ShippingPage"));
const ConfirmedPage = lazy(() => import("./pages/ConfirmedPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

/**
 * Root application component that defines client-side routing.
 * Each route loads its corresponding page component.
 */
export default function App() {
  return (
    <Router>
      <Suspense fallback={<div className="text-center p-6">Loading...</div>}>
        <Routes>
          <Route path="/" element={<CartPage />} />
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/confirmed" element={<ConfirmedPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
