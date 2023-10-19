// import styles from '../c_iphone-14-3.module.css'
// import rectangle from "../assets3/rectangle.png";
// import foodrecipes from "../assets3/foodrecipes.png";
// import sendok from "../assets3/sendok.png";
// import search from "../assets3/search.png";
// import rectangle1 from "../assets3/rectangle1.png";
// import rumah from "../assets3/rumah.png";
// import save from "../assets3/save.png";
// import save2 from "../assets3/save2.png";
// import save3 from "../assets3/save3.png";
// import akun from "../assets3/akun.png";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import bg from '../assets/bg.jpg' //gambar
// import image from '../assets3/image1.png' //gambar
// import { Link } from "react-router-dom";
// import React, { useState } from 'react';

// const HomePageAdmin = () => {

//     return (
//         <div className={styles['frame2']}>
//             <div className='bg-slate-300 min-h-screen'>
//                 <div className=''>
//                     <img
//                         src={rectangle}
//                         alt="rectangle"
//                         className='w-full h-20'
//                     />
//                     <div className='absolute inset-x-0 top-0'>
//                         <img
//                             src={foodrecipes}
//                             alt="rectangle"
//                             className={styles['font1']}
//                         />
//                         <img
//                             src={sendok}
//                             alt="rectangle"
//                             className={styles['sendok']}
//                         />
//                         {/* <img
//                             src={search}
//                             alt="rectangle"
//                             className={styles['search']}
//                         /> */}
//                     </div>
//                     <div className=''>
//                         <div className={styles['alltext']}>
//                             <div className={styles['instance']}>
//                                 <div className={styles['text02']}>
//                                     <p className={styles['text03']}>Sarapan</p>
//                                 </div>
//                             </div>
//                             <div className={styles['text04']}>
//                                 <p className={styles['text05']}>Makan siang</p>
//                             </div>
//                             <div className={styles['text06']}>
//                                 <p className={styles['text07']}>Camilan</p>
//                             </div>
//                             <div className={styles['text08']}>
//                                 <p className={styles['text09']}>Makan malam</p>
//                             </div>
//                         </div>
//                         <Link to="/new"><button className={styles['rectangle9']}>NEW</button></Link>
//                     </div>

//                     <div className={styles['search2']}>
//                         <div className="flex items-center">
//                             <input
//                                 type="text"
//                                 className="border rounded p-1 w-1/7"
//                                 placeholder="Cari..."
//                             />
//                             <button className="bg-blue-500 text-white rounded p-1 ml-2" type="button">
//                                 Cari
//                             </button>
//                         </div>
//                     </div>
//                     <div className={styles['kertas01']}>
//                         <img
//                             src={rectangle1}
//                             alt="rectangle"
//                             className='w-full h-24 -bottom-15 absolute inset-x-0'
//                         />
//                     </div>
//                     <div className='relative inset-x-0 bottom-7'>
//                         <Link to="/homepage">
//                             <img
//                                 src={rumah}
//                                 alt="rectangle"
//                                 className={styles['rumah']}
//                             /></Link>
//                         <Link to="/saveAdmin">
//                             <img
//                                 src={save}
//                                 alt="rectangle"
//                                 className={styles['save']}
//                             /></Link>
//                         <Link to="/user">
//                             <img
//                                 src={akun}
//                                 alt="rectangle"
//                                 className={styles['akun']}
//                             /></Link>
//                     </div>
//                 </div>
//                 {/* <div className='container mt-0'>
//                 <div className={styles['card']}>
//                 <div className="card" style={{ width: '11rem'}}>
//                             <img src={bg} className="card-img-top" alt="..." />
//                             <div className="card-body">
//                                 <h5 className="card-title">Judul Kartu</h5>
//                                 <p className="card-text">Teks penjelasan mengenai kartu.</p>
//                                 <a href="#" className="btn btn-primary">Tombol</a>
//                             </div>
//                 </div>
//                 </div>
//                 </div> */}
//                 <div className={styles['card3']}>
//                     <div className="row">

//                         <div className="col-md-4 col-sm-12 mb-15">
//                             <Link to="/recipe">
//                                 <div className="card">
//                                     <img src={image} className="card-img-top" alt="..." />
//                                     <div className="card-body">
//                                         <div className="card-title"><h4>Toast with Milk and Strawberry</h4></div>
//                                     </div>
//                                 </div>
//                             </Link>
//                         </div>

//                         <div className="col-md-4 col-sm-12 mb-15">
//                             <Link to="/recipe">
//                                 <div className="card">
//                                     <img src={image} className="card-img-top" alt="..." />
//                                     <div className="card-body">
//                                         <div className="card-title"><h4>Toast with Milk and Strawberry</h4></div>
//                                     </div>
//                                 </div>
//                             </Link>
//                         </div>

//                         <div className="col-md-4 col-sm-12 mb-15">
//                             <Link to="/recipe">
//                                 <div className="card">
//                                     <img src={image} className="card-img-top" alt="..." />
//                                     <div className="card-body">
//                                         <div className="card-title"><h4>Toast with Milk and Strawberry</h4></div>
//                                     </div>
//                                 </div>
//                             </Link>
//                             {/* <Link to="/login"> */}
//                             {/* </Link> */}
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default HomePageAdmin

// import styles from "../c_iphone-14-3.module.css";
// import rectangle from "../assets3/rectangle.png";
// import foodrecipes from "../assets3/foodrecipes.png";
// import sendok from "../assets3/sendok.png";
// import search from "../assets3/search.png";
// import rectangle1 from "../assets3/rectangle1.png";
// import rumah from "../assets3/rumah.png";
// import tempe from "../assets3/tempe.jpg";
// import sushi from "../assets3/sushi.jpg";
// import telur from "../assets3/telur.jpg";
// import save from "../assets3/save.png";
// import save2 from "../assets3/save2.png";
// import save3 from "../assets3/save3.png";
// import akun from "../assets3/akun.png";
// import "bootstrap/dist/css/bootstrap.min.css";
// import bg from "../assets/bg.jpg"; //gambar
// import image from "../assets3/image1.png"; //gambar
// import { Link } from "react-router-dom";
// import React, { useState } from "react";
// import Login from "./Login";
// import { useNavigate } from "react-router-dom";
// import { Carousel } from "react-bootstrap";

// const HomePage = () => {
//   const navigate = useNavigate();

//   const loginCoba = () => {
//     const result = window.confirm("Anda Belum Login! Apakah Anda ingin login?");
//     if (result) {
//       navigate("/login");
//     } else {
//       console.log("Login dibatalkan.");
//     }
//   };

//   return (
//     <div className={styles["frame2"]}>
//       <nav className="bg-white">
//         <ul>
//           <li>test</li>
//           <li>test</li>
//           <li>test</li>
//           <li>test</li>
//         </ul>
//       </nav>
//       <div className="bg-slate-300 min-h-screen">
//         <div className="">
//           <div className={styles["alltext"]}>
//             <div className={styles["instance"]}>
//               <div className={styles["text02"]}>
//                 <p className={styles["text03"]}>Sarapan</p>
//               </div>
//             </div>
//             <div className={styles["text04"]}>
//               <p className={styles["text05"]}>Makan siang</p>
//             </div>
//             <div className={styles["text06"]}>
//               <p className={styles["text07"]}>Camilan</p>
//             </div>
//             <div className={styles["text08"]}>
//               <p className={styles["text09"]}>Makan malam</p>
//             </div>
//           </div>
//           <Link to="/new">
//             <button className={styles["rectangle9"]}>NEW</button>
//           </Link>
//         </div>

//         <div className={styles["search2"]}>
//           <div className="flex items-center">
//             <input
//               type="text"
//               className="border rounded p-1 w-1/7"
//               placeholder="Cari..."
//             />
//             <button
//               className="bg-blue-500 text-white rounded p-1 ml-2"
//               type="button"
//             >
//               Cari
//             </button>
//           </div>
//         </div>

//         {/*
//                     <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
//   <div class="carousel-indicators">
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" class="active" aria-current="true" aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" class="active" aria-current="true" aria-label="Slide 3"></button>
//   </div>
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img src={image} class="d-block w-25" alt="..." />
//     </div>
//     <div class="carousel-item">
//       <img src={bg} class="d-block w-25" alt="..." />
//     </div>
//     <div class="carousel-item">
//       <img src={image} class="d-block w-25" alt="..." />
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div> */}

//         {/* <div class="carousel">
//         <div
//           id="carouselExampleControlsNoTouching"
//           class="carousel slide"
//           data-bs-touch="true"
//         >
//           <div class="carousel-inner mt-4">
//             <div class="carousel-item active">
//               <img src={bg} class="d-block w-25 h-10" alt="" />
//             </div>
//             <div class="carousel-item">
//               <img src={image} class="d-block w-25 h-10" alt="" />
//             </div>
//             <div class="carousel-item">
//               <img src={bg} class="d-block w-25 h-10" alt="" />
//             </div>
//           </div>
//           <button
//             class="carousel-control-prev"
//             type="button"
//             data-bs-target="#carouselExampleControlsNoTouching"
//             data-bs-slide="prev"
//           >
//             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span class="visually-hidden">Previous</span>
//           </button>
//           <button
//             class="carousel-control-next"
//             type="button"
//             data-bs-target="#carouselExampleControlsNoTouching"
//             data-bs-slide="next"
//           >
//             <span class="carousel-control-next-icon" aria-hidden="true"></span>
//             <span class="visually-hidden">Next</span>
//           </button>
//         </div>
//       </div> */}

//         {/* <Carousel className="mx-auto" style={{ width: '500px' }}>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={sushi}
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h3>oshizushi</h3>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={sushi}
//           alt="Second slide"
//         />
//         <Carousel.Caption>
//           <h3>oshizushi</h3>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={sushi}
//           alt="Third slide"
//         />
//         <Carousel.Caption>
//           <h3>oshizushi</h3>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel> */}

//         <div className={styles["kertas01"]}>
//           <img
//             src={rectangle1}
//             alt="rectangle"
//             className="w-full h-24 -bottom-15 absolute inset-x-0"
//           />
//         </div>
//         <div className="relative inset-x-0 bottom-7">
//           <Link to="/homepage">
//             <img src={rumah} alt="rectangle" className={styles["rumah"]} />
//           </Link>
//           <Link to="/save">
//             <img src={save} alt="rectangle" className={styles["save"]} />
//           </Link>
//           <Link to="/user">
//             <img src={akun} alt="rectangle" className={styles["akun"]} />
//           </Link>
//         </div>
//         {/* <div className='container mt-0'>
//                 <div className={styles['card']}>
//                 <div className="card" style={{ width: '11rem'}}>
//                             <img src={bg} className="card-img-top" alt="..." />
//                             <div className="card-body">
//                                 <h5 className="card-title">Judul Kartu</h5>
//                                 <p className="card-text">Teks penjelasan mengenai kartu.</p>
//                                 <a href="#" className="btn btn-primary">Tombol</a>
//                             </div>
//                 </div>
//                 </div>
//                 </div> */}
//         <div className={styles["card3"]}>
//           <div className="row">
//             <div className="col-md-4 col-sm-12">
//               <Link to="/recipe">
//                 <div className="card">
//                   <img src={image} className="card-img-top" alt="..." />
//                   <div className="card-body">
//                     <div className="card-title">
//                       <h4>Toast with Milk and Strawberry</h4>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//               <img src={save2} alt="rectangle" className={styles["save2"]} />
//             </div>

//             <div className="col-md-4 col-sm-12">
//               <Link to="/recipe">
//                 <div className="card">
//                   <img src={image} className="card-img-top" alt="..." />
//                   <div className="card-body">
//                     <div className="card-title">
//                       <h4>Toast with Milk and Strawberry</h4>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//               <img
//                 src={save3}
//                 alt="rectangle"
//                 className={styles["save3"]}
//                 onClick={loginCoba}
//               />
//             </div>

//             <div className="col-md-4 col-sm-12">
//               <Link to="/recipe">
//                 <div className="card">
//                   <img src={image} className="card-img-top" alt="..." />
//                   <div className="card-body">
//                     <div className="card-title">
//                       <h4>Toast with Milk and Strawberry</h4>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//               {/* <Link to="/login"> */}
//               <img
//                 src={save3}
//                 alt="rectangle"
//                 className={styles["save3"]}
//                 onClick={loginCoba}
//               />
//               {/* </Link> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Navbar, Nav } from my-app;
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoImage from "../assets3/image1.png";
import Card from "react-bootstrap/Card";
import save2 from "../assets3/save2.png";
import sushi from "../assets3/sushi.jpg";

import styles from "../c_iphone-14-3.module.css";
import rectangle from "../assets3/rectangle.png";
import foodrecipes from "../assets3/foodrecipes.png";
import sendok from "../assets3/sendok.png";
import search from "../assets3/search.png";
import rectangle1 from "../assets3/rectangle1.png";
import rumah from "../assets3/rumah.png";
import save from "../assets3/save.png";
import akun from "../assets3/akun.png";
import "bootstrap/dist/css/bootstrap.min.css";
import bg from "../assets/bg.jpg"; //gambar
import image from "../assets3/image1.png"; //gambar
import logo from "../assets3/logo.png"; //gambar
import sampah from "../assets3/sampah.jpg.png"; //gambar
import { Link } from "react-router-dom";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import '../c_iphone-14-5.module.css';
import { Row, Col, Button } from 'react-bootstrap';

const RecipeAdmin = () => {
  return (
    <div className="flex">
    <div className="sidebar bg-emerald-500 w-52 min-h-screen h-auto flex-shrink-0">
        <img src={logo} className={styles['logo']}  alt="..." />
      {/* <a href="/dashboardAdmin" className="block py-3 px-6 text-black no-underline font-medium hover-bg-green-800 duration-500">Dashboard Admin</a>
      <a href="/NewRecipe" className="block py-3 px-6">Tambah Resep</a>
      <a href="/RecipeAdmin" className="block py-3 px-6">Resep Terbaru User</a>
      <a href="/history" className="block py-3 px-6">History User</a>
      <a href="/saran" className="block py-3 px-6">Saran dan Kritik User</a> */}
      <ul className="-ml-8 text-white ">
        <Link to="/dashboardAdmin">
        <li className="px-4 py-2 hover:bg-emerald-400 text-white no-underline">
          <div className="hover:ml-8 ml-6 duration-500 flex gap-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="mt-1 w-5 h-5 bi bi-house-door" viewBox="0 0 16 16">
              <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
            </svg>
            <div className="font-medium mt-1">Dasboard</div>
          </div>
        </li>
        </Link>
        <Link to="/NewRecipe">
        <li className="px-4 py-2 hover:bg-emerald-400 text-white no-underline">
          <div className="hover:ml-8 ml-6 duration-500 flex gap-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="mt-3 w-5 h-5 bi bi-journal-plus" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z" />
            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
          </svg>
            <div className="font-medium mt-1 ">Tambah Resep</div>
          </div>
        </li>
        </Link>
        <Link to="/RecipeAdmin">
        <li className="px-4 py-2 hover:bg-emerald-400 text-white no-underline">
          <div className="hover:ml-8 ml-6 duration-500 flex gap-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="mt-3 w-5 h-5 bi bi-journal-check" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
          </svg>
            <div className="font-medium mt-1 ">Resep Terbaru</div>
          </div>
        </li>
        </Link>
        <Link to="/History">
        <li className="px-4 py-2 hover:bg-emerald-400 text-white no-underline">
          <div className="hover:ml-8 ml-6 duration-500 flex gap-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="mt-3 w-5 h-5 bi bi-journal-check" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
          </svg>
            <div className="font-medium mt-1 ">Simpan Resep User</div>
          </div>
        </li>
        </Link>
      </ul>
      {/* Add more menu items as needed */}
    </div>
      <div className="main-content flex-1 bg-lime-100">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4 text-center">Resep Terbaru User</h1>
          <div className={styles['card4']}>
            <div className="row">
              <div className="col-md-4 col-sm-12 mt-15">
                <Link to="/recipe">
                  <div className="card">
                    <img src={image} className="card-img-top" alt="..." />

                    <div className="card-body">
                      <div className="card-title"><h4>Toast with Milk and Strawberry</h4></div>
                    </div>
                    
                  </div>
                  
                </Link>
                {/* <img src={sampah} className={styles['sampah']} alt="..." /> */}
                {/* <button>
                      <img src={sampah} width={'50px'} height={'50px'} className={styles['sampah']} alt="Delete" />
                    </button> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-trash-fill" className={styles['sampah']} viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-square" className={styles['tambah']} viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
              </div>
              <div className="col-md-4 col-sm-12 mb-15">
                <Link to="/recipe">
                  <div className="card">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <div className="card-title"><h4>Toast with Milk and Strawberry</h4></div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-md-4 col-sm-12 mb-15">
                <Link to="/recipe">
                  <div className="card">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <div className="card-title"><h4>Toast with Milk and Strawberry</h4></div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-md-4 col-sm-12 mb-15">
                <Link to="/recipe">
                  <div className="card">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <div className="card-title"><h4>Toast with Milk and Strawberry</h4></div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-md-4 col-sm-12 mb-15">
                <Link to="/recipe">
                  <div className="card">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <div className="card-title"><h4>Toast with Milk and Strawberry</h4></div>
                    </div>
                  </div>
                </Link>
              </div>


              <div className="col-md-4 col-sm-12 mb-15">
                <Link to="/recipe">
                  <div className="card">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <div className="card-title"><h4>Toast with Milk and Strawberry</h4></div>
                    </div>
                  </div>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
    // <div className="container-fluid">
    //   <div className="row">
    //     <nav className="col-md-2 d-none d-md-block bg-light sidebar">
    //       <div className="sidebar-sticky">
    //         <ul className="nav flex-column">
    //           <li className="nav-item">
    //             <a className="nav-link active" href="#">
    //               Dashboard
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#">
    //               Users
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#">
    //               Products
    //             </a>
    //           </li>
    //           {/* Add more menu items as needed */}
    //         </ul>
    //       </div>
    //     </nav>

    //     <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
    //       <h1 className="mt-4">Admin Dashboard</h1>
    //       {/* Add dashboard content here */}
    //     </main>
    //   </div>
    // </div>
  )
}

export default RecipeAdmin