import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GridBackground from "./components/GridBackground";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const metadata = {
  title: "OGFT | Fals Mania Tangerang",
  description: "Kumis dan Jenggotnya Jarang-jarang.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="bg-black text-white min-h-screen font-sans antialiased">

        <Navbar />

        <main className="relative isolate">
          <GridBackground />
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}