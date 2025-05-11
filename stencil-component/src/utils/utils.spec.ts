import { formatCurrency } from './utils';

describe('formatCurrency', () => {
  it('formats SAR currency by default', () => {
    expect(formatCurrency(3841.5)).toBe('SAR 3,841.50');
  });

  it('formats with decimal values correctly', () => {
    expect(formatCurrency(99.9)).toBe('SAR 99.90');
  });

  it('formats 0 properly', () => {
    expect(formatCurrency(0)).toBe('SAR 0.00');
  });

  it('supports other currencies like USD', () => {
    expect(formatCurrency(1000, 'USD')).toBe('$1,000.00');
  });

  it('handles large values', () => {
    expect(formatCurrency(1000000)).toBe('SAR 1,000,000.00');
  });
});
