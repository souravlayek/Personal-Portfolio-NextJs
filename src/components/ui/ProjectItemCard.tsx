import React from 'react'
import Image from 'next/image'
import styles from '../../../styles/components.module.scss'

import OpenIcon from '../../assets/icons/open.svg'

interface Props {
  image: string
  technologies: Array<string>
  name: string
  description: string
  onClick: React.MouseEventHandler<Element>
  // link will look like
  // can call getIconUrl()
  // https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/flutter/flutter.png
}

const ProjectItemCard = ({
  image,
  technologies,
  name,
  description,
  onClick,
}: Props): JSX.Element => {
  return (
    <div className={styles.projectItemCard}>
      <div role="button" tabIndex={0} onClick={onClick} className={styles.wrapper}>
        <OpenIcon />
      </div>
      <div className={styles.imageContainer}>
        <Image src={image} alt={name} width="497px" height="210px" layout="responsive" />
      </div>
      <div className={styles.content}>
        <div className={styles.minorDetails}>{name}</div>
        <div className={styles.usedTechnologies}>
          {technologies?.map((item) => (
            <Image key={Math.random()} src={item} width="15px" height="15px" />
          ))}
        </div>
        <div className={styles.details}>{description.slice(0, 60)}...</div>
      </div>
    </div>
  )
}

export default ProjectItemCard
