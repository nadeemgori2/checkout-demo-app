/**
 * ShippingPage
 * Integrates the <shipping-companies> web component into the React app.
 * Handles event binding for user interactions and updates Redux store accordingly.
 */

import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectShipping } from "../store/features/shippingSlice";
import Layout from "../components/Layout";
import type { RootState } from "../store/store";

export default function ShippingPage() {
  const ref = useRef<any>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get cart total from Redux store
  const total = useSelector((state: RootState) => state.cart.cartTotal);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    // Event: Shipping option selected → dispatch to store
    const handleSelect = (e: CustomEvent) => dispatch(selectShipping(e.detail));

    // Event: Proceed to confirmation
    const handleProceed = () => navigate("/confirmed");

    // Event: Navigate back to cart
    const handleBack = () => navigate("/");

    // Attach web component event listeners
    el.addEventListener(
      "shippingSelected",
      handleSelect as unknown as EventListener
    );
    el.addEventListener("proceedToConfirmed", handleProceed);
    el.addEventListener("backToCart", handleBack);

    // Cleanup on unmount
    return () => {
      el.removeEventListener(
        "shippingSelected",
        handleSelect as unknown as EventListener
      );
      el.removeEventListener("proceedToConfirmed", handleProceed);
      el.removeEventListener("backToCart", handleBack);
    };
  }, [dispatch, navigate]);

  return (
    <Layout>
      <shipping-companies
        ref={ref}
        cart-total={total}
        class="w-full"
      ></shipping-companies>
    </Layout>
  );
}
