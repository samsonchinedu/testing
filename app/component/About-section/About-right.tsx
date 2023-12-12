import React from 'react'
import styles from './_about.module.scss'
import { GiCheckMark } from "react-icons/gi";

const AboutRight = () => {
  return (
    <div className={`${styles["about_right"]} ${styles["subset"]}`}>
      <small>OUR MISSION</small>
      <div className={styles["right_learning"]}>
          <h1>Supporting the <br /> <span>M.O.R.E Agenda</span></h1>
      </div>
      <p>This Initiative is aligned to support the vision of the Delta State government led by His Excellency, <span> Rt. Hon. Sheriff Oborevwori</span> </p>
      <ul>
        <li><GiCheckMark className={styles["checkmark"]} /> Meaningful Development</li>
        <li><GiCheckMark className={styles["checkmark"]} /> Opportunities for All</li>
        <li><GiCheckMark className={styles["checkmark"]} /> Realistic Reforms</li>
        <li><GiCheckMark className={styles["checkmark"]} /> Enhanced Peace and Security</li>
      </ul>
    </div>
  )
}

export default AboutRight
