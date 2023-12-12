import React from 'react'
import styles from "./_hero-section.module.scss"
import Image from 'next/image'
import Cupgirl from "../../../Images/girl-2.webp"
import Laptop from "../../../Images/man-1.webp"
import DarkShape from "../../../Images/dark-shape-13.png"
import ShapeGreen from "../../../Images/shape-12.png"
import Shape04 from "../../../Images/shape-04 (1).png"
import DarkShape09 from "../../../Images/dark-shape-09.png"
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const HeroSection = () => {
  return (
    <div className={styles.hero_section}>
      <div className={styles.hero_left}>
        <h1>
            Digital Skills & <span>Entrepreneurship</span> Development
        </h1>
        <p>Delta Techpreneur is a human capacity development initiative focused on empowering Deltans with high-demand digital skills.</p>
        <button className={styles.cta_btn}>
           Register  <HiOutlineArrowNarrowRight className={styles.arrow_cta} />
        </button>
      </div>
      <div className={styles.hero_right}>
        <Image src={Cupgirl} alt="Coffe girl" className={styles.banner_girl} />
        <Image src={Laptop} alt="Coffe girl" className={styles.banner_man} />
        <div className={styles.banner_support}>
            <div>
                <FaPhoneAlt />
            </div>
            <div>
                <small>ONLINE SUPPORT (WhatsApp)</small>
                <p>+234 70 123 4567</p>
            </div>
        </div>
        <Image src={DarkShape} alt="Coffe girl" className={styles.banner_13} />
        <Image src={ShapeGreen} alt="Coffe girl" className={styles.banner_greendot} />
        <Image src={DarkShape09} alt="Coffe girl" className={styles.banner_09} />
        <Image src={Shape04} alt="Coffe girl" className={styles.banner_03} />
      </div>
    </div>
  )
}

export default HeroSection
