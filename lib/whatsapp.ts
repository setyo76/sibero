import { SITE } from "./data";

export function buildWaLink(text?: string): string {
  const base = `https://wa.me/${SITE.whatsapp}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
