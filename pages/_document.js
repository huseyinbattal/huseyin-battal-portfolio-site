import { Html, Head, Main, NextScript } from "next/document";

const logo = "https://www.reactdeveloper.site/_next/static/media/logobg.f594c67f.svg"


export default function Document() {
  return (
    <Html lang="tr">
      <Head>
        <title>Hüseyin BATTAL | Full Stack Web Developer</title>
        <meta name="description" content="Welcome to my personal website"></meta>
        <meta name="keywords" content="HTML,CSS,JavaScript,React,Software,Development" />
        <meta name="author" content="Hüseyin Battal"/>
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
        <link rel="icon" href={ logo} />
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
  );
}
