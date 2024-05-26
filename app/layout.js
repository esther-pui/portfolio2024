import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ weight: "300", subsets: ["latin"] });

export const metadata = {
  title: "Esther Pui's Portfolio",
  description: "A collection of Esther Pui's showcased works.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MS0BMXHD6C"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MS0BMXHD6C');
          `
        }} />


        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4F9MCSZJ29"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-4F9MCSZJ29');`
        }} />
      </head>
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
