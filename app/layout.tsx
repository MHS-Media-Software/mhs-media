import "./globals.css";
import TopBar from "../components/TopBar";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CtaSection from "../components/CtaSection";
import FloatingWhatsapp from "../components/FloatingWhatsapp";
import SideCta from "../components/SideCta";

export const metadata = {
  title: "MHS Media - Online Marketing Agency | SEO, Webdesign & Social Media",
  description: "MHS Media helpt Nederlandse bedrijven digitaal groeien. Specialist in SEO, webdesign, social media en Google Ads. Meetbare resultaten en persoonlijke service.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>
        <TopBar />
        <Nav />
        {children}
        <CtaSection />
        <Footer />
        <FloatingWhatsapp />
        <SideCta />
      </body>
    </html>
  );
}
