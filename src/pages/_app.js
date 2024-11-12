import React, { useEffect } from "react";
import "@/styles/globals.css";
import { RouteProvider } from "../../context/context";
import LoginModal from "./components/login-modal";
import LiveModal from "./components/live-modal";
import RegisterModal from "./components/register-modal";
import CompetitorModal from "./components/competitor-modal";
import aos from "aos";
import "aos/dist/aos.css";


export const metadata = {
  title: "Rahul More",
  // description: "A Frontend Developer Portfolio",
};

export default function App({ Component, pageProps }) {
  useEffect(() => {
    aos.init();
  }, []);
  return (
    <RouteProvider>
      <LoginModal />
      <LiveModal />
      <RegisterModal />
      <CompetitorModal />
      <Component {...pageProps} />
    </RouteProvider>
  )
}
