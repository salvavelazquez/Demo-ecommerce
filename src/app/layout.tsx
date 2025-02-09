import type { Metadata } from "next";
import localFont from "next/font/local";
import {Cinzel_Decorative, Inter} from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { AuthProvider } from "@/context/AuthContext";

const primaryFont = Cinzel_Decorative({
  subsets: ["latin"],
  display: "swap",
  variable: "--primary-font",
  weight: "400"
});

const secondaryFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--secondary-font",
  weight: "400"
});

export const metadata: Metadata = {
  title: "webpt23a",
  description: "Henry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${primaryFont.variable} ${secondaryFont.variable} antialiased flex flex-col justify-between h-screen`}
      >
        <AuthProvider>
          <Navbar />
          <main className="container">{children}</main>
          <Footer/>
        </AuthProvider>
      </body>
    </html>
  );
}
