import React from 'react'
import styles from './_about.module.scss'
import AboutLeft from './About-left'
import AboutRight from './About-right'
import SecondRight from './secondRight'
import SecondLeft from './secondLeft'

const AboutSection = () => {
  return (
    <div className={styles["about_section"]}>

      <div className={styles["container"]}>
        <div className={styles["duplicated_up"]}>
          <AboutLeft />
          <AboutRight />
        </div>
        <div className={styles["duplicated_down"]}>
          <SecondRight />
          <SecondLeft />
        </div>
      </div>
    </div>
  )
}

export default AboutSection
