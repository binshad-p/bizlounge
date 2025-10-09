import React, { Suspense } from "react";
import "./globals.css";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { DM_Sans } from "next/font/google";
import Whatsapp from "@/components/Whatsapp";
import { ToastContainer } from "react-toastify";
import ScrollProgressToTop from "@/components/ScrollProgressToTop";

export const metadata = {
  title: "BizLounge | Expert Business Setup & Corporate Services",
  description:
    "BizLounge UAE provides company formation, visa services, PRO support, attestation, translation & trademark registration with reliable corporate solutions.",
};

const dmSams = DM_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TXD43GH8');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>

      <body className={`${dmSams.className} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TXD43GH8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <ToastContainer />
        <Header />
        <Whatsapp />
        <ScrollProgressToTop />
        <Suspense>{children}</Suspense>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
