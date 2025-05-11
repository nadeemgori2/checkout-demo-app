/**
 * CartPage
 * Hosts the <cart-items> Stencil component, listens to the "proceedToShipping" event,
 * dispatches selected cart items to Redux store, and navigates to the shipping page.
 */

import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setItems } from "../store/features/cartSlice";
import Layout from "../components/Layout";

export default function CartPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartRef = useRef<any>(null);

  useEffect(() => {
    const el = cartRef.current;
    if (!el) return;

    // Listen for event from Stencil component to proceed
    const handleProceed = (e: CustomEvent) => {
      dispatch(setItems(e.detail)); // Store selected cart items
      navigate("/shipping"); // Navigate to ShippingPage
    };

    el.addEventListener("proceedToShipping", handleProceed);
    return () => {
      el.removeEventListener("proceedToShipping", handleProceed);
    };
  }, [dispatch, navigate]);

  return (
    <Layout>
      <cart-items ref={cartRef} class="w-full"></cart-items>
    </Layout>
  );
}
