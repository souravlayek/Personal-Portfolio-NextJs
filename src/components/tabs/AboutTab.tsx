import React from 'react'
import { HeadingText, TestimonialCard } from '../../components/ui'

import styles from '../../../styles/tab.module.scss'

const AboutTab = (): JSX.Element => {
  return (
    <div className={styles.AboutTab}>
      <div className="content">
        <HeadingText title="About Me" />
        <div className={styles.row}>
          <div className={`${styles.col_6} ${styles.text}`}>
            A front end developer in UK. I specialize in Front-End development specifically I work
            on React Js, NextJs, React-native and flutter.
          </div>
          <div className={styles.col_6}>
            <div className={styles.detailsItem}>
              <span className={styles.title}>Residence:</span> India
            </div>
            <div className={styles.detailsItem}>
              <span className={styles.title}>Address:</span> Machbanda, MTPS, Bankura, West Bengal,
              722183
            </div>
            <div className={styles.detailsItem}>
              <span className={styles.title}>E-mail:</span> hello@thesouravlayek.com
            </div>
            <div className={styles.detailsItem}>
              <span className={styles.title}>Phone:</span> -91 8617 552 545
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <HeadingText title="What I do" />
        <div className={styles.row}>
          <div className={`${styles.col_4} ${styles.text}`}>
            <div className={styles.workTypeItem}>
              <div className={styles.heading}>Mobile</div>
              <div className={styles.data}>
                I use React-native or Flutter and make any Idea into a real App.
              </div>
            </div>
          </div>
          <div className={`${styles.col_4} ${styles.text}`}>
            <div className={styles.workTypeItem}>
              <div className={styles.heading}>Web</div>
              <div className={styles.data}>
                I use React js or next js to make your imagination into a real working web app with
                PWA support and SEO optimized.
              </div>
            </div>
          </div>
          <div className={`${styles.col_4} ${styles.text}`}>
            <div className={styles.workTypeItem}>
              <div className={styles.heading}>Hybrid</div>
              <div className={styles.data}>
                You want to make an website and also an app which can be depoly to play store or app
                store. don’t worry hold my hand and I will complete that for you.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <HeadingText title="Testimonials" />
        <div className={styles.testimonials}>
          <TestimonialCard
            name="Sam Will"
            data="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, corrupti magni? Accusamus vero beatae molestiae eaque totam dicta ullam! Illo?"
            company="Home Decor"
            image="/images/profile.jpg"
          />
          <TestimonialCard
            name="Sam Will"
            data="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, corrupti magni? Accusamus vero beatae molestiae eaque totam dicta ullam! Illo?"
            company="Home Decor"
            image="/images/profile.jpg"
          />
          <TestimonialCard
            name="Sam Will"
            data="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, corrupti magni? Accusamus vero beatae molestiae eaque totam dicta ullam! Illo?"
            company="Home Decor"
            image="/images/profile.jpg"
          />
        </div>
      </div>
    </div>
  )
}

export default AboutTab
