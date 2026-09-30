import { notFound } from "next/navigation";
import ObeliskLabsLanding from "@/components/ObeliskLabs";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return <ObeliskLabsLanding lang={lang} dict={getDictionary(lang)} />;
}
