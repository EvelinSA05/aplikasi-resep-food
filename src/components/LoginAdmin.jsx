// import React from 'react'
// import { Link } from "react-router-dom";

// const LoginAdmin = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-10 rounded shadow-lg">
//         <h2 className="text-xl font-bold mb-4">Login Admin</h2>
//         <form onSubmit=''>
//           <div className="mb-4">
//             <label htmlFor="username" className="block text-gray-700 mb-2">Username</label>
//             <input
//               type="text"
//               id="username"
//               className="w-full p-2 border border-gray-300 rounded"
//               placeholder="Masukkan username"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
//             <input
//               type="password"
//               id="password"
//               className="w-full p-2 border border-gray-300 rounded"
//               placeholder="Masukkan password"
//             />
//           </div>
//           <Link to="/dashboardAdmin">
//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//             >
//               Login
//             </button></Link>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default LoginAdmin

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


// /import hook react
// import { useState, useEffect } from 'react';

// //import hook useHitory from react router dom
// import { useNavigate } from 'react-router-dom';

// //import axios
// import axios from 'axios';

// function LoginAdmin() {

//     //define state
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     //define state validation
//     const [errors, setErrors] = useState([]);

//     //define history
//     const navigate = useNavigate();

//     useEffect(() => {
//       if (localStorage.getItem('token')) {
//         navigate ('/dashboardAdmin')
//       }
//     }, []);

//     //function "loginHanlder"
//     const loginHandler = async (e) => {
//         e.preventDefault();

//         //initialize formData
//         const formData = new FormData();

//         //append data to formData
//         formData.append('email', email);
//         formData.append('password', password);

//         //send data to server
//         await axios.post('http://localhost:8000/api/loginAdmin', formData)
//         .then((response) => {

//             //set token on localStorage
//             localStorage.setItem('token', response.data.token);

//             //redirect to dashboard
//             navigate('/dashboardAdmin');
//         })
//         .catch((error) => {

//             //assign error to state "validation"
//             setErrors(error.response.data);
//         })
//     };

//     return (
//         <div className="container" style={{ marginTop: "120px" }}>
//             <div className="row justify-content-center">
//                 <div className="col-md-4">
//                     <div className="card border-0 rounded shadow-sm">
//                         <div className="card-body">
//                             <h4 className="fw-bold">HALAMAN LOGIN</h4>
//                             <hr/>
//                             {
//                                 errors.message && (
//                                     <div className="alert alert-danger">
//                                         {errors.message}
//                                     </div>
//                                 )
//                             }
//                             <form onSubmit={loginHandler}>
//                                 <div className="mb-3">
//                                     <label className="form-label">ALAMAT EMAIL</label>
//                                     <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukkan Alamat Email"/>
//                                 </div>
//                                 {
//                                     errors.email && (
//                                         <div className="alert alert-danger">
//                                             {errors.email[0]}
//                                         </div>
//                                     )
//                                 }
//                                 <div className="mb-3">
//                                     <label className="form-label">PASSWORD</label>
//                                     <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukkan Password"/>
//                                 </div>
//                                 {
//                                     errors.password && (
//                                         <div className="alert alert-danger">
//                                             {errors.password[0]}
//                                         </div>
//                                     )
//                                 }
//                                 <div className="d-grid gap-2">
//                                     <button type="submit" className="btn btn-primary">LOGIN</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )

// }

// export default LoginAdmin;

// Contoh komponen React untuk halaman login
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';

// function AdminLogin() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();
//   const [errors, setErrors] = useState([]);

//   const loginHandler = async () => {
//     try {
//       const response = await axios.post('http://localhost:8000/api/loginAdmin', {
//         email: email,
//         password: password
//       });
//       navigate('/dashboardAdmin');
//       console.log(response.data);
//       // Handle hasil login (misalnya, penyimpanan token di session)
//     } catch (error) {
//       console.error('Login failed: ', error);
//     }
//   }

//     // const [email, setEmail] = useState("");
//     // const [password, setPassword] = useState("");

//     // //define state validation
//     // const [errors, setErrors] = useState([]);

//     // //define history
//     // const navigate = useNavigate();

//     // //function "loginHanlder"
//     // const loginHandler = async (e) => {
//     //     e.preventDefault();
        
//     //     //initialize formData
//     //     const formData = new FormData();

//     //     //append data to formData
//     //     formData.append('email', email);
//     //     formData.append('password', password);

//     //     //send data to server
//     //     await axios.post('http://localhost:8000/api/loginAdmin', formData)
//     //     .then((response) => {

//     //         //redirect to dashboard
//     //         navigate('/dashboardAdmin');
//     //     })
//     //     .catch((errors) => {

//     //         //assign error to state "validation"
//     //         setErrors(errors.response.data);
//     //     })
//     // };


//   return (
//     // <div>
//     //     <h2>Admin Login</h2>
//     //     <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
//     //     <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
//     //     <button onClick={handleLogin}>Login</button>
//     // </div>

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
//   );
// }

// export default AdminLogin;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router';
import { Link } from "react-router-dom";

function LoginAdmin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    // Implementasikan logika pengecekan status login di sini.
    // Contoh sederhana: Simpan status login di sesi atau kuki, dan periksa di sini.
    // Gantilah dengan logika otentikasi yang sesuai.
    // const isLoggedIn = sessionStorage.getItem('isLoggedIn'); // Contoh sederhana

    // if (isLoggedIn === 'true') {
    //   setLoggedIn(true);
    // }

    // fetch('http://localhost:8000/api/loginAdmin')
    // .then(response => response.json())
    // .then(data => {
    //   setLoggedIn(data.Loggedin);
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    // });

    fetch('http://localhost:8000/api/loginAdmin')
    .then(response => response.json())
    .then(data => {
      if (!data.loggedIn) {
        // Jika pengguna belum masuk, navigasikan ke halaman login
        navigate('/loginAdmin');
      } else {
        setLoggedIn(true);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/loginAdmin', { email, password });
      navigate('/dashboardAdmin')
    } catch (error) {
      console.error('Login gagal:', error);
    }
  }

  const handleLogin = () => {
    // axios.post('http://localhost:8000/api/loginAdmin', {
    //   email: email,
    //   password: password,
    // })
    // .then(response => {
    //   console.log(response.data);
    //   // Handle login berhasil
    //   sessionStorage.setItem('isLoggedIn', 'true'); // Simpan status login
    //   setLoggedIn(true);
    //   navigate('/dashboardAdmin');
    // })
    // .catch(error => {
    //   console.error('Login failed: ', error);
    //   // Handle kesalahan login
    // });

  //   setLoggedIn(true);
  //   // Setelah berhasil login, arahkan pengguna ke halaman dashboard
  //   navigate('/dashboardAdmin');
  // }

  // if (loggedIn) {
  //   return <Navigate to="/dashboardAdmin" />;
  // }
  }

  return (
  // <div>
  //   <div>
  //     <h2>Login Admin</h2>
  //     <form onSubmit={handleSubmit}>
  //       <input
  //         type="email"
  //         placeholder="Email"
  //         value={email}
  //         onChange={(e) => setEmail(e.target.value)}
  //       />
  //       <input
  //         type="password"
  //         placeholder="Password"
  //         value={password}
  //         onChange={(e) => setPassword(e.target.value)}
  //       />
  //         <div>
  //       <button type="submit">Login</button>
  //       </div>
  //     </form>
  //   </div>
  //   </div>

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
                            <form onSubmit={handleSubmit}>
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
                                  <Link to="/registerAdmin">
                                  <h8>Daftar di sini </h8></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default LoginAdmin;