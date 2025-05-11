/**
 * Common structure for monetary values used across the app.
 */
interface PriceWithCurrency {
  currency: string;
  amount: number;
}

/**
 * Represents a single item in the cart.
 */
interface CartItem {
  id: string;
  label: string;
  qty: number;
  price: PriceWithCurrency;
  thumbnail: string;
}

/**
 * Represents a shipping method option.
 */
interface ShippingOption {
  id: string;
  name: string;
  label: string;
  logo: string;
  fees: PriceWithCurrency;
}

/**
 * Represents a coupon discount applied to the cart.
 */
interface Coupons {
  id: string;
  name: string; // lowercase coupon code
  label: string; // display label (uppercase)
  discount: {
    type: 'percentage' | 'fixed'; // Enforced type values
    amount: string;
  };
}
