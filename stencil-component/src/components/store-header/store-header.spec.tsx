import { newSpecPage } from '@stencil/core/testing';
import { StoreHeader } from './store-header';
import { h } from '@stencil/core';

describe('store-header', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [StoreHeader],
      template: () => <store-header></store-header>,
    });

    expect(page.root).toBeTruthy();
    const title = page.root.shadowRoot.querySelector('div div');
    expect(title.textContent).toContain('StoreName');
  });
});
