


import React, { Suspense } from "react";
import "./globals.css";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

import {DM_Sans} from "next/font/google"

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
        {/* <Script src="http://code.jquery.com/jquery-latest.min.js"></Script>
        <Script src="jquery.drawsvg.js"></Script>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0D5B53DLFG"
        ></Script>
        <Script>
          {`window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date());   gtag('config', 'G-0D5B53DLFG');`}
        </Script> */}
      </head>
      <body className={`${dmSams.className} antialiased`} >
          <Header />
          <Suspense >{children}</Suspense>
          <Footer />
      </body>
    </html>
  );
}

