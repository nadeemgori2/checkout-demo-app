/**
 * Entry point for the Stencil component library.
 *
 * ⚠️ Do NOT export components directly here.
 * This file is used to expose utilities, types, or constants that support the components.
 *
 * To consume components, use the custom elements directly (e.g., <cart-items />),
 * and ensure your app includes the compiled bundle or loader script.
 */

export { formatCurrency } from './utils/utils';
export type * from './components.d.ts';
