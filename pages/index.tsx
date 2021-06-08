import Head from 'next/head'
import { Fragment } from 'react'
import BaseLayout from '../src/layout/BaseLayout'
import styles from '../styles/Home.module.css'

export default function Home(): JSX.Element {
  return (
    <Fragment>
      <Head>
        <title>Base App</title>
        <meta name="description" content="This is our base app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <BaseLayout>
          <p>Hello</p>
        </BaseLayout>
      </main>
    </Fragment>
  )
}
