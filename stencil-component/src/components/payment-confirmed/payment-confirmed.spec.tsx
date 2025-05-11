import { newSpecPage } from '@stencil/core/testing';
import { PaymentConfirmed } from './payment-confirmed';

describe('payment-confirmed', () => {
  it('renders correctly', async () => {
    const page = await newSpecPage({
      components: [PaymentConfirmed],
      html: `<payment-confirmed></payment-confirmed>`,
    });

    const root = page.root.shadowRoot;

    expect(root.querySelector('h2')?.textContent).toContain('Payment Confirmed');
    expect(root.querySelector('a')?.textContent).toContain('return to store');
  });

  it('emits returnToStore event when return link is clicked', async () => {
    const page = await newSpecPage({
      components: [PaymentConfirmed],
      html: `<payment-confirmed></payment-confirmed>`,
    });

    const returnSpy = jest.fn();
    page.root.addEventListener('returnToStore', returnSpy);

    const returnLink = page.root.shadowRoot.querySelector('a');
    returnLink.dispatchEvent(new Event('click', { bubbles: true, cancelable: true }));

    expect(returnSpy).toHaveBeenCalled();
  });
});
