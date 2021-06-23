import Head from 'next/head'
import { Fragment, useState } from 'react'
import {
  AboutScreen,
  HomeScreen,
  ResumeScreen,
  PortfolioScreen,
  BlogScreen,
  EmptyScreen,
  ContactScreen,
} from '../src/components/tabs'
import BaseLayout from '../src/layout/BaseLayout'
import styles from '../styles/Home.module.css'
import { CSSTransition } from 'react-transition-group'

import initFirebase from '../firebase/initFirebase'
import firebase from 'firebase/app'
import { GetStaticProps } from 'next'

// call firebase

initFirebase()

interface Props {
  data: any
}

export default function Home(props: Props): JSX.Element {
  const { about, projects, resume } = props.data

  const [activeTab, setActiveTab] = useState(0)
  const [transitionOn, setTransitionOn] = useState(false)
  const handleTabChange = (type: 'prev' | 'next' | 'set', pageIndex?: number): void => {
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
    <HomeScreen
      key={Math.random()}
      image_url={props.data['base-details'].image}
      data={props.data['base-details'].tagline}
    />,
    <AboutScreen key={Math.random()} data={about} />,
    <ResumeScreen key={Math.random()} data={resume} />,
    <PortfolioScreen key={Math.random()} data={projects} />,
    // <BlogScreen key={Math.random()} />,
    <EmptyScreen title="Blogs" key={Math.random()} />,
    <EmptyScreen title="Podcast" key={Math.random()} />,
    <ContactScreen key={Math.random()} />,
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
          image_url={props.data['base-details'].image}
          data={props.data['base-details'].main_tag}
          currentTab={activeTab}
          setActiveTab={(type, pageIndex) => {
            if (
              (type === 'next' && activeTab < TABS.length - 1 && activeTab >= 0) ||
              (type === 'prev' && activeTab < TABS.length && activeTab > 0) ||
              type === 'set'
            ) {
              setTransitionOn(true)
            }
            setTimeout(() => {
              handleTabChange(type, pageIndex)
            }, 400)
          }}
        >
          <CSSTransition
            in={transitionOn}
            onEntered={() => {
              setTransitionOn(false)
            }}
            timeout={350}
            classNames={styles.display}
          >
            <div className="display">{TABS[activeTab]}</div>
          </CSSTransition>
        </BaseLayout>
        <div className={styles.mobileCopyright}>© 2021 All rights reserved.</div>
      </main>
    </Fragment>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let posts: any = {}
  try {
    // await the promise
    const querySnapshot = await firebase.firestore().collection('home').get()

    // "then" part after the await
    querySnapshot.forEach(function (doc) {
      posts = { ...posts, [doc.id]: doc.data() }
    })
  } catch (error) {
    // catch part using try/catch
    console.log('Error getting documents: ', error)
    // return something else here, or an empty props, or throw an exception or whatever
  }

  return {
    props: {
      data: posts,
    },
  }
}
