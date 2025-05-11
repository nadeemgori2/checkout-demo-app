import { Component, h, State, Event, EventEmitter } from '@stencil/core';
import { fetchWithFallback } from '../../services/dataService';
import { FALLBACK_CART_ITEMS, FALLBACK_COUPONS } from '../../constants/fallbackData';
import { API_PATH } from '../../constants/API_URL';
import { formatCurrency } from '../../utils/utils';

@Component({
  tag: 'cart-items',
  styleUrl: 'cart-items.css',
  shadow: true,
})
export class CartItems {
  // State variables
  @State() items: CartItem[] = [];
  @State() loading = true;
  @State() error = '';
  @State() coupon = '';
  @State() appliedCoupon = '';
  @State() discountAmount = 0;

  /**
   * Emits final total and proceeds to shipping step
   */
  @Event() proceedToShipping: EventEmitter<number>;

  componentWillLoad() {
    this.fetchItems();
  }

  /**
   * Fetch cart items from backend or fallback if it fails
   */
  async fetchItems() {
    this.loading = true;
    this.items = await fetchWithFallback(API_PATH.ITEMS, FALLBACK_CART_ITEMS);
    this.loading = false;
  }

  /**
   * Applies a discount coupon by validating it against available coupons
   */
  async applyCoupon() {
    const trimmed = this.coupon.trim().toLowerCase();
    if (!trimmed) {
      alert('Invalid coupon');
      this.discountAmount = 0;
      return;
    }

    const coupons = await fetchWithFallback(API_PATH.COUPONS, FALLBACK_COUPONS);
    const selectedCoupon = coupons.find((c: Coupons) => c.name === trimmed);

    if (!selectedCoupon) {
      alert(`The coupon code "${trimmed}" is not valid. Please check and try again.`);
      this.discountAmount = 0;
      return;
    }

    const discountValue = parseFloat(selectedCoupon.discount.amount);
    if (selectedCoupon.discount.type === 'percentage') {
      this.discountAmount = (this.totalAmount * discountValue) / 100;
    } else {
      this.discountAmount = discountValue;
    }

    this.appliedCoupon = selectedCoupon.label;
  }

  /**
   * Submits the final cart value to shipping component
   */
  handleSubmit() {
    this.proceedToShipping.emit(parseFloat(this.discountedTotal.toFixed(2)));
  }

  /**
   * Clears applied coupon
   */
  removeCoupon() {
    this.appliedCoupon = '';
    this.coupon = '';
    this.discountAmount = 0;
  }

  /**
   * Calculates total cart amount before discount
   */
  get totalAmount() {
    return this.items.reduce((sum, item) => sum + item.price.amount, 0);
  }

  /**
   * Calculates final amount after applying coupon
   */
  get discountedTotal() {
    return this.totalAmount - this.discountAmount;
  }

  render() {
    if (this.error) {
      return <div class="text-red-500 p-4">{this.error}</div>;
    }

    return this.loading ? (
      <cart-items-skeleton />
    ) : (
      <div class="checkout-container justify-between h-full">
        <store-header current-step="checkout" />

        {/* Title */}
        <div class="flex items-center gap-2 mt-3 mb-3">
          <h2 class="text-base font-semibold text-[var(--primary-color)] m-0">Cart</h2>
          <div class="flex-grow h-[2px] bg-[var(--primary-color)] rounded-full"></div>
        </div>

        {/* Cart Items List */}
        <div class="flex-grow">
          <div class="border border-[var(--border-color)] rounded-[12px] bg-blue-50 px-4 py-3 mb-4">
            <ul class="space-y-4">
              {this.items.map(item => (
                <cart-item-row item={item} class="border-b border-solid border-[var(--border-color)] last:border-b-0" />
              ))}
            </ul>
          </div>
        </div>

        {/* Coupon Input or Applied Coupon View */}
        <cart-coupon
          appliedCoupon={this.appliedCoupon}
          discountAmount={this.discountAmount}
          onApply={(e: CustomEvent<string>) => {
            this.coupon = e.detail;
            this.applyCoupon();
          }}
          onRemove={() => this.removeCoupon()}
        />

        {/* Cart Total */}
        <div class="flex justify-between items-center my-5 text-base font-semibold">
          <span>Cart Total</span>
          <span>{formatCurrency(this.discountedTotal, this.items[0]?.price.currency)}</span>
        </div>

        {/* Submit Button */}
        <button class="w-full py-3 bg-[var(--primary-color)] text-white rounded hover:bg-[var(--primary-hover)] transition cursor-pointer" onClick={() => this.handleSubmit()}>
          Proceed to Shipping
        </button>
      </div>
    );
  }
}
