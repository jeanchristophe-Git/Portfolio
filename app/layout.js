import { Inter } from "next/font/google";
import "./globals.css";
import useServerDarkMode from "@/hooks/use-server-dark-mode";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jean Christophe Désire Bogbé",
  description: "Portfolio-Jean christophe Bogbé",
  
};

export default function RootLayout({ children }) {
  const theme =useServerDarkMode
  return (
    <html lang="en" className={theme} >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
