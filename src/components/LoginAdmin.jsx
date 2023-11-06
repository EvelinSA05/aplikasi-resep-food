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



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Navigate, useNavigate } from 'react-router';
// import { Link } from "react-router-dom";

// function LoginAdmin() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [errors, setErrors] = useState([]);

//   useEffect(() => {

//     if(localStorage.getItem('token')) {

//         navigate('/dashboardAdmin');
//     }
// }, []);

// const loginHandler = async (e) => {
//   e.preventDefault();
  
//   const formData = new FormData();

//   formData.append('email', email);
//   formData.append('password', password);
  
//   await axios.post('http://localhost:8000/api/login', formData)
//   .then((response) => {

//       // localStorage.setItem('token', response.data.token);
      
//       navigate('/dashboardAdmin');

//   })
//   .catch(error => {
      
//       setErrors(error.response.data);
//   })

// };

//   // useEffect(() => {
//   //   // Implementasikan logika pengecekan status login di sini.
//   //   // Contoh sederhana: Simpan status login di sesi atau kuki, dan periksa di sini.
//   //   // Gantilah dengan logika otentikasi yang sesuai.
//   //   // const isLoggedIn = sessionStorage.getItem('isLoggedIn'); // Contoh sederhana

//   //   // if (isLoggedIn === 'true') {
//   //   //   setLoggedIn(true);
//   //   // }

//   //   // fetch('http://localhost:8000/api/loginAdmin')
//   //   // .then(response => response.json())
//   //   // .then(data => {
//   //   //   setLoggedIn(data.Loggedin);
//   //   // })
//   //   // .catch(error => {
//   //   //   console.error('Error:', error);
//   //   // });

//   //   fetch('http://localhost:8000/api/loginAdmin')
//   //   .then(response => response.json())
//   //   .then(data => {
//   //     if (!data.loggedIn) {
//   //       // Jika pengguna belum masuk, navigasikan ke halaman login
//   //       navigate('/loginAdmin');
//   //     } else {
//   //       setLoggedIn(true);
//   //     }
//   //   })
//   //   .catch(error => {
//   //     console.error('Error:', error);
//   //   });
//   // }, [navigate]);

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   try {
//   //     const response = await axios.post('http://localhost:8000/api/loginAdmin', { email, password });
//   //     navigate('/dashboardAdmin')
//   //   } catch (error) {
//   //     console.error('Login gagal:', error);
//   //   }
//   // }

//   // const handleLogin = () => {
//   //   // axios.post('http://localhost:8000/api/loginAdmin', {
//   //   //   email: email,
//   //   //   password: password,
//   //   // })
//   //   // .then(response => {
//   //   //   console.log(response.data);
//   //   //   // Handle login berhasil
//   //   //   sessionStorage.setItem('isLoggedIn', 'true'); // Simpan status login
//   //   //   setLoggedIn(true);
//   //   //   navigate('/dashboardAdmin');
//   //   // })
//   //   // .catch(error => {
//   //   //   console.error('Login failed: ', error);
//   //   //   // Handle kesalahan login
//   //   // });

//   // //   setLoggedIn(true);
//   // //   // Setelah berhasil login, arahkan pengguna ke halaman dashboard
//   // //   navigate('/dashboardAdmin');
//   // // }

//   // // if (loggedIn) {
//   // //   return <Navigate to="/dashboardAdmin" />;
//   // // }
//   // }

//   return (
//   // <div>
//   //   <div>
//   //     <h2>Login Admin</h2>
//   //     <form onSubmit={handleSubmit}>
//   //       <input
//   //         type="email"
//   //         placeholder="Email"
//   //         value={email}
//   //         onChange={(e) => setEmail(e.target.value)}
//   //       />
//   //       <input
//   //         type="password"
//   //         placeholder="Password"
//   //         value={password}
//   //         onChange={(e) => setPassword(e.target.value)}
//   //       />
//   //         <div>
//   //       <button type="submit">Login</button>
//   //       </div>
//   //     </form>
//   //   </div>
//   //   </div>

//   <div className="container" style={{ marginTop: "120px" }}>
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
//                                         <div className="alert alert-danger" role="alert">
//                                             {errors.password[0]}
//                                         </div>
//                                     )
//                                 }
//                                 <div className="d-grid gap-2">
//                                     <button type="submit" className="btn btn-primary">LOGIN</button>
//                                 </div>
//                                 <div>
//                                   <h8>Belum punya akun?</h8>
//                                   <Link to="/registerAdmin">
//                                   <h8>Daftar di sini </h8></Link>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//   );
// }

// export default LoginAdmin;




// import React, { useState } from 'react';

// //import hook useHitory from react router dom
// import { useHistory, useNavigate } from 'react-router';
// import { Link } from "react-router-dom";

// //import axios
// import axios from 'axios';
// import ReCAPTCHA from "react-google-recaptcha";

// function Login() {

//     //define state
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     //define state validation
//     const [errors, setErrors] = useState([]);
//     const navigate = useNavigate();

//     const [IsRecaptchaVerified, SetChaptchaVerified] = useState(false);
//     //function "loginHanlder"
//     const loginHandler = async (e) => {
//         e.preventDefault();

//         if (!IsRecaptchaVerified) {
//             alert ("Tekan CAPTCHA!");
//             return;
//         }else {
//             //initialize formData
//         const formData = new FormData();
        
//         //append data to formData
//         formData.append('email', email);
//         formData.append('password', password);

//         //send data to server
//         await axios.post('http://localhost:8000/api/login', formData)
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
//         }
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
//                                         <div className="alert alert-danger"  role="alert">
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
//                                         <div className="alert alert-danger"  role="alert">
//                                             {errors.password[0]}
//                                         </div>
//                                     )
//                                 }
//                                 <ReCAPTCHA sitekey="6LdSeuooAAAAAAV672GzCZWUMt9l8bcB7GyYfdcf" onChange={() => SetChaptchaVerified(true)} /> 
//                                 <br />
//                                 <div className="d-grid gap-2">
//                                     <button type="submit" className="btn btn-primary">LOGIN</button>
//                                 </div>
//                                 <div>
//                                     <h8>Belum punya akun?</h8>
//                                     <Link to="/register">
//                                     <h8>Daftar di sini </h8></Link>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )

// }

// export default Login;



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

    fetch('http://localhost:8000/api/login')
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
      const response = await axios.post('http://localhost:8000/api/login', { email, password });
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












// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Login = () => {

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const [showPassword, setShowPassword] = useState(false);
    
//       const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//       };

//     const [errors, setErrors] = useState([]);

//     const navigate = useNavigate();

//   //   useEffect(() => {

//   //     if(localStorage.getItem('token')) {

//   //         navigate('/dashboardAdmin');
//   //     }
//   // }, []);

//     const loginHandler = async (e) => {
//       e.preventDefault();
      
//       const formData = new FormData();

//       formData.append('email', email);
//       formData.append('password', password);
      
//       await axios.post('http://localhost:8000/api/login', formData)
//       .then((response) => {

//           // localStorage.setItem('token-admin', response.data.token);
//           // localStorage.setItem('roles-admin', response.data.role);

//           localStorage.setItem('token', response.data.token);
//           localStorage.setItem('roles', response.data.role);
          
//           navigate('/dashboardAdmin');
          

//       })
//       .catch(error => {
          
//           setErrors(error.response.data);
//       })

//   };
//   return (
//   <section className="bg-[#E2E2E2] min-h-screen flex items-center justify-center">
//     <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-7 items-center">
//       <div className="md:block hidden w-1/2 ">
//         <img className="object-cover w-full h-full rounded-2xl" src="https://source.unsplash.com/user/erondu/500x800" alt="img" />
//       </div> 
//       <div className="md:w-1/2 px-16">
//         <h2 className="font-bold text-2xl mt-4">
//           Login
//         </h2>
//         <p className="text-sm mt-4">If You Already A Admin, Easily Log In </p>
//         <form onSubmit={loginHandler} className="flex flex-col gap-4">
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full mt-4 px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600" placeholder="Email" />
//           {
//             errors.email && (
//               <div className="px-4 py-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
//                   <span className="font-medium">{errors.email[0]}</span>
//               </div>
//             )
//           }
//           <div className="relative">
//             <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600" placeholder="Password" />
//             <div className="absolute inset-y-0 right-0 flex items-center px-3 border-l-[0.2px] border-gray-300">
//               {showPassword ? (
//                 <svg onClick={togglePasswordVisibility} xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-eye w-5 h-5 text-gray-500" viewBox="0 0 16 16">
//                   <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
//                   <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
//                 </svg>
//               ) : (
//                 <svg onClick={togglePasswordVisibility} xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-eye-slash w-5 h-5 text-gray-500" viewBox="0 0 16 16">
//                   <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
//                   <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
//                   <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
//                 </svg>
//               )}
//             </div>
//           </div>
//           {
//             errors.password && (
//               <div className="px-4 py-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
//                   <span className="font-medium">{errors.password[0]}</span>
//               </div>
//             )
//           }
//           {
//             errors.message  && (
//               <div className="px-4 py-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
//                   <span className="font-medium">{errors.message}</span>
//               </div>
//             )
//           }
//           <button className="bg-sky-600 rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
          
//         </form>

//         <hr className="my-8 border-gray-500" />
//         <div className="mt-3 text-xs flex justify-between items-center">
//           <p>Only admin can login in this page!</p>
//         </div>
//       </div>
//     </div>
//   </section>

//   );
// }

// export default Login;

