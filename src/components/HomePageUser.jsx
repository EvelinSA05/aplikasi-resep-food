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
import { Link } from "react-router-dom";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

//  navbar-light bg-light

function App() {
  const CarouselImage = {
    width: "1500px",
  };
  const ImageStyle = {
    width: "215px",
    height: "auto",
    justifyContent: "center",
    alignitems: "center",
    display: "flex",
    flexDirection: "row",
  };

    const navigate = useNavigate();

  const loginCoba = () => {
    const result = window.confirm("Anda Belum Login! Apakah Anda ingin login?");
    if (result) {
      navigate("/login");
    } else {
      console.log("Login dibatalkan.");
    }
  };

  return (
    <>
      <Navbar
        sticky="top"
        expand="lg"
        className="bg-success border-bottom"
        style={{ height: "85px", fontSize: "20px" }}
      >
        <Container>
        
          <img
                            src={foodrecipes}
                            alt="rectangle"
                            className={styles['font1']}
                        />
                         <img
                            src={sendok}
                            alt="rectangle"
                            className={styles['sendok']}
                        />
                        <div className={styles['search2']}>
                        <div className="flex items-center">
                            <input
                                type="text"
                                className="border rounded p-1 w-1/7"
                                placeholder="Cari..."
                            />
                            <button className="bg-blue-500 text-white rounded p-1 ml-2" type="button">
                                Cari
                            </button>
                        </div>
                    </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#category">Category</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <nav className="navbar navbar-expand-lg " style={{ backgroundColor: '#e3f2fd' }}>
        <div className="container">
          <a className="navbar-brand" href="#">Perpustakaan</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Beranda</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Koleksi</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Peminjaman</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Tentang Kami</a>
              </li>
            </ul>
          </div>
        </div>
    </nav> */}

<div className={styles["frame2"]}>
      <div className="bg-slate-300 h-full">
      <div className="">
        <div className={styles["alltext"]}>
          <div className={styles["instance"]}>
            <div className={styles["text02"]}>
              <p className={styles["text03"]}>Sarapan</p>
            </div>
          </div>
          <div className={styles["text04"]}>
            <p className={styles["text05"]}>Makan siang</p>
          </div>
          <div className={styles["text06"]}>
            <p className={styles["text07"]}>Camilan</p>
          </div>
          <div className={styles["text08"]}>
            <p className={styles["text09"]}>Makan malam</p>
          </div>
        </div>
        <button className={styles['rectangle9']} onClick={loginCoba}>NEW</button>
      </div>

 <Carousel className="mx-auto mt-2" style={{ width: '800px' }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sushi}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>oshizushi</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sushi}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>oshizushi</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sushi}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>oshizushi</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  <div className={styles["card3"]}>
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <Link to="/recipe">
              <div className="card">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="card-title">
                    <h4>Toast with Milk and Strawberry</h4>
                  </div>
                </div>
              </div>
            </Link>
            <img src={save} alt="rectangle" onClick={loginCoba} className={styles["save2"]} />
          </div>
          <div className="col-md-4 col-sm-12">
            <Link to="/recipe">
              <div className="card">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="card-title">
                    <h4>Toast with Milk and Strawberry</h4>
                  </div>
                </div>
              </div>
            </Link>
            <img src={save} alt="rectangle" className={styles["save2"]} />
          </div>
          <div className="col-md-4 col-sm-12">
            <Link to="/recipe">
              <div className="card">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="card-title">
                    <h4>Toast with Milk and Strawberry</h4>
                  </div>
                </div>
              </div>
            </Link>
            <img src={save} alt="rectangle" className={styles["save2"]} />
          </div>
          <div className="col-md-4 col-sm-12">
            <Link to="/recipe">
              <div className="card">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="card-title">
                    <h4>Toast with Milk and Strawberry</h4>
                  </div>
                </div>
              </div>
            </Link>
            <img src={save} alt="rectangle" className={styles["save2"]} />
          </div>
          <div className="col-md-4 col-sm-12">
            <Link to="/recipe">
              <div className="card">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="card-title">
                    <h4>Toast with Milk and Strawberry</h4>
                  </div>
                </div>
              </div>
            </Link>
            <img src={save} alt="rectangle" className={styles["save2"]} />
          </div>
          <div className="col-md-4 col-sm-12">
            <Link to="/recipe">
              <div className="card">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="card-title">
                    <h4>Toast with Milk and Strawberry</h4>
                  </div>
                </div>
              </div>
            </Link>
            <img src={save} alt="rectangle" className={styles["save2"]} />
          </div>
        </div>
      </div>

      {/* <div className=''>
           <img
             src={rectangle1}
             alt="rectangle"
             className={styles["kotak12"]}
           />
            <Link to="/homepage">
             <img src={rumah} alt="rectangle" className={styles["rumah"]} />
           </Link>
         </div>
         <div className={styles["navbawah"]}>
          
           <Link to="/save">
             <img src={save} alt="rectangle" className={styles["save"]} />
           </Link>
           <Link to="/user">
             <img src={akun} alt="rectangle" className={styles["akun"]} />
           </Link>
         </div> */}

{/* <div className={styles["kertas01"]}>
           <img
             src={rectangle1}
             alt="rectangle"
             className=""
           />
         </div>
         <div className="relative inset-x-0 bottom-7">
           <Link to="/homepage">
             <img src={rumah} alt="rectangle" className={styles["rumah"]} />
           </Link>
           <Link to="/saveAdmin">
             <img src={save} alt="rectangle" className={styles["save"]} />
           </Link>
           <Link to="/user">
             <img src={akun} alt="rectangle" className={styles["akun"]} />
           </Link>
         </div> */}

<nav className={styles["navbar"]}>
      {/* <ul className={styles["navbarlist"]}>
        <li className={styles["navbaritem"]}>Home</li>
      </ul>
      <ul className={styles["navbarlist"]}>
        <li className={styles["navbaritem"]}>Home</li>
      </ul> */}
      <Link to="/homepageUser">
      <img src={rumah} alt="rectangle" className={styles["rumah"]} />
      </Link>
      <Link to="/save">
             <img src={save} alt="rectangle" className={styles["save"]} />
           </Link>
           <Link to="/user">
             <img src={akun} alt="rectangle" className={styles["akun"]} />
           </Link>
    </nav>

         </div>
         </div>
    </>
  );
}

export default App;
