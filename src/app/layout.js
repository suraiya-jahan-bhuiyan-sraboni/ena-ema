import { Manrope ,General } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});



export const metadata = {
  title: "Ena Ema Technologies",
  description: "Stop wasting traffic on generic pages. We deliver premium, conversion-focused landing pages designed, developed, and launched in just 5 days.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} antialiased`}
      >
        {children}
        <Footer/>
      </body>
    </html>
  );
}
