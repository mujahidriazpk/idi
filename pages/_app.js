import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import { GoogleTagManager } from "@next/third-parties/google";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      <Footer />
      <GoogleTagManager gtmId="GTM-PWSTJFZS" />
    </ThemeProvider>
  );
}

export default MyApp;
