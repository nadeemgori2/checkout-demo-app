// src/jsx.d.ts
import React from "react";

// Extend React's JSX namespace to include custom elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "cart-items": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      "shipping-companies": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      "payment-confirmed": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}
