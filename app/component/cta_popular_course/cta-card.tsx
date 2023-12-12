import React from 'react'
import thumbnail01 from '../../../Images/course-01.jpg'
import styles from './_cta_popular_course.module.scss'
import Image from 'next/image'
import { TbDeviceAnalytics } from "react-icons/tb";
import { HiSparkles } from "react-icons/hi";
import { FaPencilRuler } from "react-icons/fa";
import { TbShieldLockFilled } from "react-icons/tb";
import { PiBoundingBoxFill } from "react-icons/pi";
import { BsLaptop } from "react-icons/bs";
import { VscFileSubmodule } from "react-icons/vsc";
import { LuUser2 } from "react-icons/lu";

const CtaCard = () => {
    const courses = [
        {
            id: 1,
            icon: <TbShieldLockFilled />,
            courseName: "CYBER SECURITY",
            module: "12 Modules"
        },
        {
            id: 2,
            icon: <PiBoundingBoxFill />,
            courseName: "BLOCKCHAIN & CRYPTO",
            module: "12 Modules"
        },
        {
            id: 3,
            icon: <BsLaptop />,
            courseName: "DIGITAL MARKETING",
            module: "12 Modules"
        },
        {
            id: 4,
            icon: <FaPencilRuler />,
            courseName: "UI/UX DESIGN",
            module: "12 Modules"
        },
        {
            id: 5,
            icon: <HiSparkles />,
            courseName: "ARTIFICIAL INTELLIGENCE",
            module: "12 Modules"
        },
        {
            id: 6,
            icon: <TbDeviceAnalytics />,
            courseName: "DATA ANALYTICS",
            module: "12 Modules"
        }
    ]


  return (
    <div className={styles["cta_cards"]}>
       { courses.map((course) => {
       return (
          <div className={styles["cta_cards_box"]} key={course.id}>
            <div className={styles["icon"]}>{course.icon}</div>
            <div className={styles["to_right"]}>
                <h6>{course.courseName}</h6>
                <div className={styles["challenge"]}>
                    <span className={styles["text_icon"]}><VscFileSubmodule /></span>
                    <span className={styles["text"]}>{course.module}</span>
                </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CtaCard
