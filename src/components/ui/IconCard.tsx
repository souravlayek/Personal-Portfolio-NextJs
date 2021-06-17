import React, { ReactNode } from 'react'

import styles from '../../../styles/components.module.scss'

interface Props {
  icon: ReactNode
  title: string
}

const IconCard = ({ icon, title }: Props): JSX.Element => {
  return (
    <div className={styles.iconCard}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.title}>{title}</div>
    </div>
  )
}

export default IconCard
