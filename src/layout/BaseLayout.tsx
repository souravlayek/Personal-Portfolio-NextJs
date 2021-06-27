import React, { useState } from 'react'
import Image from 'next/image'

import styles from '../../styles/BaseLayout.module.scss'

import { Button } from '../components/ui'
import { Formik, Form, Field } from 'formik'

import * as Yup from 'yup'
import { useToasts } from 'react-toast-notifications'

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

const shimmer = (w: number | string, h: number | string): string => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str)

const BaseLayout = (props: Props): JSX.Element => {
  const { addToast } = useToasts()
  const [loading, setLoading] = useState(false)

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
  })

  const [sideMenu, setSideMenu] = useState(false)

  const { data, image_url } = props

  const openSideMenu = (): void => {
    setSideMenu((prev) => !prev)
  }

  const handleSubmit = (value: any, actions: any): void => {
    console.log('Sending')
    actions.setSubmitting(false)
    const data = {
      email: value.email,
    }
    setLoading(true)
    fetch('/api/connect', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log('Response received')
        if (res.status === 200) {
          console.log('Response succeeded!')
          addToast('Thanks for connecting..', { appearance: 'success', autoDismiss: true })
          setLoading(false)
          actions.resetForm({
            values: {
              email: '',
            },
          })
        }
      })
      .catch((err) => {
        console.log(err)
        addToast('Sorry! something went wrong.', { appearance: 'error', autoDismiss: true })
        setLoading(false)
      })
  }

  return (
    <section className={styles.mainContainer}>
      <div className={styles.glass}>
        <div className={styles.leftSection}>
          <div className={styles.user_info}>
            <div className={styles.profile_pic}>
              <Image
                width="100%"
                height="100%"
                src={image_url}
                layout="responsive"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(127, 127))}`}
              />
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
            <Formik
              initialValues={{
                email: '',
              }}
              validationSchema={validationSchema}
              onSubmit={(values, actions) => {
                // same shape as initial values
                console.log(values)
                handleSubmit(values, actions)
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <Field className={styles.input} name="email" placeholder="Email Address" />
                  {errors.email && touched.email && (
                    <div className={styles.errorMessage}>{errors.email}</div>
                  )}
                  <Button title="Connect With Me" type="submit" loading={loading} />
                </Form>
              )}
            </Formik>
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
