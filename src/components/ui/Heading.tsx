import React from 'react'
import styles from '../../../styles/components.module.scss'
import CircleGrid from '../../assets/icons/circleGrid.svg'

interface Props {
  title: string
}

const Heading = (props: Props): JSX.Element => {
  const splitHeading = (text: string): string[] => {
    const wordList = text.split(' ')
    const notColoredString = wordList.slice(0, -1).join(' ')
    const coloredString = wordList.slice(-1)[0]
    if (wordList.length === 1) {
      return [coloredString, notColoredString]
    }
    return [notColoredString, coloredString]
  }
  const [notColoredString, coloredString] = splitHeading(props.title)
  return (
    <div className={styles.headingText}>
      <span className={styles.main}>{notColoredString}</span>
      <span className={styles.colored}>{' ' + coloredString}</span>
      <div className={styles.background}>
        <CircleGrid />
      </div>
    </div>
  )
}

export default Heading
