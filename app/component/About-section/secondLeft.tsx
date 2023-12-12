import React from 'react'
import styles from './_about.module.scss'
import Image from 'next/image'
import AboutImage from '../../../Images/about-03.webp'
import AboutShape03 from '../../../Images/shape-03 (1).png'
import AboutShape06 from '../../../Images/shape-06.png'
import AboutShape37 from '../../../Images/shape-37.png'
import AboutShape38 from '../../../Images/shape-38.png'
import { RiUserAddLine } from "react-icons/ri";

const SecondLeft = () => {
  return (
    <div className={`${styles["about_left"]} ${styles["subset"]}`}>
      <Image className={styles["image_about"]} src={AboutImage} alt='About image' />
      {/* <div className={styles["user_detail"]}>
        <Image src={AboutShape03} alt='Shape 03 image' />
        <h3>Ray Sanchez</h3>
        <p>Minim veniam nostrud exer citation.</p>
      </div>  */}
      <div className={styles["user_count"]}>
        <RiUserAddLine className={styles["user_count_icon"]} />
        <div>
          <h3>20K</h3>
          <p>Enrolled Learners</p>
        </div>
      </div>
        <Image className={styles["about_image_06"]} src={AboutShape06} alt='About shape 06' />
        <Image className={styles["about_image_37"]} src={AboutShape37} alt='About shape 37' />
        <Image className={styles["about_image_38"]} src={AboutShape38} alt='About shape 38' />
      </div>
  )
}

export default SecondLeft
