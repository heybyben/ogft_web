import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GridBackground from "./components/GridBackground";

export const metadata = {
  title: "OGFT Tangerang",
  description: "Orang Gila Fals Tangerang Community",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-white min-h-screen">

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