import type { Locale } from "../config";
import { es, type Dictionary } from "./es";
import { ca } from "./ca";

const dictionaries: Record<Locale, Dictionary> = { es, ca };

export const getDictionary = (locale: Locale) => dictionaries[locale];

export type { Dictionary };
