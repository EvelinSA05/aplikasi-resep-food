import React from 'react';
import styles from '../c_iphone-14-3.module.css'
import save2 from "../assets3/save2.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../assets3/image1.png' //gambar
import { Link } from "react-router-dom";
import foodrecipes from "../assets3/foodrecipes.png";
import sendok from "../assets3/sendok.png";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useParams } from 'react-router-dom';
import rumah from "../assets3/rumah.png";
import save from "../assets3/save.png";
import akun from "../assets3/akun.png";

import { useState, useEffect, useContext } from "react";
import axios from "axios";
import ResepContext from "../Context/ResepContext";
axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

const CustomerData = () => {
  const [saved, setSave] = useState([]);
  // const [imageData, setImageData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // const getReseps = async () => {
    //   const apiReseps = await axios.get("http://127.0.0.1:8000/api/reseps");
    //   setReseps(apiReseps.data);
    // };
    // getReseps();

    // axios.get('http://127.0.0.1:8000/api/histories')
    //   .then(response => {
    //     setSave(response.data);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });

      const getSave = async () => {
        const apiSave = await axios.get("histories");
        setSave(apiSave.data);
      };
      getSave();
    }, []);


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

      <div className={styles['card4']}>
      <div className='bg-slate-300 w-full h-full'>
        <div className="row">
          <h1 className="text-center">Histori Resep</h1>
          {/* <div className="col-md-4 col-sm-12 mt-15">
          <Link to="/recipe">
            <div className="card">
              <img src={image} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="card-title"><h4>Toast with Milk and Strawberry</h4></div>
              </div>
            </div>
          </Link>
          <img
            src={save2}
            alt="rectangle"
            className={styles['save2']}
          />
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
          <img
            src={save2}
            alt="rectangle"
            className={styles['save2']}
          />
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
          <img
            src={save2}
            alt="rectangle"
            className={styles['save2']}
          />
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

          <img
            src={save2}
            alt="rectangle"
            className={styles['save2']}
          />

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

          <img
            src={save2}
            alt="rectangle"
            className={styles['save2']}
          />

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

          <img
            src={save2}
            alt="rectangle"
            className={styles['save2']}
          />

        </div> */}

          {/* {saved.map((save) => {
          return (
            // <tr key={resep.id}>
            //   <td>{resep.image}</td>
            //   <td>{resep.title}</td>
            //   <td>{resep.ingredients}</td>
            //   <td>{resep.step}</td>
            // </tr>



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
                    <th scope="col" className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {saved.map((save) => {
                    return (
                      <tr
                        key={save.id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      >
                        <td className="px-6 py-4">{save.title}</td>
                        <td className="px-6 py-4">{save.image}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              </div>
          );
        })} */}

      
            {/* <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nama Resep
                </th>
                <th scope="col" className="px-6 py-3">
                  Gambar
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody> */}
            {saved.map((save) => {
              return (
                <div key={save.id} className="col-md-4 col-sm-12">
                  <div className="card mt-10">
                    <img src={save.image} alt="Uploaded Image" className={styles["foto"]} />
                    <div className="card-body">
                      <div className="card-title">
                        <h4>{save.title}</h4>
                      </div>
                    </div>
                  </div>
                  <img src={save2} alt="rectangle" className={styles["save2"]} />
                </div>
              );
            })}
            {/* </tbody>
          </table> */}

          <nav className={styles["navbar"]}>
            <Link to="/">
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
      </div>
      </>
    );
  };

  export default CustomerData;
