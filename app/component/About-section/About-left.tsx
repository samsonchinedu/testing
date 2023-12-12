import React from 'react'
import styles from './_about.module.scss'
import Image from 'next/image'
import AboutImage from '../../../Images/about-03.webp'
import governor from '../../../Images/HonSheriff.jpeg'
import AboutShape06 from '../../../Images/shape-06.png'
import AboutShape37 from '../../../Images/shape-37.png'
import AboutShape38 from '../../../Images/shape-38.png'
import { MdVerified } from "react-icons/md";

const AboutLeft = () => {
  return (
    <div className={`${styles["about_left"]} ${styles["subset"]}`}>
      <Image className={styles["image_about"]} src={governor} alt='About image' />
      <div className={styles["user_count"]}>
        <MdVerified className={styles["user_count_icon"]} />
        <div>
          <h3>His Excellency</h3>
          <p>Hon. Sheriff Oborevwori </p>
        </div>
      </div>
        <Image className={styles["about_image_06"]} src={AboutShape06} alt='About shape 06' />
        <Image className={styles["about_image_37"]} src={AboutShape37} alt='About shape 37' />
        <Image className={styles["about_image_38"]} src={AboutShape38} alt='About shape 38' />
      </div>
  )
}

export default AboutLeft
