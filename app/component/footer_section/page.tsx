import React from 'react'
import styles from './_footer.module.scss'
import Image from 'next/image'
import LightLogo from "../../../Images/logo-white.png"
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram  } from "react-icons/fa";

const Footer = () => {
    const text = `FAQ'S`

  return (
    <div className={styles["footer_section"]}>
      <div className={styles["container"]}>
        <div className={styles["info"]}>
        <h1 className={styles["logo_link"]}>
          <a href="/">
            Delta<span>preneur</span>
          </a>
        </h1>
            <p className={styles["detail"]}>DESEC is a human capacity development initiative focused on empowering Deltans with high-demand digital skills.</p>
            <p className={styles["cont_detail"]}>WhatsApp:<span>+234 7 23 5641 231</span></p>
            <p className={styles["cont_detail"]}>Email:<span>support@desec.org</span></p>
        </div>
        <div className={styles["platform"]}>
            <h2>Site Menu</h2>
            <ul>
                <li>About DESEC</li>
                <li>Courses</li>
                <li>Register</li>
                <li>Login</li>
                <li>Contact us</li>
                <li>Events</li>

            </ul>
        </div>

        <div className={styles["contact"]}>
            <h2>Contacts</h2>
            <p>Stay updated with latest news about DESEC Programme.</p>
            <form action="">
                <input type="text" placeholder='Your email' />
                <button className={styles.cta_btn}>
                Subscribe <HiOutlineArrowNarrowRight className={styles.arrow_cta} />
                </button>
            </form>
            <div className={styles["social_icon"]}>
                <a href="facebook.com/desec" className={styles["iconify"]}><FaFacebookF /></a>
                <a href="twitter.com/desec" className={styles["iconify"]}><FaTwitter /></a>
                <a href="linkedin.com/company/desec" className={styles["iconify"]}><FaLinkedinIn /></a>
                <a href="youtube.com/@desec" className={styles["iconify"]}><FaYoutube /></a>
                <a href="instagram.com/desec" className={styles["iconify"]}><FaInstagram /></a>
            </div>
        </div>
      </div>

      <div className={styles["end_of_story"]}>
        <p>Copyright 2023. <span><a href="#"></a></span>  All Rights Reserved. Built and maintained by <span> <a href="https://qurulab.com">Quru Lab.</a> </span></p>
      </div>
    </div>
  )
}

export default Footer
