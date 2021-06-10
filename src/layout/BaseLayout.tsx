import React from 'react'
import Image from 'next/image'

import styles from '../../styles/BaseLayout.module.scss'
import Home from '../assets/icons/home.svg'
import About from '../assets/icons/about.svg'
import Resume from '../assets/icons/resume.svg'
import Experience from '../assets/icons/experience.svg'
import Blogs from '../assets/icons/blogs.svg'
import Podcast from '../assets/icons/podcast.svg'
import Contact from '../assets/icons/contact.svg'
import Next from '../assets/icons/next.svg'
import Prev from '../assets/icons/prev.svg'
import LinkedIn from '../assets/icons/linkedin.svg'
import GitHub from '../assets/icons/github.svg'
import { Button, Input } from '../components/ui'

interface Props {
  children: React.ReactNode
}

const BaseLayout = (props: Props): JSX.Element => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.glass}>
        <div className={styles.leftSection}>
          <div className={styles.user_info}>
            <div className={styles.profile_pic}>
              <Image width="100%" height="100%" src="/images/profile.jpg" layout="responsive" />
            </div>
            <div className={styles.name}>Sourav Layek</div>
            <div className={styles.designation}>Software Developer</div>
            <div className={styles.socialIcons}>
              <div className={styles.s_icon}>
                <LinkedIn />
              </div>
              <div className={styles.s_icon}>
                <GitHub />
              </div>
            </div>
          </div>
          <div className={styles.cta}>
            <Input placeholder="Email Address" name="email" type="email" />
            <Button
              title="Connect With Me"
              action={() => {
                console.log('click')
              }}
            />
          </div>
        </div>
        <div className={styles.content}>{props.children}</div>
      </div>
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
        <div className={styles.sidebar_two}>
          <div className={styles.item}>
            <Next />
          </div>
          <div className={styles.item}>
            <Prev />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BaseLayout
