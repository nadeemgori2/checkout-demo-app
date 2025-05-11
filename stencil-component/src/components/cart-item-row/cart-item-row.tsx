import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'cart-item-row',
  styleUrl: 'cart-item-row.css',
  shadow: true,
})
export class CartItemRow {
  /**
   * Single cart item object to display in the row
   */
  @Prop() item: CartItem;

  render() {
    const { thumbnail, label, qty, price } = this.item;

    return (
      <li class="flex flex-wrap sm:flex-nowrap items-start sm:items-center justify-between gap-4 py-2 min-h-[75px]">
        {/* Product image, title and price */}
        <div class="flex items-start gap-4 flex-1 min-w-0">
          <img src={thumbnail} alt={label} class="w-13 h-13 object-contain rounded-full" />
          <div class="flex-1 min-w-0">
            <a href={label} class="text-[0.95rem] font-medium text-[var(--text-primary)] underline hover:underline whitespace-normal break-words block">
              {label}
            </a>
            <div class="text-xs text-gray-500">
              {price.currency} {price.amount.toFixed(2)}
            </div>

            {/* Mobile layout: show quantity and price stacked */}
            <div class="flex sm:hidden justify-between text-sm mt-1">
              <span class="text-center">{qty} pcs</span>
              <span class="font-semibold text-right">
                {price.currency} {price.amount.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Desktop layout: show quantity and price in separate columns */}
        <div class="hidden sm:block text-sm text-center w-10 shrink-0">{qty}</div>
        <div class="hidden sm:block text-sm font-semibold text-right w-24 shrink-0">
          {price.currency} {price.amount.toFixed(2)}
        </div>
      </li>
    );
  }
}
