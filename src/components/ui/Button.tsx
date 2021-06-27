import React from 'react'
import { Loading } from '.'
import styles from '../../../styles/components.module.scss'
interface Props {
  title: string
  action?: () => void
  type?: 'submit' | 'reset' | 'button'
  loading?: boolean
}

const Button = (props: Props): JSX.Element => {
  return (
    <button type={props.type ?? 'button'} className={styles.button}>
      {props.loading ? <Loading /> : <div className={styles.title}>{props.title}</div>}
    </button>
  )
}

export default Button
