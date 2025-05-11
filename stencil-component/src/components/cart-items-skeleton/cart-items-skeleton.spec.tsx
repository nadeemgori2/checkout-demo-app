import { newSpecPage } from '@stencil/core/testing';
import { CartItemsSkeleton } from './cart-items-skeleton';

describe('cart-items-skeleton', () => {
  it('renders correctly with expected placeholders', async () => {
    const page = await newSpecPage({
      components: [CartItemsSkeleton],
      html: `<cart-items-skeleton></cart-items-skeleton>`,
    });

    const root = page.root.shadowRoot;

    expect(root.querySelector('store-header')).toBeTruthy();
    expect(root.querySelectorAll('.bg-gray-300').length).toBeGreaterThan(0);
    expect(root.querySelector('.bg-gray-200.h-72')).toBeTruthy();
    expect(root.querySelector('.h-12.bg-gray-400')).toBeTruthy();
  });
});
