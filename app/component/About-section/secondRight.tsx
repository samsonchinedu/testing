import React from 'react'
import styles from './_about.module.scss'
import { GiCheckMark } from "react-icons/gi";

const SecondRight = () => {
  return (
    <div className={`${styles["about_right"]} ${styles["subset"]}`}>
      <small>PROGRAM FLOW</small>
      <div className={styles["right_learning"]}>
          <h1>HOW IT <span>WORKS</span></h1>
      </div>
      <p> <span> Below is an outline for the entire program, from start to finish.</span> </p>
      <ul>
        <li><GiCheckMark className={styles["checkmark"]} /> Registration</li>
        <li><GiCheckMark className={styles["checkmark"]} /> Assessment & Vetting</li>
        <li><GiCheckMark className={styles["checkmark"]} /> Student Orientation & Onboarding</li>
        <li><GiCheckMark className={styles["checkmark"]} /> Lectures and Training</li>
        <li><GiCheckMark className={styles["checkmark"]} /> Examination</li>
        <li><GiCheckMark className={styles["checkmark"]} /> Graduation </li>

      </ul>
    </div>
  )
}

export default SecondRight
