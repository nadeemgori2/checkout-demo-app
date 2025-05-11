import { newSpecPage } from '@stencil/core/testing';
import { CartItemRow } from './cart-item-row';
import { h } from '@stencil/core';

describe('cart-item-row', () => {
  const mockItem = {
    id: '001',
    label: 'Test Headphones',
    thumbnail: 'test.jpg',
    qty: 2,
    price: {
      currency: 'SAR',
      amount: 199,
    },
  };

  it('renders with given item data', async () => {
    const page = await newSpecPage({
      components: [CartItemRow],
      template: () => <cart-item-row item={mockItem}></cart-item-row>,
    });
    expect(page.root).toBeTruthy();
  });

  it('renders desktop layout quantity and price blocks', async () => {
    const page = await newSpecPage({
      components: [CartItemRow],
      template: () => <cart-item-row item={mockItem}></cart-item-row>,
    });

    const qty = page.root.shadowRoot.querySelector('.sm\\:block.text-sm.text-center');
    const price = page.root.shadowRoot.querySelector('.sm\\:block.text-sm.font-semibold');

    expect(qty).toBeTruthy();
    expect(price).toBeTruthy();
  });

  it('renders mobile layout stacked quantity and price', async () => {
    const page = await newSpecPage({
      components: [CartItemRow],
      template: () => <cart-item-row item={mockItem}></cart-item-row>,
    });

    const mobileRow = page.root.shadowRoot.querySelector('.sm\\:hidden');
    expect(mobileRow).toBeTruthy();
  });
});
