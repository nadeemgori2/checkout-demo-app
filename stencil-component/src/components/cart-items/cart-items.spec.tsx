import { newSpecPage } from '@stencil/core/testing';
import { CartItems } from './cart-items';
import { FALLBACK_CART_ITEMS } from '../../constants/fallbackData';

describe('cart-items', () => {
  it('renders skeleton when loading', async () => {
    const page = await newSpecPage({
      components: [CartItems],
      html: `<cart-items></cart-items>`,
    });

    // Expect skeleton to be present while loading
    expect(page.root.shadowRoot.querySelector('cart-items-skeleton')).toBeTruthy();
  });

  it('renders fallback cart items correctly after loading', async () => {
    const page = await newSpecPage({
      components: [CartItems],
      html: `<cart-items></cart-items>`,
    });

    const instance = page.rootInstance;
    await instance.fetchItems(); // Trigger loading

    await page.waitForChanges();
    expect(instance.items.length).toBe(FALLBACK_CART_ITEMS.length);
    expect(page.root.shadowRoot.querySelectorAll('cart-item-row').length).toBe(FALLBACK_CART_ITEMS.length);
  });

  it('applies a valid percentage coupon correctly', async () => {
    const page = await newSpecPage({
      components: [CartItems],
      html: `<cart-items></cart-items>`,
    });

    const instance = page.rootInstance;
    await instance.fetchItems();

    instance.coupon = 'freemusic';
    await instance.applyCoupon();
    await page.waitForChanges();

    expect(instance.discountAmount).toBeGreaterThan(0);
    expect(instance.appliedCoupon).toBe('FREEMUSIC');
  });

  it('resets coupon state when removeCoupon is called', async () => {
    const page = await newSpecPage({
      components: [CartItems],
      html: `<cart-items></cart-items>`,
    });

    const instance = page.rootInstance;
    instance.appliedCoupon = 'TEST';
    instance.discountAmount = 100;
    instance.coupon = 'test';
    instance.removeCoupon();

    expect(instance.appliedCoupon).toBe('');
    expect(instance.discountAmount).toBe(0);
    expect(instance.coupon).toBe('');
  });

  it('emits proceedToShipping event on submit', async () => {
    const page = await newSpecPage({
      components: [CartItems],
      html: `<cart-items></cart-items>`,
    });

    const instance = page.rootInstance;
    const spy = jest.fn();
    page.win.addEventListener('proceedToShipping', spy);

    await instance.fetchItems();
    instance.handleSubmit();

    expect(spy).toHaveBeenCalled();
    const eventDetail = spy.mock.calls[0][0].detail;
    expect(typeof eventDetail).toBe('number');
  });
});
