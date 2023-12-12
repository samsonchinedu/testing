import React from 'react'
import styles from './sponsor.module.scss'
import SideRed from '../../../Images/shape-36 (1).png'
import TopRight from '../../../Images/dark-shape-41.png'
import brand01 from '../../../Images/brand-01.png'
import brand02 from '../../../Images/brand-02.png'
import brand03 from '../../../Images/brand-03.png'
import brand04 from '../../../Images/brand-04.png'
import brand05 from '../../../Images/brand-05.png'
import brand06 from '../../../Images/brand-06.png'
import Image from 'next/image'

const Sponsor = () => {
  return (
    <div className={styles["sponsor_section"]}>
      <div className={styles["container"]}>
      <Image className={`${styles["sides_image"]} ${styles["image_1"]}`} src={SideRed} alt='Side red' />
      <Image className={`${styles["sides_image"]} ${styles["image_2"]}`} src={TopRight} alt='Top right' />
      <div className={styles["sponsor_flex"]}>
        <div className={styles["image_flex"]}>
            <Image src={brand01} alt='Brand 01' />
        </div>
        <div className={styles["image_flex"]}>
            <Image src={brand02} alt='Brand 02' />
        </div>
        <div className={styles["image_flex"]}>
            <Image src={brand03} alt='Brand 03' />
        </div>
        <div className={styles["image_flex"]}>
            <Image src={brand04} alt='Brand 04' />
        </div>
        <div className={styles["image_flex"]}>
            <Image src={brand05} alt='Brand 05' />
        </div>
        <div className={styles["image_flex"]}>
            <Image src={brand06} alt='Brand 06' />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Sponsor
