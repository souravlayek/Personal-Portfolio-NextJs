import React, { useState } from 'react'
import { HeadingText, ProjectItemCard } from '../ui'
import Image from 'next/image'
import styles from '../../../styles/tab.module.scss'
import { getIconUrl } from '../../utils/helperFunction'
import Prev from '../../assets/icons/prev.svg'

const PortfolioTab = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0)

  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const TABS = ['All', 'Mobile', 'Web', 'Others']

  return (
    <div className={styles.portfolioTab}>
      {isDetailsOpen ? (
        <>
          <div
            role="button"
            tabIndex={0}
            onClick={() => setIsDetailsOpen(false)}
            className={styles.backButton}
          >
            <Prev />
          </div>
          <HeadingText title="Project Name" />
          <div className={styles.details}>
            <div className={styles.imageWrapper}>
              <Image src="/images/profile.jpg" width="1000px" height="280px" layout="responsive" />
            </div>
            <div className="row">
              <div className="col_6">
                <div className={styles.about}>
                  <HeadingText title="About" subheading />
                  <div className={styles.content}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit ut aliquam,Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit ut aliquam
                  </div>
                </div>
              </div>
              <div className="col_6">
                <div className={styles.challenges}>
                  <HeadingText title="Challenges" subheading />
                  <div className={styles.content}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit ut aliquam,Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit ut aliquam
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <HeadingText title="Portfolio" />
          <div className={styles.tabs}>
            {TABS.map((item, index) => (
              <div
                key={Math.random()}
                role="button"
                tabIndex={0}
                onClick={() => setActiveTab(index)}
                className={`${styles.tabItem} ${activeTab === index ? styles.active : ''}`}
              >
                {item}
              </div>
            ))}
          </div>
          <div className={styles.portfolioItemList}>
            <ProjectItemCard
              name="Project 1"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus harum magni, hic repudiandae quam error."
              image="/images/profile.jpg"
              technologies={[getIconUrl('flutter'), getIconUrl('dart')]}
              onClick={() => setIsDetailsOpen(true)}
            />
            <ProjectItemCard
              name="Project 1"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus harum magni, hic repudiandae quam error."
              image="/images/profile.jpg"
              technologies={[getIconUrl('flutter'), getIconUrl('dart')]}
              onClick={() => setIsDetailsOpen(true)}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default PortfolioTab
