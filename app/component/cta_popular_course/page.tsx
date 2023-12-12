import React from 'react'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import styles from './_cta_popular_course.module.scss'
import CtaCard from './cta-card';

const CtaPopularCourse = () => {
  return (
    <div className={styles["cta_section"]}>
      <div className={styles["container"]}>
        <small>OUR COURSES</small>
        <h1>Available Courses</h1>
        <CtaCard />
        <div className={styles["cta_btn_container"]}>
          <div className={styles.cta_btn}>
            Register now <HiOutlineArrowNarrowRight className={styles.arrow_cta} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CtaPopularCourse
