import React from 'react'
import { HeadingText } from '../ui'

interface Props {
  title: string
}

const EmptyTab = (props: Props): JSX.Element => {
  return (
    <>
      <HeadingText title={props.title} />
      <div
        style={{
          width: '100%',
          height: '80%',
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
          alignItems: 'center',
          fontFamily: 'Poppins',
          fontWeight: 'bold',
          fontSize: '32px',
          lineHeight: '48px',
          color: 'rgba(255, 255, 255, 0.75)',
          textShadow: '5px 4px 4px rgba(168, 168, 168, 0.25)',
        }}
      >
        Nothing Present Here Coming Soon.
      </div>
    </>
  )
}

export default EmptyTab
