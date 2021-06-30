import React from 'react'
import styles from '../../../styles/tab.module.scss'
import { HeadingText, TimelineItem, ProgressBar } from '../ui'

interface Props {
  data: {
    education_experience: experienceItem[]
    work_experience: experienceItem[]
    dev_skills: skillData[]
    professional_skills: skillData[]
  }
}

//Comparing based on the property qty
const compare = (a: experienceItem, b: experienceItem): number => {
  // a should come before b in the sorted order
  if (a.visibility_index > b.visibility_index) {
    return -1
    // a should come after b in the sorted order
  } else if (a.visibility_index < b.visibility_index) {
    return 1
    // a and b are the same
  } else {
    return 0
  }
}

const ResumeTab = (props: Props): JSX.Element => {
  const { education_experience, work_experience, dev_skills, professional_skills } = props.data

  return (
    <div className={styles.resumeTab}>
      <HeadingText title="Resume" />
      <div className={`${styles.row} ${styles.container}`}>
        <div className={styles.col_8}>
          <HeadingText title="Experience" subheading />
          <div className={styles.contentBlock}>
            {work_experience?.sort(compare)?.map((item: experienceItem) => (
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

          <HeadingText title="Education" subheading />
          <div className={styles.contentBlock}>
            {education_experience?.sort(compare)?.map((item: experienceItem) => (
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
              {dev_skills?.map((item: skillData) => (
                <ProgressBar key={Math.random()} title={item?.title} value={item?.value} />
              ))}
            </div>
          </div>
          <div className="skillContainer">
            <HeadingText title="Professional Skills" subheading />
            <div className={styles.contentBlock}>
              {professional_skills?.map((item: skillData) => (
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
