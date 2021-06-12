import React from 'react'
import Image from 'next/image'
import styles from '../../../styles/components.module.scss'

interface Props {
  name: string
  data: string
  image: string
  company: string
}

const TestimonialCard = (props: Props): JSX.Element => {
  return (
    <div className={styles.testimonialCard}>
      <div className={styles.image}>
        <Image src={props.image} width="100px" height="100px" layout="responsive" />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.data}>{props.data}</div>
        <div className={styles.quoteBackground}>
          <Image src="/images/quote.png" width="174px" height="138px" layout="responsive" />
        </div>
        <div className={styles.userDetails}>
          <div className={styles.name}>{props.name}</div>
          <div className={styles.company}>{props.company}</div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
