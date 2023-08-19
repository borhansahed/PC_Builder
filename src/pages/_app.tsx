import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import BuilderContext from "@/context/Builder.context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <BuilderContext>
        <Component {...pageProps} />
      </BuilderContext>

      <Footer />
    </>
  );
}
