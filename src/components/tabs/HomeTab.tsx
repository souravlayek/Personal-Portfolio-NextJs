import React from 'react'
import styles from '../../../styles/tab.module.scss'

const HomeTab = (): JSX.Element => {
  return (
    <div className={styles.homeTabContainer}>
      <div className={styles.heading}>Hi I’m Sourav.</div>
      <div className={styles.tagline}>I am a front-end web and app developer.</div>
    </div>
  )
}

export default HomeTab
