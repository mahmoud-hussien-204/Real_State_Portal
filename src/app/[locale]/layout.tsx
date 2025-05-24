import {NextIntlClientProvider} from "next-intl";

import {getMessages, getTranslations} from "next-intl/server";

import {Urbanist, Cairo} from "next/font/google";

import AppProviders from "@/providers/AppProviders";

import "../style.css";
import Providers from "./providers";

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
    <html
      lang={locale}
      dir={isRtl ? "rtl" : "ltr"}
      className='scroll-pt-8.5rem overflow-x-hidden scroll-smooth'
    >
      <body
        className={`${isRtl ? fontAr.className : fontEn.className} ${fontEn.variable} ${fontAr.variable}`}
      >
        <NextIntlClientProvider messages={messages}>
          <AppProviders>
            <Providers>
              <main>{children}</main>
            </Providers>
          </AppProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
