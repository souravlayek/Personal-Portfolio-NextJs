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
          alignItems: 'center',
          fontFamily: 'Poppins',
          fontWeight: 'bold',
          fontSize: '32px',
          lineHeight: '48px',
          color: '#6287B6',
        }}
      >
        Nothing Present Here Coming Soon.
      </div>
    </>
  )
}

export default EmptyTab
