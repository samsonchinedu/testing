import React from 'react'
import styles from './video_gallery.module.scss'
import VideoGallery from '../../../Images/video-01.jpg'
import Shape04 from '../../../Images/shape-04.png'
import Shape37 from '../../../Images/shape-37.png'
import DarkShape14 from '../../../Images/dark-shape-14.png'
import { FaPlay } from "react-icons/fa6";
import Image from 'next/image'

const VideoGalleries = () => {
  return (
    <div className={styles["video_gallery_section"]}>
      <div className={styles["image_container"]}>
        <Image className={styles["vid_galla"]} src={VideoGallery} alt='Video gallery' />
        <button className={styles["video_play_btn"]}>
           <FaPlay />
        </button>
      </div>
      <Image className={styles["image_position1"]} src={Shape04} alt='Shape 04' />
      <Image className={styles["image_position2"]} src={Shape37} alt='Shape 37' />
      <Image className={styles["image_position3"]} src={DarkShape14} alt='Dark shape 14' />
    </div>
  )
}

export default VideoGalleries
