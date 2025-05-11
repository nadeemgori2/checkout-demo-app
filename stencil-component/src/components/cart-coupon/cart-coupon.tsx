import { Component, h, Prop, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'cart-coupon',
  styleUrl: 'cart-coupon.css',
  shadow: true,
})
export class CartCoupon {
  /**
   * Currently applied coupon code (if any)
   */
  @Prop() appliedCoupon: string;

  /**
   * Discount amount to display when coupon is applied
   */
  @Prop() discountAmount: number;

  /**
   * Local state for user-entered coupon input
   */
  @State() inputValue: string = '';

  /**
   * Event emitted when a coupon is applied
   */
  @Event() apply: EventEmitter<string>;

  /**
   * Event emitted when a coupon is removed
   */
  @Event() remove: EventEmitter<void>;

  private handleApply = () => {
    this.apply.emit(this.inputValue);
  };

  render() {
    return (
      <div class="flex mt-4 justify-between items-center h-8">
        {!this.appliedCoupon && <label class="font-bold text-[var(--text-dark)]">Have a coupon?</label>}

        {this.appliedCoupon ? (
          // Coupon applied state
          <div class="flex justify-between items-center mt-4 mb-2 w-full">
            <div class="flex items-center gap-2 text-[var(--primary-color)] px-3 py-1 text-sm font-medium border border-solid border-[var(--primary-color)] rounded-[var(--radius-sm)]">
              <img src="/assets/currency-icon.svg" alt="currency" class="h-5 w-5" />
              <span class="uppercase">{this.appliedCoupon}</span>
              <img src="/assets/delete-icon.svg" alt="delete" class="h-4 w-4 cursor-pointer" onClick={() => this.remove.emit()} />
            </div>
            <div class="text-red-600 font-semibold text-sm">SAR -{this.discountAmount.toFixed(2)}</div>
          </div>
        ) : (
          // Input state before applying coupon
          <div class="flex gap-2 mt-2 h-8">
            <input
              type="text"
              placeholder="insert code"
              value={this.inputValue}
              onInput={(e: any) => (this.inputValue = e.target.value)}
              class="flex-1 p-2 border border-gray-300 rounded w-[100px]"
            />
            <button onClick={this.handleApply} class="px-4 bg-[var(--primary-color)] text-white rounded hover:bg-[var(--primary-hover)] transition cursor-pointer">
              Apply
            </button>
          </div>
        )}
      </div>
    );
  }
}
