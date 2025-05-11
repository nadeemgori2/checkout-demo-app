import { Component, h, Event, EventEmitter } from '@stencil/core';

/**
 * PaymentConfirmed component
 * Final confirmation screen shown after a successful checkout.
 */
@Component({
  tag: 'payment-confirmed',
  styleUrl: 'payment-confirmed.css',
  shadow: true,
})
export class PaymentConfirmed {
  /** Emits an event to navigate back to the store */
  @Event() returnToStore: EventEmitter<void>;

  render() {
    return (
      <div class="checkout-container items-center justify-center h-full">
        <div>
          {/* Store Branding */}
          <img src="/assets/store-icon.svg" alt="Store Logo" class="mx-auto w-10 h-10 object-contain" />
          <h1 class="text-[var(--primary-color)] font-semibold text-lg text-center">StoreName</h1>

          {/* Confirmation Title */}
          <h2 class="text-[38px] text-[var(--text-dark)] text-center font-black leading-tight">Payment Confirmed</h2>

          {/* Thank You Message */}
          <p class="text-[18px] text-[var(--text-muted)] font-normal leading-[20px] my-5 text-center">Thank you for shopping</p>

          {/* Return Navigation */}
          <div class="text-center">
            <a
              href="#"
              class="text-sm text-[var(--text-link)] underline hover:text-[var(--text-link-hover)]"
              onClick={e => {
                e.preventDefault();
                this.returnToStore.emit();
              }}
            >
              return to store
            </a>
          </div>
        </div>
      </div>
    );
  }
}
