import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }
  render() {
    return (
      <Html>
        <Head>
          {/* <!-- Favicon and Icons Meta Tags --> */}

          <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
          <link rel="manifest" href="/static/site.webmanifest" />
          <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#582b93" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <meta name="msapplication-TileColor" content="#3c1867" />
          <meta name="msapplication-config" content="/static/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.souravlayek.com/" />
          <meta
            property="og:title"
            content="Sourav Layek - Front-End Developer and Content Creator"
          />
          <meta
            property="og:description"
            content="I am Sourav a front-end developer who powers websites with the most popular Next js and React Js and also works on mobile with React-Native and Flutter."
          />
          <meta property="og:image" content="/static/socialIcon.png" />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.souravlayek.com/" />
          <meta
            property="twitter:title"
            content="Sourav Layek - Front-End Developer and Content Creator"
          />
          <meta
            property="twitter:description"
            content="I am Sourav a front-end developer who powers websites with the most popular Next js and React Js and also works on mobile with React-Native and Flutter."
          />
          <meta property="twitter:image" content="/static/socialIcon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
