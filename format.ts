export function formatTaka(amount: number): string {
  return `৳${amount.toLocaleString('en-US')}`;
}

export function discountPercent(price: number, originalPrice: number): number {
  return Math.round((1 - price / originalPrice) * 100);
}
