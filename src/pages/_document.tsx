import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>B2B protos</title>
        <link
          rel="preload"
          crossOrigin="anonymous"
          href="/fonts/Roobert/Roobert-Bold.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          crossOrigin="anonymous"
          href="/fonts/Roobert/Roobert-Regular.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          crossOrigin="anonymous"
          href="/fonts/Roboto/Roboto-Regular.ttf"
          as="font"
          type="font/ttf"
        />
        <link
          rel="preload"
          crossOrigin="anonymous"
          href="/fonts/StaffX/StaffX-Medium.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          crossOrigin="anonymous"
          href="/fonts/StaffXX/StaffXX-Medium.woff2"
          as="font"
          type="font/woff2"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
