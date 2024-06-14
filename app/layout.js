import Head from "next/head";
import Header from "./components/Header";
import Nav from "./components/Nav";
import TopLeftImg from "./components/TopLeftImg";
import "./globals.css";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Abraham Tekeste",
  description:
    "This is portfolio website showcasing ABraham Tekeste Skill set!!",
  icons: {
    icon: "favicon.png", // /public path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
      >
        {/* <TopLeftImg /> */}
        <Nav />
        <Header />
        <div className="bg-[#ff] ">{children}</div>
      </body>
    </html>
  );
}
