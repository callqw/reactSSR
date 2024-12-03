import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import { Kanit } from 'next/font/google'
const inter = Kanit({
  subsets: ['latin'],
  display: 'swap',
  weight: "800"
})
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

export const metadata: Metadata = {
  title: "幸福熊猫舍",
  description: "幸福布偶猫舍于2015年开始创立，坐落于美丽的天府之国——成都，本猫舍为家庭式猫舍。专注繁育纯种的布偶猫，家庭式繁育！美国CFA&FIFE注册猫舍，所有的种猫均来自国外知名猫舍血线。。。",
  icons: {
    icon: "/logo2.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${inter.className}`}
      >
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
