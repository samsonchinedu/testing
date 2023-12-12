import React from 'react'
import styles from "./_catergory.module.scss"
import CardSection from './card_section'

const Catergories = () => {
  return (
    <div className={styles["Catergories"]}>
      <h5>AFTER GRADUATION</h5>
      <h2>Unlimited <span>Opportunities</span> For Deltans</h2>
      <div className={styles["description"]}>
        <p>Beyond learning, the initiative will suport graduates with the platform, resources, community and support to utilize acquired skills.</p>
      </div>
      <CardSection />
    </div>
  )
}

export default Catergories
