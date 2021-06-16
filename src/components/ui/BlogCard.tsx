import React from 'react'
import Image from 'next/image'
import styles from '../../../styles/components.module.scss'

import OpenIcon from '../../assets/icons/open.svg'

interface Props {
  image: string
  date: Date
  name: string
  onClick: React.MouseEventHandler<Element>
}

const BlogCard = ({ image, date, name, onClick }: Props): JSX.Element => {
  return (
    <div className={styles.projectItemCard}>
      <div role="button" tabIndex={0} onClick={onClick} className={styles.wrapper}>
        <OpenIcon />
      </div>
      <div className={styles.imageContainer}>
        <Image src={image} alt={name} width="497px" height="210px" layout="responsive" />
      </div>
      <div className={styles.content}>
        <div className={styles.minorDetails}>
          {date.toLocaleDateString('en-US', { dateStyle: 'medium' })}
        </div>
        <div className={styles.details}>{name}</div>
      </div>
    </div>
  )
}

export default BlogCard
