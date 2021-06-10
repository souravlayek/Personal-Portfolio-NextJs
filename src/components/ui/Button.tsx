import React from 'react'
import styles from '../../../styles/components.module.scss'
interface Props {
  title: string
  action: () => void
}

const Button = (props: Props): JSX.Element => {
  return (
    <div className={styles.button}>
      <div className={styles.title}>{props.title}</div>
    </div>
  )
}

export default Button
