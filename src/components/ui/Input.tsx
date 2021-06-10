import React from 'react'
import styles from '../../../styles/components.module.scss'

interface Props {
  name: string
  type?: 'text' | 'email'
  placeholder: string
}

const Input = ({ name, type = 'text', placeholder }: Props): JSX.Element => {
  return (
    <div className={styles.inputBox}>
      <input type={type} name={name} className={styles.inputField} placeholder={placeholder} />
    </div>
  )
}

export default Input
