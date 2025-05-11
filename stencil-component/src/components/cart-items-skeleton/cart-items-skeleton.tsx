import { Component, h } from '@stencil/core';

/**
 * Skeleton loader for the cart items component.
 * Displayed while cart data is being fetched.
 */
@Component({
  tag: 'cart-items-skeleton',
  styleUrl: 'cart-items-skeleton.css',
  shadow: true,
})
export class CartItemsSkeleton {
  render() {
    return (
      <div class="checkout-container justify-between h-full gap-[20px] md:p-6">
        {/* Store Header */}
        <store-header current-step="checkout" />

        {/* Simulated title underline */}
        <div class="flex items-center gap-2">
          <div class="w-24 h-4 bg-gray-300 rounded-full"></div>
          <div class="h-2 bg-gray-200 rounded w-[90%]"></div>
        </div>

        {/* Cart list skeleton */}
        <div class="flex-grow">
          <div class="bg-gray-200 h-72 w-full rounded-md"></div>
        </div>

        {/* Summary section placeholders */}
        <div class="flex justify-between">
          <div class="h-4 bg-gray-300 rounded-full w-1/2"></div>
          <div class="h-4 bg-gray-300 rounded-full w-1/4"></div>
        </div>

        <div class="flex justify-between">
          <div class="h-4 bg-gray-300 rounded-full w-1/2"></div>
          <div class="h-4 bg-gray-300 rounded-full w-1/4"></div>
        </div>

        {/* Button placeholder */}
        <div class="h-12 bg-gray-400 rounded mt-4"></div>
      </div>
    );
  }
}
