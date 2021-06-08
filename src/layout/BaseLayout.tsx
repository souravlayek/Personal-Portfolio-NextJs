import React from 'react'
import styles from '../../styles/BaseLayout.module.scss'
import Home from '../assets/icons/home.svg'
import About from '../assets/icons/about.svg'
import Resume from '../assets/icons/resume.svg'
import Experience from '../assets/icons/experience.svg'
import Blogs from '../assets/icons/blogs.svg'
import Podcast from '../assets/icons/podcast.svg'
import Contact from '../assets/icons/contact.svg'

interface Props {
  children: React.ReactNode
}

const BaseLayout = (props: Props): JSX.Element => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.glass}>{props.children}</div>
      <div className={styles.sideSection}>
        <div className={styles.sidebar_one}>
          <div className={styles.item}>
            <Home />
          </div>
          <div className={styles.item}>
            <About />
          </div>
          <div className={styles.item}>
            <Resume />
          </div>
          <div className={styles.item}>
            <Experience />
          </div>
          <div className={styles.item}>
            <Blogs />
          </div>
          <div className={styles.item}>
            <Podcast />
          </div>
          <div className={styles.item}>
            <Contact />
          </div>
        </div>
        <div className={styles.sidebar_two}></div>
      </div>
    </section>
  )
}

export default BaseLayout
