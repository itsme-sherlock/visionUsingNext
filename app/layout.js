import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vision Properties",
  description: "Your one-stop destination for finding your dream property in Tamilnadu. We are a team of expert real estate agents dedicated to helping our clients find the perfect property that matches their needs and budget.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <ContactForm/>
      </body>
    </html>
  );
}
