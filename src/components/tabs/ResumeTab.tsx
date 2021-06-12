import React from 'react'
import styles from '../../../styles/tab.module.scss'
import { HeadingText, TimelineItem, ProgressBar } from '../ui'

// interface Props {}

const ResumeTab = (): JSX.Element => {
  return (
    <div className={styles.resumeTab}>
      <HeadingText title="Resume" />
      <div className={`${styles.row} ${styles.container}`}>
        <div className={styles.col_8}>
          <HeadingText title="Experience" subheading />
          <div className={styles.contentBlock}>
            <TimelineItem
              timeSpan="2020 Dec - 2021 Mar"
              title="Lead Front-end Developer"
              company="Lapolo"
              companyCation="@demoCaption"
              data="Back again to lapolo with a new post as lead front end developer. Uses react js and build three major websites and also get love from the team members."
            />
            <TimelineItem
              timeSpan="2020 Dec - 2021 Mar"
              title="Lead Front-end Developer"
              company="Lapolo"
              companyCation="@demoCaption"
              data="Back again to lapolo with a new post as lead front end developer. Uses react js and build three major websites and also get love from the team members."
            />
            <TimelineItem
              timeSpan="2020 Dec - 2021 Mar"
              title="Lead Front-end Developer"
              company="Lapolo"
              companyCation="@demoCaption"
              data="Back again to lapolo with a new post as lead front end developer. Uses react js and build three major websites and also get love from the team members."
            />
            <TimelineItem
              timeSpan="2020 Dec - 2021 Mar"
              title="Lead Front-end Developer"
              company="Lapolo"
              companyCation="@demoCaption"
              data="Back again to lapolo with a new post as lead front end developer. Uses react js and build three major websites and also get love from the team members."
            />
          </div>
        </div>
        <div className={styles.col_4}>
          <div className="skillContainer">
            <HeadingText title="Development Skills" subheading />
            <div className={styles.contentBlock}>
              <ProgressBar title="React JS" value={60} />
              <ProgressBar title="Next JS" value={80} />
              <ProgressBar title="React-Native" value={20} />
              <ProgressBar title="Flutter" value={70} />
            </div>
          </div>
          <div className="skillContainer">
            <HeadingText title="Professional Skills" subheading />
            <div className={styles.contentBlock}>
              <ProgressBar title="React JS" value={60} />
              <ProgressBar title="Next JS" value={80} />
              <ProgressBar title="React-Native" value={20} />
              <ProgressBar title="Flutter" value={70} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumeTab
