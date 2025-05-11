import { newSpecPage } from '@stencil/core/testing';
import { CartCoupon } from './cart-coupon';
import { h } from '@stencil/core';

describe('cart-coupon', () => {
  it('renders applied coupon UI correctly', async () => {
    const page = await newSpecPage({
      components: [CartCoupon],
      template: () => <cart-coupon appliedCoupon="FREEMUSIC" discountAmount={15}></cart-coupon>,
    });

    expect(page.root).toBeTruthy();
    await page.waitForChanges();

    const shadow = page.root.shadowRoot;
    expect(shadow.textContent).toContain('FREEMUSIC');
    expect(shadow.textContent).toContain('SAR -15.00');
    expect(shadow.querySelector('input')).toBeFalsy();
  });

  it('emits apply event with correct value', async () => {
    const page = await newSpecPage({
      components: [CartCoupon],
      template: () => <cart-coupon></cart-coupon>,
    });

    await page.waitForChanges();

    const input = page.root.shadowRoot.querySelector('input');
    const button = page.root.shadowRoot.querySelector('button');

    input.value = 'DISCOUNT15';
    input.dispatchEvent(new Event('input'));

    const applySpy = jest.fn();
    page.root.addEventListener('apply', (e: CustomEvent) => applySpy(e.detail));

    button.click();
    await page.waitForChanges();

    expect(applySpy).toHaveBeenCalledWith('DISCOUNT15');
  });

  it('emits remove event when remove icon is clicked', async () => {
    const page = await newSpecPage({
      components: [CartCoupon],
      template: () => <cart-coupon appliedCoupon="FREEMUSIC" discountAmount={15}></cart-coupon>,
    });

    await page.waitForChanges();

    const removeSpy = jest.fn();
    page.root.addEventListener('remove', removeSpy);

    const removeIcon = page.root.shadowRoot.querySelector('img[alt="delete"]') as HTMLImageElement;
    removeIcon.click();
    await page.waitForChanges();

    expect(removeSpy).toHaveBeenCalled();
  });
});
