import {NextIntlClientProvider} from "next-intl";

import {getMessages, getTranslations} from "next-intl/server";

import {Urbanist, Cairo} from "next/font/google";

import "../style.css";

const fontEn = Urbanist({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-en",
});

const fontAr = Cairo({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ar",
});

interface IProps extends React.PropsWithChildren {
  params: {locale: ILocales};
}

export async function generateMetadata({params: {locale}}: IProps) {
  const t = await getTranslations({locale});
  return {
    title: {
      template: `${t("page_title.real_state_portal")} | %`,
      default: `${t("page_title.real_state_portal")}`,
    },
  };
}

export default async function LocaleLayout({children, params: {locale}}: IProps) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  const isRtl = locale === "ar";

  return (
    <html lang={locale} dir={isRtl ? "rtl" : "ltr"}>
      <body
        className={`${isRtl ? fontAr.className : fontEn.className} ${fontEn.variable} ${fontAr.variable}`}
      >
        <NextIntlClientProvider messages={messages}>
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
