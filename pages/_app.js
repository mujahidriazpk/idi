import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import { GoogleTagManager } from "@next/third-parties/google";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      <GoogleTagManager gtmId="GTM-PWSTJFZS" />
    </ThemeProvider>
  );
}

export default MyApp;
