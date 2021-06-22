import React from 'react'
import styles from '../../../styles/tab.module.scss'
import { HeadingText, TimelineItem, ProgressBar } from '../ui'

interface Props {
  data: any
}

const ResumeTab = (props: Props): JSX.Element => {
  const { experience, dev_skills, professional_skills } = props.data
  return (
    <div className={styles.resumeTab}>
      <HeadingText title="Resume" />
      <div className={`${styles.row} ${styles.container}`}>
        <div className={styles.col_8}>
          <HeadingText title="Experience" subheading />
          <div className={styles.contentBlock}>
            {experience?.map((item: any) => (
              <TimelineItem
                key={Math.random()}
                timeSpan={`${item?.start_time} - ${item?.end_time}`}
                title={item?.title}
                company={item?.worked_for}
                companyCation={item?.additional_details}
                data={item?.about}
              />
            ))}
          </div>
        </div>
        <div className={styles.col_4}>
          <div className="skillContainer">
            <HeadingText title="Development Skills" subheading />
            <div className={styles.contentBlock}>
              {dev_skills?.map((item: any) => (
                <ProgressBar key={Math.random()} title={item?.title} value={item?.value} />
              ))}
            </div>
          </div>
          <div className="skillContainer">
            <HeadingText title="Professional Skills" subheading />
            <div className={styles.contentBlock}>
              {professional_skills?.map((item: any) => (
                <ProgressBar key={Math.random()} title={item?.title} value={item?.value} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumeTab
