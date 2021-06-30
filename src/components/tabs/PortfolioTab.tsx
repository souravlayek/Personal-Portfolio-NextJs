import React, { useEffect, useState } from 'react'
import { HeadingText, ProjectItemCard } from '../ui'
import Image from 'next/image'
import styles from '../../../styles/tab.module.scss'
import { getIconUrl } from '../../utils/helperFunction'
import Prev from '../../assets/icons/prev.svg'

interface Props {
  data: any
}

const PortfolioTab = (props: Props): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0)

  const allProjects = props?.data?.projects ?? []
  const [renderableProjects, setRenderableProjects] = useState(allProjects || [])

  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const [projectDetails, setProjectDetails] = useState<any>(undefined)

  const TABS = ['All', 'Mobile', 'Web', 'Other']

  useEffect(() => {
    if (activeTab === 0) {
      setRenderableProjects(allProjects)
    } else {
      setRenderableProjects(
        allProjects?.filter(
          (item: any) => item.type.toLowerCase() === TABS[activeTab].toLowerCase()
        )
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab])

  return (
    <div className={styles.portfolioTab}>
      {isDetailsOpen ? (
        <>
          <div
            role="button"
            tabIndex={0}
            onClick={() => {
              setIsDetailsOpen(false)
              setProjectDetails(undefined)
            }}
            className={styles.backButton}
          >
            <Prev />
          </div>
          <HeadingText title={projectDetails?.title} />
          <div className={styles.details}>
            <div className={styles.imageWrapper}>
              <Image
                src={projectDetails?.image}
                width="1000px"
                height="380px"
                layout="responsive"
              />
            </div>
            <div className="row">
              <div className="col_6">
                <div className={styles.about}>
                  <HeadingText title="About" subheading />
                  <div className={styles.content}>{projectDetails?.about}</div>
                </div>
              </div>
              <div className="col_6">
                <div className={styles.challenges}>
                  <HeadingText title="Challenges" subheading />
                  <div className={styles.content}>{projectDetails?.challenges}</div>
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
            {renderableProjects?.map((item: any) => (
              <ProjectItemCard
                key={Math.random()}
                name={item?.title}
                description={item?.small_details}
                image={item?.image}
                technologies={item?.tech_used?.map((item: string) => getIconUrl(item))}
                onClick={() => {
                  setIsDetailsOpen(true)
                  setProjectDetails(item)
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default PortfolioTab
