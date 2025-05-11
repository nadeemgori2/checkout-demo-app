/**
 * Formats a numeric amount into a localized currency string.
 *
 * @param amount - The numeric value to format.
 * @param currency - The currency code (default is 'SAR').
 * @returns A string formatted in the specified currency and locale.
 *
 * Example: formatCurrency(3841.5) => "SAR 3,841.50"
 */
export function formatCurrency(amount: number, currency: string = 'SAR'): string {
  return new Intl.NumberFormat('en-SA', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format(amount);
}
