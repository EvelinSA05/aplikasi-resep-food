import React from 'react'
import styles from '../c_iphone-14-1.module.css'
import bg from '../assets/bg.jpg' //gambar
import fontstyle from '../assets/fontstyle.png' //1
import logo from '../assets4/logo21.png' //3
import card from '../assets4/card.png' //3
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles['']}>
      <div>
        <div>
          <img
            src={bg}
            alt="background"
            className={styles['rectangle']}
          />
        </div>
        <div className={styles['frame2']}>
          <div>
            <img
              src={card}
              alt="logo"
              className={styles['card']}
            />
            <div className={styles['fonstyles']}>
              <img
                src={fontstyle}
                alt="font food recipe"
                className={styles['rectangle1']}
              />
              <img
                src={logo}
                alt="logo"
                className={styles['logo']}
              />
            </div>
          </div>
          <div className={styles['kotak']}>
            <div className={styles['button']}>
              <Link to="/homepageUser" className={styles['link']}><button className={styles['rectangle2']}>Get Started!</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home