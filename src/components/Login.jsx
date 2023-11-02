// import React from 'react'
// import styles from '../c_iphone-14-2.module.css';
// import bg2 from "../assets2/bg2.png";
// import card from "../assets2/card.png";
// import grouptext1 from "../assets2/grouptext1.png";
// import grouptext2 from "../assets2/grouptext2.png";
// import { Link } from "react-router-dom";

// const Login = () => {
//   return (
//     // <div className="">
//     //   <div className='bg-center'>
//     //     <img
//     //       src={bg2}
//     //       alt="rectangle"
//     //       className='w-full h-full position: fixed'
//     //     />
//     //   </div>
//     //   <div className="max-w-md mx-auto p-1 px-0 bg-white shadow-md rounded-sm">
//     //     <div className="md:px-7 lg:px-5">
//     //       <img
//     //         src={card}
//     //         alt="rectangle"
//     //         className={styles['rectangle1']}
//     //       />
//     //       <img
//     //         src={grouptext1}
//     //         alt="rectangle"
//     //         className={styles['rectangle2']}
//     //       />
//     //       <img
//     //         src={grouptext2}
//     //         alt="rectangle"
//     //         className={styles['rectangle3']}
//     //       />
//     //       <input type="text" name="" id="" placeholder='Enter Your Username' className={styles['rectangle4']} />
//     //       <input type="text" name="" id="" placeholder='Enter Your Password' className={styles['rectangle5']} />
//     //       <Link to="/homepage"><button className={styles['rectangle6']}>LOGIN</button></Link>
//     //       <p className={styles['rectangle7']}>Daftar</p>
//     //     </div>
//     //   </div>
//     // </div>

//     <div className="container" style={{ marginTop: "120px" }}>
//       <div className="row justify-content-center">
//         <div className="col-md-4">
//           <div className="card border-0 rounded shadow-sm">
//             <div className="card-body">
//               HALAMAN LOGIN
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login


// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';

// //import axios
// import axios from 'axios';

// function Login() {

//   //define state
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loggedIn, setLoggedIn] = useState(false);

//   //define state validation
//   const [errors, setErrors] = useState([]);

//   //define history
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (localStorage.getItem('token')) {
//       navigate('/')
//     }
//   }, [])

//   const handleLogin = () => {
//     // ... Logika login

//     // Jika login sukses, atur loggedIn menjadi true
//     setLoggedIn(true);
//   }

//   //function "loginHanlder"
//   const loginHandler = async (e) => {
//     e.preventDefault();

//     //initialize formData
//     const formData = new FormData();

//     //append data to formData
//     formData.append('email', email);
//     formData.append('password', password);

//     //send data to server
//     await axios.post('http://localhost:8000/api/login', formData)
//       .then((response) => {

//         //set token on localStorage
//         localStorage.setItem('token', response.data.token);

//         //redirect to dashboard
//         navigate('/');
//       })
//       .catch((errors) => {

//         //assign error to state "validation"
//         setErrors(errors.response.data);
//       })
//   };

//   return (
//     <div className="container" style={{ marginTop: "120px" }}>
//       <div className="row justify-content-center">
//         <div className="col-md-4">
//           <div className="card border-0 rounded shadow-sm">
//             <div className="card-body">
           
//               <h4 className="fw-bold">HALAMAN LOGIN</h4>
//               <hr />
//               {
//                 errors.message && (
//                   <div className="alert alert-danger">
//                     {errors.message}
//                   </div>
//                 )
//               }
//               <form onSubmit={loginHandler}>
//                 <div className="mb-3">
//                   <label className="form-label">ALAMAT EMAIL</label>
//                   <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukkan Alamat Email" />
//                 </div>
//                 {
//                   errors.email && (
//                     <div className="alert alert-danger">
//                       {errors.email[0]}
//                     </div>
//                   )
//                 }
//                 <div className="mb-3">
//                   <label className="form-label">PASSWORD</label>
//                   <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukkan Password" />
//                 </div>
//                 {
//                   errors.password && (
//                     <div className="alert alert-danger">
//                       {errors.password[0]}
//                     </div>
//                   )
//                 }
//                 <div className="d-grid gap-2">
//                   <button type="submit" className="btn btn-primary">LOGIN</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )

// }

// export default Login;

//import hook react
import React, { useState } from 'react';

//import hook useHitory from react router dom
import { useHistory, useNavigate } from 'react-router';
import { Link } from "react-router-dom";

//import axios
import axios from 'axios';

function Login() {

    //define state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //define state validation
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    //function "loginHanlder"
    const loginHandler = async (e) => {
        e.preventDefault();
        
        //initialize formData
        const formData = new FormData();

        //append data to formData
        formData.append('email', email);
        formData.append('password', password);

        //send data to server
        await axios.post('http://localhost:8000/api/login', formData)
        .then((response) => {

            //set token on localStorage
            localStorage.setItem('token', response.data.token);

            //redirect to dashboard
            navigate('/akun');
        })
        .catch((error) => {

            //assign error to state "validation"
            setErrors(error.response.data);
        })
    };

    return (
        <div className="container" style={{ marginTop: "120px" }}>
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card border-0 rounded shadow-sm">
                        <div className="card-body">
                            <h4 className="fw-bold">HALAMAN LOGIN</h4>
                            <hr/>
                            {
                                errors.message && (
                                    <div className="alert alert-danger">
                                        {errors.message}
                                    </div>
                                )
                            }
                            <form onSubmit={loginHandler}>
                                <div className="mb-3">
                                    <label className="form-label">ALAMAT EMAIL</label>
                                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukkan Alamat Email"/>
                                </div>
                                {
                                    errors.email && (
                                        <div className="alert alert-danger">
                                            {errors.email[0]}
                                        </div>
                                    )
                                }
                                <div className="mb-3">
                                    <label className="form-label">PASSWORD</label>
                                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukkan Password"/>
                                </div>
                                {
                                    errors.password && (
                                        <div className="alert alert-danger">
                                            {errors.password[0]}
                                        </div>
                                    )
                                }
                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-primary">LOGIN</button>
                                </div>
                                <div>
                                  <h8>Belum punya akun?</h8>
                                  <Link to="/register">
                                  <h8>Daftar di sini </h8></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Login;