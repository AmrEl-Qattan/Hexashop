import localFont from "next/font/local";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer/Footer";
import BootstrapClient from "@/component/BootstrapClient";
import { ThemProvider } from "@/context/ThemContext";
import ViewportHeightSetter from "@/component/ViewportHeightSetter";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "HexaShop",
  description:
    "discover a world of endless shopping possibilities at our online store. browse, choose, and order your favorite products from the comfort of your home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} `}>
        {/* <ViewportHeightSetter/> */}
        <ThemProvider>
          <Navbar />
          <div className="container">{children}</div>
          <BootstrapClient />
          <Footer />
        </ThemProvider>
      </body>
    </html>
  );
}
