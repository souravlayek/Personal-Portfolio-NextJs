import React from 'react'
import styles from '../../../styles/tab.module.scss'
import LinkedIn from '../../assets/icons/linkedin.svg'
import GitHub from '../../assets/icons/github.svg'
import { Button, Input } from '../ui'
import Image from 'next/image'

const HomeTab = (): JSX.Element => {
  return (
    <div className={styles.homeTabContainer}>
      <div className={styles.profile}>
        <div className={styles.user_info}>
          <div className={styles.profile_pic}>
            <Image width="100%" height="100%" src="/images/profile.jpg" layout="responsive" />
          </div>
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
      </div>
      <div className={styles.heading}>Hi I’m Sourav.</div>
      <div className={styles.tagline}>I am a front-end web and app developer.</div>
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
  )
}

export default HomeTab
