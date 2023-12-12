import React from 'react'
import styles from "./_catergory.module.scss"
import Image from 'next/image'
import { BsBriefcaseFill, BsRocketTakeoffFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa6";
import { PiCertificateBold } from "react-icons/pi";

const CardSection = () => {
  return (
    <div className={styles["card_container"]}>
      <div className={styles["card"]}>
        <div className={styles["circle"]}>
          <BsBriefcaseFill className={styles["pushs"]} />
        </div>
        <h3 className={styles["push"]}>Job Opportunities</h3>
        <p className={styles["pus"]}>One of our key target is to connect graduates to local and international job opportunities.</p>

      </div>
      <div className={styles["card"]}>
        <div className={styles["circle"]}>
          <FaGraduationCap className={styles["pushs"]} />
        </div>
        <h3 className={styles["push"]}>Internships</h3>
        <p className={styles["pus"]}>We will partner with startups and organisations to absorb graduates so they can obtain professional work experiences.</p>

      </div>
      <div className={styles["card"]}>
        <div className={styles["circle"]}>
          <BsRocketTakeoffFill className={styles["pushs"]} />
        </div>
        <h3 className={styles["push"]}>Startup Support</h3>
        <p className={styles["pus"]}>The initiative will provide incubation and mentorship support for projects and ventures by graduates. </p>

      </div>
      <div className={styles["card"]}>
        <div className={styles["circle"]}>
          <PiCertificateBold className={styles["pushs"]} />
        </div>
        <h3 className={styles["push"]}>Alumni Network</h3>
        <p className={styles["pus"]}>We will build a community of graduates to ensure sustainability of growth and opportunities across Delta state.</p>

      </div>
    </div>
  )
}

export default CardSection
