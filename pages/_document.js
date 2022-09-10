import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="tr">
      <Head>
        <title>Hüseyin BATTAL | React.JS Developer</title>
        <meta
          name="description"
          content=""
        ></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/hack-font@3/build/web/hack.css"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript
          src="https://www.googletagmanager.com/gtag/js?id=UA-74400269-2"
          strategy="afterInteractive"
        ></NextScript>

        <NextScript id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-74400269-2');
        `}
        </NextScript>
      </body>
    </Html>
  )
}
