import Head from 'next/head'
import { Fragment, useState } from 'react'
import { AboutScreen, HomeScreen } from '../src/components/tabs'
import BaseLayout from '../src/layout/BaseLayout'
import styles from '../styles/Home.module.css'

export default function Home(): JSX.Element {
  const [activeTab, setActiveTab] = useState(0)
  const handleTabChange = (type: 'prev' | 'next' | 'set', pageIndex?: number): void => {
    console.log(type)
    switch (type) {
      case 'next':
        setActiveTab((prev) => {
          if (prev < TABS.length - 1) {
            return prev + 1
          }
          return prev
        })
        return
      case 'prev':
        setActiveTab((prev) => {
          if (prev > 0) {
            return prev - 1
          }
          return prev
        })
        return
      case 'set':
        setActiveTab(pageIndex as number)
        return

      default:
        break
    }
  }

  const TABS: Array<React.ReactNode> = [
    <HomeScreen key={Math.random()} />,
    <AboutScreen key={Math.random()} />,
  ]

  return (
    <Fragment>
      <Head>
        <title>Sourav Layek</title>
        <meta name="description" content="This is our base app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <BaseLayout
          currentTab={activeTab}
          setActiveTab={(type, pageIndex) => handleTabChange(type, pageIndex)}
        >
          {TABS[activeTab]}
        </BaseLayout>
      </main>
    </Fragment>
  )
}
