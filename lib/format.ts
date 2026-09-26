/** Hydration-safe TR formatters (Intl sunucu/istemci farkı riskini önler) */

export function formatTrNumber(n: number): string {
  const [int, frac] = String(n).split(".");
  const withDots = int.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return frac !== undefined ? `${withDots},${frac}` : withDots;
}

const TR_MONTHS = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
] as const;

/** ISO date `YYYY-MM-DD` → `10 Mart 2026` (timezone kayması yok) */
export function formatTrDate(isoDate: string): string {
  const [y, m, d] = isoDate.split("-").map(Number);
  if (!y || !m || !d) return isoDate;
  return `${d} ${TR_MONTHS[m - 1]} ${y}`;
}

export function yearsSince(year: number, asOfYear = 2026): number {
  return asOfYear - year;
}
