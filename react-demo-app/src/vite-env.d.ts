/// <reference types="vite/client" />
/// <reference types="salla-asnmt-app" />

import type { JSX as StencilJSX } from "salla-asnmt-app";

declare namespace JSX {
  interface IntrinsicElements extends StencilJSX.IntrinsicElements {}
}
