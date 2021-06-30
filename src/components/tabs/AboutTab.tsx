import React from 'react'
import { HeadingText, TestimonialCard } from '../../components/ui'

import styles from '../../../styles/tab.module.scss'

interface Props {
  data: any
}

const AboutTab = (props: Props): JSX.Element => {
  const { base_info, contact_details, testimonials, work } = props.data

  return (
    <div className={styles.AboutTab}>
      <div className={styles.content}>
        <HeadingText title="About Me" />
        <div className={styles.row}>
          <div className={`${styles.col_6} ${styles.text}`}>{base_info}</div>
          <div className={styles.col_6}>
            <div className={styles.detailsItem}>
              <span className={styles.title}>Residence:</span> {contact_details?.residence}
            </div>
            <div className={styles.detailsItem}>
              <span className={styles.title}>Address:</span> {contact_details?.address}
            </div>
            <div className={styles.detailsItem}>
              <span className={styles.title}>E-mail:</span> {contact_details?.email}
            </div>
            <div className={styles.detailsItem}>
              <span className={styles.title}>Phone:</span> {contact_details?.phone}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <HeadingText title="What I do" />
        <div className={styles.row}>
          <div className={`${styles.col_4} ${styles.text}`}>
            <div className={styles.workTypeItem}>
              <div className={styles.heading}>Web</div>
              <div className={styles.data}>{work?.web}</div>
            </div>
          </div>
          <div className={`${styles.col_4} ${styles.text}`}>
            <div className={styles.workTypeItem}>
              <div className={styles.heading}>Mobile</div>
              <div className={styles.data}>{work?.mobile}</div>
            </div>
          </div>
          <div className={`${styles.col_4} ${styles.text}`}>
            <div className={styles.workTypeItem}>
              <div className={styles.heading}>Hybrid</div>
              <div className={styles.data}>{work?.hybrid}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <HeadingText title="Testimonials" />
        <div className={styles.testimonials}>
          {testimonials?.map((item: any) => (
            <TestimonialCard
              key={Math.random()}
              name={item?.name}
              data={item?.review}
              company={item?.company}
              image={item?.image}
              designation={item?.designation}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutTab
