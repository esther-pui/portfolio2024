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
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
