import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import sushi from "../assets3/sushi.jpg";

import styles from "../c_iphone-14-3.module.css";
import foodrecipes from "../assets3/foodrecipes.png";
import sendok from "../assets3/sendok.png";
import rumah from "../assets3/rumah.png";
import save from "../assets3/save.png";
import akun from "../assets3/akun.png";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../assets3/image1.png"; //gambar
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useState, useEffect, useContext } from "react";
import axios from "axios";
import ResepContext from "../Context/ResepContext";

export const HomePageUser = () => {
  // const [reseps, setReseps] = useState([]);
  // // const [imageData, setImageData] = useState(null);

  // useEffect(() => {
  //   const getReseps = async () => {
  //     const apiReseps = await axios.get("http://127.0.0.1:8000/api/reseps");
  //     setReseps(apiReseps.data);
  //   };
  //   getReseps();

  //   // axios.get('http://127.0.0.1:8000/api/reseps')
  //   //   .then(response => {
  //   //     setReseps(response.data);
  //   //   })
  //   //   .catch(error => {
  //   //     console.error(error);
  //   //   });
  // }, []);

  const { reseps, getReseps, deleteSkill } = useContext(ResepContext);
  useEffect(() => {
    getReseps();
  }, []);

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
        </Container>
      </Navbar>

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
            <Link to="/New">
              <button className={styles['rectangle9']}>NEW</button>
            </Link>
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
              {/* <div className="col-md-4 col-sm-12">
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
              </div> */}
              {/* <div className="col-md-4 col-sm-12">
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
              </div> */}
              {/* <div className="col-md-4 col-sm-12">
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
              </div> */}
              {/* <div className="col-md-4 col-sm-12">
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
              </div> */}
              {/* <div className="col-md-4 col-sm-12">
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
              </div> */}
              {/* <div className="col-md-4 col-sm-12">
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
              </div> */}

               
              {/* {reseps.map((resep) => {
                return (
                // <tr key={resep.id}>
                //   <td>{resep.image}</td>
                //   <td>{resep.title}</td>
                //   <td>{resep.ingredients}</td>
                //   <td>{resep.step}</td>
                // </tr>
               
               

                <div key={resep.id} className="col-md-4 col-sm-12">
                  <Link to="">
                    <div className="card">
                    <img src={resep.image} alt="Uploaded Image" />
                      <div className="card-body">
                        <div className="card-title">
                          <h4>{resep.title}</h4>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <img src={save} alt="rectangle" className={styles["save2"]} />
                </div>
                );
              })} */}


              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Nama Resep
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Gambar
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Ingredients
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Step
                      </th>
                      <th scope="col" className="px-6 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {reseps.map((resep) => {
                      return (
                        <tr
                          key={resep.id}
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                          <td className="px-6 py-4">{resep.title}</td>
                          <td className="px-6 py-4">{resep.image}</td>
                          <td className="px-6 py-4">{resep.ingredients}</td>
                          <td className="px-10 py-4">{resep.step}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div> 
            </div>
          </div>

          <Carousel className="mx-auto mt-20" style={{ width: '800px' }}>
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

          <nav className={styles["navbar"]}>
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

export default HomePageUser;
