'use client';

import React, { useState } from 'react'
import styles from "./_navbar.module.scss"
import Image from 'next/image'
import LightLogo from "../../../Images/logo-white.png"
import { FaTimes } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  
  const [burger, setBurger] = useState(false)
  const [icon, setIcon] = useState(false)

  const handleClick = () => {
    setBurger(!burger)
  }
  const handleIcon = () => {
    setIcon(!icon)
  }

  return (
    <div className={styles["sticky_navbar"]}>
      <div className={styles["header_left"]}>
        <h1 className={styles["logo_link"]}>
          <a href="/">
            Delta<span>preneur</span>
          </a>
        </h1>
        <div className={styles["cater"]}>
          <div className={styles["cater_wrapper"]} onClick={handleIcon}>
            <span>More intiatative</span>
          </div>
            {icon ? <ul className={styles["deltapreneur_link"]}>
              <li><a href="#">Delta Techpreneur</a></li>
              <li><a href="#">Agro Tech Initiative</a></li>
              <li><a href="#">Job Bank</a></li>
              <li><a href="#">Enterpreneurship Development</a></li>
            </ul> : null}
        </div>
      </div>
      <div className={styles["header_middle"]}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="https://deltapreneur.org">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className={styles.header_right}>
        <button className={styles.cta_btn}>
          Register <HiOutlineArrowNarrowRight className={styles.arrow_cta} />
        </button>
        <button className={styles.cta_btn_login}>
          Login <HiOutlineArrowNarrowRight className={styles.arrow_cta} />
        </button>
        <div className={styles["burger"]}>
          <GiHamburgerMenu onClick={handleClick} />
        </div>
      </div>
      { burger ? <div className={styles["mobile_nav_bar"]} onClick={handleClick} >
        <div className={styles["container"]}>
          <div className={styles["image_mobile"]}>
            <h1 className={styles["logo_link"]}>
            <a href="/">
              Delta<span>preneur</span>
            </a>
            </h1>
            <div className={styles["time_time_icon"]}>
              <FaTimes className={styles["time_icon"]} onClick={handleClick} />
            </div>
          </div>
          <ul>
            <li>Home</li>
            <li>Pages</li>
            <li>Courses</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
      </div> : null}
    </div>
  )
}

export default Navbar
