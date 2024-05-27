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

      <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WHRBDZZ8'); 
            `
      }} />

      </head>
      <body className={outfit.className}>
      
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WHRBDZZ8"
        height="0" width="0" style={{display:'none', visibility:'hidden'}}></iframe></noscript>

        {children}
</body>
    </html>
  );
}
