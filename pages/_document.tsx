import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta
            name="keywords"
            content="sourav, souravlayek, layek, reactjs, nextjs, javascript, developer,a front end developer,about front end developer,application front end,css front end,developer front end,developer shopify,e commerce front end,end developer,end development,end to end developer,end to end web application development,end to end web development,end to end website development,end web,front and developer,front and development,front and end developer,front development,front end application developer,front end developer about,front end developer experience,front end developer html css javascript,front end developer is,front end developer javascript,front end developer online,front end developer portfolio,front end developer portfolio projects,front end developer portfolio website,front end developer project,front end developer projects for portfolio,front end developer shopify,front end developer website,front end developer website portfolio,front end developer work,front end developer work experience,front end development portfolio,front end development project,front end development website,front end for web application,front end for website,front end html css,front end html css javascript,front end in web development,front end javascript,front end javascript projects,front end of a website,front end of project,front end of the website,front end online,front end portfolio,front end portfolio projects,front end portfolio website,front end project,front end projects for portfolio,front end shopify,front end web,front end web application,front end web application development,front end web developer,front end web developer portfolio,front end web developer portfolio projects,front end web developer portfolio website,front end web developer projects,front end web development projects,front end web projects,front end website developer,front end website project,front end with javascript,front end work,front web,front web development,frontend developer projects,frontend javascript development,html and css developer,html and css front end,html css developer,html css front end,html css javascript front end,html front end developer,i am a front end developer,i am front end developer,it front end developer,javascript developer portfolio,javascript for front end,javascript for front end developer,javascript for front end development,javascript front,javascript front end development,javascript front end projects,javascript in front end,online developer,portfolio for front end developer,portfolio front end web developer,portfolio frontend developer,portfolio of front end developer,portfolio projects front end developer,portfolio website front end developer,project for front end developer,projects for front end developer portfolio,projects on front end web development,shopify front,shopify front end,shopify front end developer,shopify front end development,web developer a front end developer,web developer and front end developer,web developer shopify,web development front end projects,work of front end developer,working as a front end developer"
          ></meta>

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
