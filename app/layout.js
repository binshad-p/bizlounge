


import React, { Suspense } from "react";
import "./globals.css";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react"
import {DM_Sans} from "next/font/google"
import Whatsapp from "@/components/Whatsapp";
import { ToastContainer } from "react-toastify";


export const metadata = {
  title: "BizLounge |Expert Business Setup & Corporate Services",
  description:
    "BizLounge UAE offers comprehensive business solutions, including company formation, visa services, PRO support, document attestation & translation, and trademark registration. Simplify your journey to success with our reliable and efficient corporate services in the UAE.",
};

const dmSams = DM_Sans(
  {
    weight: ["100","200","300","400","500","600","700","800"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-dm-sans",
  }
)

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={`${dmSams.className} antialiased`} >
      <ToastContainer />

          <Header />
          <Whatsapp/>
          <Suspense >{children}</Suspense>
          <Footer />
          <Analytics />

      </body>
    </html>
  );
}

