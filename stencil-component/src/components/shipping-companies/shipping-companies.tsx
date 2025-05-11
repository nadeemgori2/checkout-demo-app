import { Component, h, State, Event, EventEmitter, Prop } from '@stencil/core';
import { fetchWithFallback } from '../../services/dataService';
import { FALLBACK_SHIPPING } from '../../constants/fallbackData';
import { API_PATH } from '../../constants/API_URL';
import { formatCurrency } from '../../utils/utils';

/**
 * ShippingCompanies Component
 * Displays a list of shipping options and handles user selection and submission.
 */
@Component({
  tag: 'shipping-companies',
  styleUrl: 'shipping-companies.css',
  shadow: true,
})
export class ShippingCompanies {
  /** Cart total passed from parent */
  @Prop() cartTotal: number;

  /** Available shipping options */
  @State() options: ShippingOption[] = [];

  /** Currently selected shipping option */
  @State() selectedOption: ShippingOption;

  /** Emits selected shipping option */
  @Event() shippingSelected: EventEmitter<ShippingOption>;

  /** Emits event to navigate back to cart */
  @Event() backToCart: EventEmitter<void>;

  /** Emits event to proceed to confirmation page */
  @Event() proceedToConfirmed: EventEmitter<void>;

  /** Fetch shipping options from API or fallback */
  async fetchShipping() {
    this.options = await fetchWithFallback(API_PATH.SHIPPING, FALLBACK_SHIPPING);
    this.selectShipping(this.options[0]);
  }

  /** Handle user selection of shipping option */
  selectShipping(option: ShippingOption) {
    this.selectedOption = option;
    this.shippingSelected.emit(option);
  }

  /** Submit selected shipping and navigate */
  async submitOrder() {
    try {
      await fetch('submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          shipping: this.selectedOption.id,
          total: this.totalWithShipping,
        }),
      });
    } catch (e) {
      console.warn('Submit failed. Proceeding anyway.');
    } finally {
      this.proceedToConfirmed.emit();
    }
  }

  /** Get fee of selected shipping option */
  get selectedFee() {
    const selected = this.options.find(opt => opt.id === this.selectedOption.id);
    return selected ? selected.fees.amount : 0;
  }

  /** Calculate total amount including shipping */
  get totalWithShipping() {
    return this.cartTotal + this.selectedFee;
  }

  /** Lifecycle method */
  componentWillLoad() {
    this.fetchShipping();
  }

  render() {
    return !this.selectedOption ? (
      <cart-items-skeleton />
    ) : (
      <div class="checkout-container">
        <store-header current-step="checkout" />

        {/* Step Indicator */}
        <div class="flex items-center gap-5 mt-3 mb-3">
          <img src="/assets/back-icon.svg" alt="Back" class="h-3 w-3 cursor-pointer" onClick={() => this.backToCart.emit()} />
          <h2 class="text-base font-semibold text-[var(--primary-color)]">Shipping</h2>
          <div class="flex-grow h-[2px] bg-[var(--primary-color)] rounded-full mt-[var(--radius-sm)]" />
        </div>

        {/* Shipping List */}
        <ul class="space-y-4 flex-grow overflow-auto">
          {this.options.map(opt => (
            <li class="flex items-center justify-between cursor-pointer px-3 py-2 rounded border border-gray-200 hover:bg-gray-50" onClick={() => this.selectShipping(opt)}>
              <div class="flex items-center gap-3">
                <input type="radio" checked={this.selectedOption.id === opt.id} onChange={() => this.selectShipping(opt)} class="accent-[var(--primary-color)]" />
                <img src={opt.logo} alt={opt.label} class="w-16 h-6 object-contain" />
                <span class="text-sm font-medium text-gray-700">{opt.label}</span>
              </div>
              <span class="text-sm font-bold text-gray-800">{opt.fees.amount === 0 ? 'Free' : `${opt.fees.currency} + ${opt.fees.amount.toFixed(2)}`}</span>
            </li>
          ))}
        </ul>

        <hr class="my-4 text-[var(--background-light)]" />

        {/* Totals */}
        <div class="text-sm space-y-2 text-[var(--text-dark)] font-bold mb-3">
          <div class="flex justify-between">
            <span>Cart Total</span>
            <span>{`${this.selectedOption.fees.currency} ${this.cartTotal.toFixed(2)}`}</span>
          </div>
          <div class="flex justify-between">
            <span>Shipping fees</span>
            <span>{`${this.selectedOption.fees.currency} ${this.selectedFee.toFixed(2)}`}</span>
          </div>
          <div class="flex justify-between">
            <span>Totals</span>
            <span>{formatCurrency(this.totalWithShipping, this.selectedOption.fees.currency)}</span>
          </div>
        </div>

        {/* Action Button */}
        <button class="w-full py-3 bg-[var(--primary-color)] text-white rounded hover:bg-[var(--primary-hover)] transition cursor-pointer" onClick={() => this.submitOrder()}>
          Submit
        </button>
      </div>
    );
  }
}
