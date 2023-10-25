import React from 'react'
import styles from '../c_iphone-14-2.module.css';
import bg2 from "../assets2/bg2.png";
import card from "../assets2/card.png";
import grouptext1 from "../assets2/grouptext1.png";
import grouptext2 from "../assets2/grouptext2.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="">
      <div className='bg-center'>
        <img
          src={bg2}
          alt="rectangle"
          className='w-full h-full position: fixed'
        />
      </div>
      <div className="max-w-md mx-auto p-1 px-0 bg-white shadow-md rounded-sm">
        <div className="md:px-7 lg:px-5">
          <img
            src={card}
            alt="rectangle"
            className={styles['rectangle1']}
          />
          <img
            src={grouptext1}
            alt="rectangle"
            className={styles['rectangle2']}
          />
          <img
            src={grouptext2}
            alt="rectangle"
            className={styles['rectangle3']}
          />
          <input type="text" name="" id="" placeholder='Enter Your Username' className={styles['rectangle4']} />
          <input type="text" name="" id="" placeholder='Enter Your Password' className={styles['rectangle5']} />
          <Link to="/homepage"><button className={styles['rectangle6']}>LOGIN</button></Link>
          <p className={styles['rectangle7']}>Daftar</p>
        </div>
      </div>
    </div>
  )
}

export default Login