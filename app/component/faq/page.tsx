import React from 'react'
import styles from './single.module.scss'
import FaqSection from '../faqs/page'
import Faq01 from '../../../Images/faq-01.jpg'
import Faq02 from '../../../Images/faq-02.jpg'
import Faq03 from '../../../Images/faq-03.jpg'
import Faq04 from '../../../Images/faq-04.webp'
import Shape03 from '../../../Images/shape-03.png'
import ShapeDark02 from '../../../Images/dark-shape-02.png'
import Shape04 from '../../../Images/shape-04.png'
import Shape05 from '../../../Images/shape-05 (1).png'
import Shape06 from '../../../Images/shape-06.png'
import Image from 'next/image'

const SingleFaqs = () => {

    const text = `FAQ'S`
    
    const faqs = [
        {
            id: 1,
            question: "How can I contact a school directly?",
            answer: "Lorem ipsum dolor sit amet consectur adipiscing elit sed eius mod ex tempor incididunt labore dolore magna aliquaenim ad minim eniam."
        },
        {
            id: 2,
            question: "How do I find a school where I want to study?",
            answer: "Lorem ipsum dolor sit amet consectur adipiscing elit sed eius mod ex tempor incididunt labore dolore magna aliquaenim ad minim eniam."
        },
        {
            id: 3,
            question: "Where should I study abroad?",
            answer: "Lorem ipsum dolor sit amet consectur adipiscing elit sed eius mod ex tempor incididunt labore dolore magna aliquaenim ad minim eniam."
        }
    ];


  return (
    <div className={styles["faq_section"]}>
        <div className={styles["container"]}>
            <div className={styles["faq_left"]}>
              <div className={styles["left_container"]}>
              <div className={styles["faq_left_grid"]}>
                  <div className={styles["thumbnail"]}>
                    <Image className={styles["left_image"]} src={Faq01} alt='Faqs 01' />
                  </div>
                  <div className={styles["thumbnail"]}>
                    <Image className={styles["left_image"]} src={Faq02} alt='Faqs 02' />
                  </div>
                  <div className={styles["thumbnail"]}>
                    <Image className={styles["left_image"]} src={Faq03} alt='Faqs 03' />
                  </div>
                  <div className={styles["thumbnail"]}>
                    <Image className={styles["left_image"]} src={Faq04} alt='Faqs 04' />
                  </div>
              </div>
              <Image className={`${styles["shape_absolute"]} ${styles["shape_1"]}`} src={Shape03} alt='Shape 03' />
              <Image className={`${styles["shape_absolute"]} ${styles["shape_2"]}`} src={ShapeDark02} alt='Shape dark 02' />
              <Image className={`${styles["shape_absolute"]} ${styles["shape_3"]}`} src={Shape04} alt='Shape 04' />
              <Image className={`${styles["shape_absolute"]} ${styles["shape_4"]}`} src={Shape05} alt='Shape 38' />
              </div>
            </div>
            <div className={styles["faq_right"]}>
                <small>{text}</small>
                <h1>Over 10 Years in <span>Distant <br /> Skill</span> Development</h1>
                <div className={ styles['faqs__details'] }>
                    { faqs.map((faq) => (
                        <FaqSection faqQuestion={ faq.question } faqAnswer={ faq.answer } faqId={ faq.id }  key={ faq.id }  />
                    ))}
                </div>
                <Image className={styles["shape_green"]} src={Shape06} alt='Shape 06' />
                <span className={styles["circle_red"]}></span>
            </div>
        </div>
    </div>
  )
}

export default SingleFaqs
