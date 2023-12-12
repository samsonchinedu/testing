'use client'

import React, { useState, useEffect } from 'react'
import styles from './faqs.module.scss'
import Image from 'next/image'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FaqSection = ({ faqQuestion, faqAnswer, faqId }: any ) => {

    const [showDetails, setShowDetails] = useState(false)

    const handleClick = () => {
        setShowDetails(!showDetails)
    }

    useEffect(() => {
        if(faqId === 1) {
            setShowDetails(true)
        }
    }, [])

  return (
    <div className={ styles["single__faq"] }>
        <div className={ styles["single__faq__content"]}>
          <div className={ showDetails ? styles["single__faq__content__header"] : styles["single__faq__content__headers"] } onClick={ handleClick  }>
            <h5>{ faqQuestion }</h5>
          <div className={ styles["single__faq__menu"] }>
              { 
                showDetails ? <FaChevronUp size="1.5rem" fill='#fff' /> : <FaChevronDown fill='#fff' size="1.5rem" />  
              }
            </div>
          </div>
          { showDetails ? <p>{ faqAnswer }</p> : null }
        </div>
    </div>
  )
}

export default FaqSection
