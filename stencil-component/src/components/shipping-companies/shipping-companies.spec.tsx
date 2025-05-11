import { newSpecPage } from '@stencil/core/testing';
import { ShippingCompanies } from './shipping-companies';
import { FALLBACK_SHIPPING } from '../../constants/fallbackData';

describe('shipping-companies', () => {
  it('renders skeleton before data loads', async () => {
    const page = await newSpecPage({
      components: [ShippingCompanies],
      html: `<shipping-companies cart-total="1000"></shipping-companies>`,
    });

    expect(page.root).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('cart-items-skeleton')).toBeTruthy();
  });

  it('renders shipping options after data is loaded', async () => {
    const component = new ShippingCompanies();
    component.cartTotal = 1000;
    await component.fetchShipping();

    const page = await newSpecPage({
      components: [ShippingCompanies],
      html: `<shipping-companies cart-total="1000"></shipping-companies>`,
    });

    page.rootInstance.options = FALLBACK_SHIPPING;
    page.rootInstance.selectedOption = FALLBACK_SHIPPING[0];
    await page.waitForChanges();

    const shippingOptions = page.root.shadowRoot.querySelectorAll('ul > li');
    expect(shippingOptions.length).toBeGreaterThan(0);
  });

  it('emits backToCart event on back icon click', async () => {
    const page = await newSpecPage({
      components: [ShippingCompanies],
      html: `<shipping-companies cart-total="1000"></shipping-companies>`,
    });

    page.rootInstance.options = FALLBACK_SHIPPING;
    page.rootInstance.selectedOption = FALLBACK_SHIPPING[0];
    await page.waitForChanges();

    const spy = jest.fn();
    page.root.addEventListener('backToCart', spy);

    const backBtn = page.root.shadowRoot.querySelector('img[alt="Back"]');
    backBtn.dispatchEvent(new Event('click'));
    expect(spy).toHaveBeenCalled();
  });

  it('emits shippingSelected on selection', async () => {
    const page = await newSpecPage({
      components: [ShippingCompanies],
      html: `<shipping-companies cart-total="1000"></shipping-companies>`,
    });

    const option = FALLBACK_SHIPPING[1];
    const instance = page.rootInstance;
    const spy = jest.fn();

    page.root.addEventListener('shippingSelected', spy);
    instance.options = FALLBACK_SHIPPING;
    instance.selectedOption = option;
    await page.waitForChanges();

    instance.selectShipping(option);
    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ detail: option }));
  });

  it('emits proceedToConfirmed on submitOrder', async () => {
    const page = await newSpecPage({
      components: [ShippingCompanies],
      html: `<shipping-companies cart-total="1000"></shipping-companies>`,
    });

    const instance = page.rootInstance;
    instance.options = FALLBACK_SHIPPING;
    instance.selectedOption = FALLBACK_SHIPPING[0];
    await page.waitForChanges();

    const spy = jest.fn();
    page.root.addEventListener('proceedToConfirmed', spy);
    await instance.submitOrder();

    expect(spy).toHaveBeenCalled();
  });
});
