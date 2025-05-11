/** Default fallback cart items used if API call fails */
export const FALLBACK_CART_ITEMS = [
  {
    id: '001',
    label: 'JBL QuietComfort 45 wireless bluetooth headphones',
    thumbnail: 'https://cdn.salla.sa/oRmZv/bi7pdht4SRGPLmziP5fDcuFyuDOwz4FypJ5svKxU.jpg',
    qty: 1,
    price: { currency: 'SAR', amount: 1500 },
  },
  {
    id: '002',
    label: 'JBL Active Noise Cancelling Headphones',
    thumbnail: 'https://cdn.salla.sa/oRmZv/9wgo7gyYLL6WsYwugU1zZEn3nypaI93MDCPiPhI5.png',
    qty: 1,
    price: { currency: 'SAR', amount: 750 },
  },
  {
    id: '003',
    label: 'JBL AirPods Max - Sky Blue',
    thumbnail: 'https://cdn.salla.sa/oRmZv/ntqWnEYORNd9I37LmsBNb7A0DnSx3kTd9Sa64lKZ.jpg',
    qty: 1,
    price: { currency: 'SAR', amount: 1650 },
  },
];

/** Default fallback shipping options used if API call fails */
export const FALLBACK_SHIPPING = [
  {
    id: '002',
    name: 'dhl',
    label: 'DHL',
    logo: 'https://www.dhl.com/content/dam/dhl/global/core/images/logos/dhl-logo.svg',
    fees: { currency: 'SAR', amount: 0 },
  },
  {
    id: '003',
    name: 'fedex',
    label: 'FedEx',
    logo: 'https://www.fedex.com/content/dam/fedex-com/logos/logo.png',
    fees: { currency: 'SAR', amount: 15 },
  },
  {
    id: '001',
    name: 'aramex',
    label: 'Aramex',
    logo: 'https://www.aramex.com/Sitefinity/WebsiteTemplates/aramex/App_Themes/aramex/Images/Aramex%20logo%20English.webp',
    fees: { currency: 'SAR', amount: 25 },
  },
];

/** Default fallback coupons used if API call fails */
export const FALLBACK_COUPONS = [
  {
    id: '001',
    name: 'freemusic',
    label: 'FREEMUSIC',
    discount: { type: 'percentage', amount: '15' },
  },
];

/** Default fallback totals used if API call fails */
export const FALLBACK_TOTALS = [
  { name: 'cart_total', label: 'Cart Total', currency: 'SAR', amount: 3900 },
  { name: 'discount', label: 'Discount', currency: 'SAR', amount: 0 },
  { name: 'shipping_fees', label: 'Shipping Fees', currency: 'SAR', amount: 0 },
  { name: 'total', label: 'Total', currency: 'SAR', amount: 3900 },
];
