import React from 'react'
import { HeadingText, BlogCard } from '../ui'

import styles from '../../../styles/tab.module.scss'

const BlogTab = (): JSX.Element => {
  return (
    <div>
      <HeadingText title="Blogs" />
      <div className={styles.blogList}>
        <BlogCard
          date={new Date()}
          name="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          image="/images/profile.jpg"
          onClick={() => {
            // hello
          }}
        />
        <BlogCard
          date={new Date()}
          name="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          image="/images/profile.jpg"
          onClick={() => {
            // hello
          }}
        />
      </div>
    </div>
  )
}

export default BlogTab
