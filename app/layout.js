// import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/src/ComponentsLayout/dashbord/layoutDashbord/Header";
import Footer from "@/src/ComponentsLayout/dashbord/layoutDashbord/Footer";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };
