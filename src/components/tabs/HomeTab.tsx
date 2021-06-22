import React from 'react'
import styles from '../../../styles/tab.module.scss'
import LinkedIn from '../../assets/icons/linkedin.svg'
import GitHub from '../../assets/icons/github.svg'
import { Button, Input } from '../ui'
import Image from 'next/image'

interface Props {
  data: string
  image_url: string
}

const HomeTab = (props: Props): JSX.Element => {
  return (
    <div className={styles.homeTabContainer}>
      <div className={styles.profile}>
        <div className={styles.user_info}>
          <div className={styles.profile_pic}>
            <Image width="100%" height="100%" src={props.image_url} layout="responsive" />
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
      <div className={styles.tagline}>{props.data}</div>
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
