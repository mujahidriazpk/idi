// import { GoogleTagManager } from "@next/third-parties/google";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        {/* <GoogleTagManager gtmId="GTM-PWSTJFZS" /> */}
        <Head>
          {/* <Link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap"
            rel="stylesheet"
          /> */}
          {/* GTM Script */}
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-PWSTJFZS');
              `,
            }}
          /> */}
        </Head>
        <body>
        {/* <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PWSTJFZS"
            height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe>
          </noscript> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
