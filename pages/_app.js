import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import { GoogleTagManager } from "@next/third-parties/google";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <GoogleTagManager gtmId="GTM-PWSTJFZS" />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
