/**
 * ConfirmedPage
 * Renders the <payment-confirmed> Stencil component and handles return-to-store navigation.
 */

import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

export default function ConfirmedPage() {
  const ref = useRef<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Listener for event emitted from <payment-confirmed> component
    const handleReturn = () => {
      navigate("/"); // Navigate back to the cart/store page
    };

    el.addEventListener("returnToStore", handleReturn);
    return () => {
      el.removeEventListener("returnToStore", handleReturn);
    };
  }, [navigate]);

  return (
    <Layout>
      <payment-confirmed class="w-full" ref={ref}></payment-confirmed>
    </Layout>
  );
}
