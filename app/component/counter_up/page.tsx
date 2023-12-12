import React from 'react'
import styles from './counter_up.module.scss'

const CounterUp = () => {
  return (
    <div className={styles["counter_up"]}>
        <div className={styles["container"]}>
            <div className={styles["counter_num"]}>
                <h3>3.3k+</h3>
                <p>STUDENT ENROLLED</p>
            </div>
            <div className={styles["counter_num"]}>
                <h3>100%</h3>
                <p>COURSE COVERAGE</p>
            </div>
            <div className={styles["counter_num"]}>
                <h3>100%</h3>
                <p>SATISFACTION RATE</p>
            </div>
            <div className={styles["counter_num"]}>
                <h3>100%</h3>
                <p>TOP INSTRUCTORS</p>
            </div>
        </div>     
    </div>
  )
}

export default CounterUp
