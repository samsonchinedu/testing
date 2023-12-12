import React from 'react'
import styles from './blog_section.module.scss'
import Blog01 from '../../../Images/blog-01.jpg'
import Image from 'next/image'
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa6";
import { VscArrowSmallRight } from "react-icons/vsc";

const BlogSection = () => {
  return (
    <div className={styles["get_news_section"]}>
      <div className={styles["title"]}>
        <small>LATEST ARTICLES</small>
        <h2>Tech Deltapreneur</h2>
      </div>

      <div className={styles["get_news_card"]}>
        <div className={styles["card_container"]}>
          <div className={styles["card"]}>
            <div className={styles["container_blog"]}>
              <Image className={styles["blog_image"]} src={Blog01} alt='Blog 01' />
            </div>
            <div className={styles["arrow_pointer"]}>
              <VscArrowSmallRight />
            </div>
            <div className={styles["content"]}>
              <h5>ONLINE</h5>
              <h4>Become a Better Blogger: Content Planning</h4>
              <div className={styles["content_time"]}>
                <div className={styles["calender"]}>
                  <FaRegCalendarCheck className={styles["icon_detail"]} />
                  <span>Oct 10, 2022</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["card"]}>
            <div className={styles["container_blog"]}>
              <Image className={styles["blog_image"]} src={Blog01} alt='Blog 01' />
            </div>
            <div className={styles["arrow_pointer"]}>
              <VscArrowSmallRight />
            </div>
            <div className={styles["content"]}>
              <h5>ONLINE</h5>
              <h4>Become a Better Blogger: Content Planning</h4>
              <div className={styles["content_time"]}>
                <div className={styles["calender"]}>
                  <FaRegCalendarCheck className={styles["icon_detail"]} />
                  <span>Oct 10, 2022</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["card"]}>
            <div className={styles["container_blog"]}>
              <Image className={styles["blog_image"]} src={Blog01} alt='Blog 01' />
            </div>
            <div className={styles["arrow_pointer"]}>
              <VscArrowSmallRight />
            </div>
            <div className={styles["content"]}>
              <h5>ONLINE</h5>
              <h4>Become a Better Blogger: Content Planning</h4>
              <div className={styles["content_time"]}>
                <div className={styles["calender"]}>
                  <FaRegCalendarCheck className={styles["icon_detail"]} />
                  <span>Oct 10, 2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogSection
