import { defineRouting } from "next-intl/routing";

export const locales = ["en", "ar"] as const;
export type ILocale = (typeof locales)[number];
export const routing = defineRouting({
  locales: locales,
  defaultLocale: "en",
});
