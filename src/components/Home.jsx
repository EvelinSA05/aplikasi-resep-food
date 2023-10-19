import React from 'react'
import styles from '../c_iphone-14-1.module.css'
import bg from '../assets/bg.jpg' //gambar
import fontstyle from '../assets/fontstyle.png' //1
import rectangle1 from '../assets/rectangle1.png' //2
import rectangle2 from '../assets/rectangle2.png' //3
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
        {/* <img
          src={rectangle1}
          alt="frame"
          className={styles['rectangle3']}
        /> */}
        {/* <div className={styles['alltext']}>
          <div className={styles['text']}>
            <p className={styles['text1']}>Ayo Memasak Makanan Enak!</p>
          </div>
          <div className={styles['text2']}>
            <p className={styles['text3']}>
              Jelajahi aplikasi ini dan mulai <br />memasak makanan yang lezat!
            </p>
          </div>
        </div> */}
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

// const Home = (props) => {
//   return (
//     <div className={styles['frame']}>
//         <img
//           src={gambar}
//           alt="rectangle"
//           width={390}
//           height={844}
//           className={styles['rectangle']}
//         />
//         <img
//           src={gambar1}
//           alt="rectangle"
//           width={390}
//           height={252}
//           className={styles['rectangle1']}
//         />
//         <img
//           src={gambar2}
//           alt="frame"
//           width={100}
//           height={150}
//           className={styles['rectangle1']}
//         />
//       <div className={styles['text']}>
//       </div>
//       <div className={styles['text2']}>
//         <p className={styles['text3']}>
//           Jelajahi aplikasi ini dan mulai memasak makanan yang lezat!
//         </p>
//       </div>
//       <img
//         src={gambar3}
//         alt="rectangle"
//         width={319}
//         height={51}
//         className={styles['rectangle2']}
//       />
//       <div className={styles['text4']}>
//         <p className={styles['text5']}>Get Started !</p>
//       </div>
//     </div>
//   )
// }
// export default Home