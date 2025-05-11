import { Component, h, Prop } from '@stencil/core';

/**
 * StoreHeader Component
 * Reusable header for all checkout steps displaying the store name and navigation breadcrumb.
 */
@Component({
  tag: 'store-header',
  styleUrl: 'store-header.css',
  shadow: true,
})
export class StoreHeader {
  /** Name of the store to display */
  @Prop() storeName: string = 'StoreName';

  /** Current step in the checkout process (e.g., cart, checkout, shipping) */
  @Prop() currentStep: string = 'checkout';

  render() {
    return (
      <div class="flex items-center gap-4">
        {/* Store Logo */}
        <img src="/assets/store-icon.svg" alt="Store" class="w-10 h-10 object-contain" />

        {/* Store Title and Breadcrumb */}
        <div>
          <div class="text-lg font-bold text-[var(--primary-color)]">{this.storeName}</div>
          <div class="text-sm text-gray-500">
            <a href="#" class="underline">
              store
            </a>{' '}
            /{' '}
            <a href="#" class="underline">
              cart
            </a>{' '}
            / <span>{this.currentStep}</span>
          </div>
        </div>
      </div>
    );
  }
}
