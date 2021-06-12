import React from 'react'
import styles from '../../../styles/components.module.scss'
interface Props {
  title: string
  value: number
}

const ProgressBar = ({ title, value }: Props): JSX.Element => {
  return (
    <div className={styles.progressbar}>
      <div className={styles.data}>
        <div className={styles.title}>{title}</div>
        <div className={styles.value}>{value}%</div>
      </div>
      <div className={styles.bar}>
        <div style={{ width: `${value}%` }} className={styles.innerBar}></div>
      </div>
    </div>
  )
}

export default ProgressBar
