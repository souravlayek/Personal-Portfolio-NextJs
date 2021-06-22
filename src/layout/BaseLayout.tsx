import React, { useState } from 'react'
import Image from 'next/image'

import styles from '../../styles/BaseLayout.module.scss'

import { Button, Input } from '../components/ui'

// icons
import Home from '../assets/icons/home.svg'
import About from '../assets/icons/about.svg'
import Resume from '../assets/icons/resume.svg'
import Experience from '../assets/icons/experience.svg'
import Blogs from '../assets/icons/blogs.svg'
import Podcast from '../assets/icons/podcast.svg'
import Contact from '../assets/icons/contact.svg'
import Next from '../assets/icons/next.svg'
import Prev from '../assets/icons/prev.svg'
import Menu from '../assets/icons/menu.svg'
import LinkedIn from '../assets/icons/linkedin.svg'
import GitHub from '../assets/icons/github.svg'

interface Props {
  children: React.ReactNode
  setActiveTab: (type: 'prev' | 'next' | 'set', tabNumber?: number) => void
  currentTab: number
  data: string
  image_url: string
}

const BaseLayout = (props: Props): JSX.Element => {
  const [sideMenu, setSideMenu] = useState(false)

  const { data, image_url } = props

  const openSideMenu = (): void => {
    setSideMenu((prev) => !prev)
  }
  return (
    <section className={styles.mainContainer}>
      <div className={styles.glass}>
        <div className={styles.leftSection}>
          <div className={styles.user_info}>
            <div className={styles.profile_pic}>
              <Image width="100%" height="100%" src={image_url} layout="responsive" />
            </div>
            <div className={styles.name}>Sourav Layek</div>
            <div className={styles.designation}>{data}</div>
            {/* social icons */}
            <div className={styles.socialIcons}>
              <div className={styles.s_icon}>
                <a href="https://google.com">
                  <LinkedIn />
                </a>
              </div>
              <div className={styles.s_icon}>
                <a href="https://google.com">
                  <GitHub />
                </a>
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
          <div className={styles.copyright}>© 2021 All rights reserved.</div>
        </div>
        <div className={styles.content}>{props.children}</div>
      </div>
      {/* side bars */}
      <div className={styles.sideSection}>
        <div className={`${styles.sidebar_one} ${sideMenu ? styles.active : ''}`}>
          <div
            role="button"
            tabIndex={0}
            onClick={() => {
              props.setActiveTab('set', 0)
              openSideMenu()
            }}
            className={props.currentTab === 0 ? styles.activeItem : styles.item}
          >
            <Home />
            <span className={styles.tooltip}>Welcome</span>
          </div>
          <div
            role="button"
            tabIndex={0}
            onClick={() => {
              props.setActiveTab('set', 1)
              openSideMenu()
            }}
            className={props.currentTab === 1 ? styles.activeItem : styles.item}
          >
            <About />
            <span className={styles.tooltip}>About Me</span>
          </div>
          <div
            role="button"
            tabIndex={0}
            onClick={() => {
              props.setActiveTab('set', 2)
              openSideMenu()
            }}
            className={props.currentTab === 2 ? styles.activeItem : styles.item}
          >
            <Resume />
            <span className={styles.tooltip}>My Resume</span>
          </div>
          <div
            role="button"
            tabIndex={0}
            onClick={() => {
              props.setActiveTab('set', 3)
              openSideMenu()
            }}
            className={props.currentTab === 3 ? styles.activeItem : styles.item}
          >
            <Experience />
            <span className={styles.tooltip}>My Works</span>
          </div>
          <div
            role="button"
            tabIndex={0}
            onClick={() => {
              props.setActiveTab('set', 4)
              openSideMenu()
            }}
            className={props.currentTab === 4 ? styles.activeItem : styles.item}
          >
            <Blogs />
            <span className={styles.tooltip}>Blogs</span>
          </div>
          <div
            role="button"
            tabIndex={0}
            onClick={() => {
              props.setActiveTab('set', 5)
              openSideMenu()
            }}
            className={props.currentTab === 5 ? styles.activeItem : styles.item}
          >
            <Podcast />
            <span className={styles.tooltip}>Podcasts</span>
          </div>
          <div
            role="button"
            tabIndex={0}
            onClick={() => {
              props.setActiveTab('set', 6)
              openSideMenu()
            }}
            className={props.currentTab === 6 ? styles.activeItem : styles.item}
          >
            <Contact />
            <span className={styles.tooltip}>Contact Me</span>
          </div>
        </div>
        <div className={styles.sidebar_two}>
          <div
            role="button"
            tabIndex={0}
            onClick={() => props.setActiveTab('next')}
            className={styles.item}
          >
            <Next />
          </div>
          <div
            role="button"
            tabIndex={0}
            onClick={() => props.setActiveTab('prev')}
            className={styles.item}
          >
            <Prev />
          </div>
          <div
            role="button"
            tabIndex={0}
            onClick={() => openSideMenu()}
            className={`${styles.item} ${styles.menu}`}
          >
            <Menu />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BaseLayout
