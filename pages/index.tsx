import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Base App</title>
        <meta name="description" content="This is our base app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Hello</h1>
      </main>
    </div>
  )
}
