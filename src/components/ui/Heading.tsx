import React from 'react'
import styles from '../../../styles/components.module.scss'
import CircleGrid from '../../assets/icons/circleGrid.svg'
import SmallCircleGrid from '../../assets/icons/smallCircleGrid.svg'

interface Props {
  title: string
  subheading?: boolean
}

const Heading = ({ title, subheading = false }: Props): JSX.Element => {
  const splitHeading = (text: string): string[] => {
    const wordList = text.split(' ')
    const notColoredString = wordList.slice(0, -1).join(' ')
    const coloredString = wordList.slice(-1)[0]
    if (wordList.length === 1) {
      return [coloredString, notColoredString]
    }
    return [notColoredString, coloredString]
  }
  const [notColoredString, coloredString] = splitHeading(title)
  return (
    <div className={subheading ? styles.subHeadingText : styles.headingText}>
      <span className={styles.main}>{notColoredString}</span>
      <span className={styles.colored}>{' ' + coloredString}</span>
      <div className={styles.background}>{subheading ? <SmallCircleGrid /> : <CircleGrid />}</div>
    </div>
  )
}

export default Heading
