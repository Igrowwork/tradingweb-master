/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import localFont from "next/font/local";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Whoweare from "./components/who-we-are";
import TopPerformance from "./components/topperformance";
import OurService from "./components/our-service";
import LetTouch from "./components/let-touch";
import HeroSection from "./components/hero-section";
import Layout from "./components/layout";

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

export default function Home() {
  return (
    <Layout>
        <HeroSection />
        <OurService />
        <Whoweare />
        <TopPerformance />
        <LetTouch />
    </Layout>
  );
}
