import { redirect } from "next/navigation";
import { hasLocale, localePath, defaultLocale } from "@/i18n/config";

export default async function Page({ params }: PageProps<"/[lang]/obelisklabs">) {
  const { lang } = await params;
  redirect(localePath(hasLocale(lang) ? lang : defaultLocale));
}
