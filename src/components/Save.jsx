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
  const [bookmarkedRecipes, setBookmarkedRecipes] = useState([]);
  // const [imageData, setImageData] = useState(null);
  const { id } = useParams();

  // useEffect(() => {
  //   // const getReseps = async () => {
  //   //   const apiReseps = await axios.get("http://127.0.0.1:8000/api/reseps");
  //   //   setReseps(apiReseps.data);
  //   // };
  //   // getReseps();

  //   // axios.get('http://127.0.0.1:8000/api/histories')
  //   //   .then(response => {
  //   //     setSave(response.data);
  //   //   })
  //   //   .catch(error => {
  //   //     console.error(error);
  //   //   });

  //     const getSave = async () => {
  //       const apiSave = await axios.get("histories");
  //       setSave(apiSave.data);
  //     };
  //     getSave();
  //   }, []);

  useEffect(() => {
    // Mengambil data status bookmark dari server
    axios.get('http://127.0.0.1:8000/api/reseps')
      .then(response => {
        // Filter hanya resep yang memiliki status bookmark true (1)
        const filteredRecipes = response.data.filter(reseps => reseps.is_bookmarked === 1);
        setBookmarkedRecipes(filteredRecipes);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleRemoveBookmark = (recipeId) => {
    // Kirim permintaan DELETE ke server untuk menghapus tanda bookmark
    axios.delete(`http://127.0.0.1:8000/api/reseps/${recipeId}/bookmark`)
      .then(response => {
        // Jika berhasil, perbarui daftar bookmark di halaman
        setBookmarkedRecipes(bookmarkedRecipes.filter(recipe => recipe.id !== recipeId));
      })
      .catch(error => {
        console.error(error);
      });
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
            {/* {saved.map((save) => {
              return (
                <div key={save.id} className="col-md-4 col-sm-12">
                  <Link to={`histories/${save.id}`}>
                  <div className="card mt-10">
                    <img src={save.image} alt="Uploaded Image" className={styles["foto"]} />
                    <div className="card-body">
                      <div className="card-title">
                        <h4>{save.title}</h4>
                      </div>
                    </div>
                  </div>
                  </Link>
                  <img src={save2} alt="rectangle" className={styles["save2"]} />
                </div>
              );
            })} */}

            {bookmarkedRecipes.map((resep) => {
              return (
                <div key={resep.id} className="col-md-4 col-sm-12">
                  <Link to={`/reseps/${resep.id}`}>
                    <div className="card mt-10">
                      <img src={resep.image} alt="Uploaded Image" className={styles["foto"]} />
                      <div className="card-body">
                        <div className="card-title">
                          <h4>{resep.title}</h4>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <button onClick={() => handleRemoveBookmark(resep.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                    </svg>
                  </button>
                  <img src={save2} alt="rectangle" className={styles["save2"]} />
                </div>
              );
            })}
            {/* </tbody>
          </table> */}

            <nav className={styles["navbar"]}>
              <Link to="/dashboardLogin">
                <img src={rumah} alt="rectangle" className={styles["rumah"]} />
              </Link>
              <Link to="/save">
                <img src={save} alt="rectangle" className={styles["save"]} />
              </Link>
              <Link to="/akun">
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

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Bookmark = () => {
//   const [bookmarkedRecipes, setBookmarkedRecipes] = useState([]);

//   useEffect(() => {
//     // Mengambil data status bookmark dari server
//     axios.get('http://127.0.0.1:8000/api/reseps')
//       .then(response => {
//         // Filter hanya resep yang memiliki status bookmark true (1)
//         const filteredRecipes = response.data.filter(reseps => reseps.is_bookmarked === 1);
//         setBookmarkedRecipes(filteredRecipes);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Bookmark</h1>
//       <ul>
//         {bookmarkedRecipes.map(resep => (
//           <li key={resep.id}>
//             <img src={resep.image} alt="" />
//             <h2>{resep.title}</h2>
//             {/* Menampilkan hanya resep yang memiliki status bookmark true (1) */}
//             Status: Bookmarked
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Bookmark;
