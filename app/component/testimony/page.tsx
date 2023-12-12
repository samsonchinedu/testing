import React from 'react'
import styles from './testimony.module.scss'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { TbQuote } from "react-icons/tb";
import { MdOutlineStarPurple500 } from "react-icons/md";
import Profile01 from '../../../Images/testimonial-01.png'
import Green10 from '../../../Images/shape-10.png'
import Image from 'next/image';

const Testimony = () => {
    const myStyles = {
        // width: "360px",
        transitiondDuration: "0ms",
        transform: "rotateX(0deg) rotateY(0deg) scale(1)"
    }

  return (
    <div className={styles["testimony_section"]}>
      <div className={styles["container"]}>
          <div className={styles["sub_container"]}>
          <div className={styles["left_section"]}>
            <p>ENDORSEMENTS</p>
            <h2>What Stakeholders Have To Say</h2>
            <small>Hear what state and ecosystem stake holders have to say about the DSEC initiative.</small>
            <button className={styles["left_section_cta_btn"]}>
                Register <HiOutlineArrowNarrowRight className={styles["arrow_cta"]} />
            </button>
          </div>
          <div className={styles["right_section"]}>
            <div className={styles["box"]}>
                <div className={styles["profile"]}>
                    <div className={styles["profile_image"]}>
                        <Image className={styles["profile_01"]} src={Profile01} alt="Profile pics" />
                        <div className={styles["quote"]}>
                            <TbQuote />
                        </div>
                    </div>
                    <Image className={styles["green_10"]} src={Green10} alt='Green pic' />
                </div>
                <div className={styles["content"]}>
                    <p className={styles["description"]}>Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.</p>
                    <span><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /></span>
                    <h3>Ray Sanchez</h3>
                    <small>Student</small>
                </div>
            </div>
            <div className={styles["box"]}>
                <div className={styles["profile"]}>
                    <div className={styles["profile_image"]}>
                        <Image className={styles["profile_01"]} src={Profile01} alt="Profile pics" />
                        <div className={styles["quote"]}>
                            <TbQuote />
                        </div>
                    </div>
                    <Image className={styles["green_10"]} src={Green10} alt='Green pic' />
                </div>
                <div className={styles["content"]}>
                    <p className={styles["description"]}>Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.</p>
                    <span><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /></span>
                    <h3>Ray Sanchez</h3>
                    <small>Student</small>
                </div>
            </div>
            <div className={styles["box"]}>
                <div className={styles["profile"]}>
                    <div className={styles["profile_image"]}>
                        <Image className={styles["profile_01"]} src={Profile01} alt="Profile pics" />
                        <div className={styles["quote"]}>
                            <TbQuote />
                        </div>
                    </div>
                    <Image className={styles["green_10"]} src={Green10} alt='Green pic' />
                </div>
                <div className={styles["content"]}>
                    <p className={styles["description"]}>Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.</p>
                    <span><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /></span>
                    <h3>Ray Sanchez</h3>
                    <small>Student</small>
                </div>
            </div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Testimony
