import React from 'react'
import styles from '../../../styles/components.module.scss'

interface Props {
  timeSpan: string
  company: string
  companyCation?: string
  title: string
  data: string
}

const TimelineItem = ({
  timeSpan,
  company,
  companyCation = '',
  title,
  data,
}: Props): JSX.Element => {
  return (
    <div className={styles.timelineItem}>
      <div className={styles.leftData}>
        <div className={styles.mainHeading}>{timeSpan}</div>
        <div className={styles.content}>
          <div className={styles.subheading}>{company}</div>
          <div className={styles.caption}>{companyCation}</div>
        </div>
      </div>
      <div className={styles.bulletWrapper}>
        <div className={styles.bullet}>
          <div className={styles.innerBullet}></div>
        </div>
      </div>
      <div className={styles.rightData}>
        <div className={styles.heading}>{title}</div>
        <div className={styles.data}>{data}</div>
      </div>
    </div>
  )
}

export default TimelineItem
