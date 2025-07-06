/// <reference types="vite/client" />
/// <reference types="checkout-asnmt-app" />

import type { JSX as StencilJSX } from "checkout-asnmt-app";

declare namespace JSX {
  interface IntrinsicElements extends StencilJSX.IntrinsicElements {}
}
