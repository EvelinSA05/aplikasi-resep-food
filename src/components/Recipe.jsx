import React from "react";
import styles from "../c_iphone-14-4.module.css";
import bg from "../assets4/gambarmakanan2.png";
import po from "../assets4/stroberyy.png";
import pu from "../assets4/like-removebg-preview.png";
import pi from "../assets4/chaaat-removebg-preview.png";
import kotak from "../assets4/Rectangle 11842.png";
import save from "../assets3/save.png";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { useState, useEffect } from "react";
import axios from "axios";

const Recipe = () => {
  const [recipes, setRecipe] = useState([]);
  // const [imageData, setImageData] = useState(null);

  useEffect(() => {
    // const getReseps = async () => {
    //   const apiReseps = await axios.get("http://127.0.0.1:8000/api/reseps");
    //   setReseps(apiReseps.data);
    // };
    // getReseps();

    axios.get('http://127.0.0.1:8000/api/reseps')
      .then(response => {
        setRecipe(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  // const [reseps, setReseps] = useState([]);

  // useEffect(() => {
  //   // const getReseps = async () => {
  //   //   const apiReseps = await axios.get("http://127.0.0.1:8000/api/reseps");
  //   //   setReseps(apiReseps.data);
  //   // };
  //   // getReseps();

  //   axios.get('http://127.0.0.1:8000/api/reseps/{id}')
  //     .then(response => {
  //       setReseps(response.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);

  // const { id } = useParams(); // Mengambil ID dari URL dengan useParams
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   axios.get(`http://127.0.0.1:8000/api/reseps/${id}`)
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, [id]);

  const navigate = useNavigate();

  const loginCoba = () => {
    const result = window.confirm('Anda Belum Login! Apakah Anda ingin login?');
    if (result) {
      navigate('/login');
    } else {
      console.log('gagal')
    }
  };
  return (
    <div className={styles["frame"]}>
      <img src={bg} alt="background" className={styles["rectangle"]} />
      <br />
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
            {recipes.map((recipe) => {
              return (
                <tr
                  key={recipe.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4">{recipe.title}</td>
                  <td className="px-6 py-4">{recipe.image}</td>
                  <td className="px-6 py-4">{recipe.ingredients}</td>
                  <td className="px-10 py-4">{recipe.step}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>

      {/* <h1 className="">Toast with Milk Strawberry</h1>
      <br />
      <div className={styles["rectangle1"]}>
        <img src={po} alt="background" />
      </div>
      <br />
      <div className={styles["rectangle3"]}>
        <div className={styles["rectangleSimpan"]} onClick={loginCoba}>
          <img src={save} alt="background" className={styles["rectangleimg"]} />
          <p className={styles["rectangle4"]}>Simpan Resep</p>
        </div>

        <div className={styles["rectangleSimpan"]} onClick={loginCoba}>
          <img src={pu} alt="background" className={styles["rectangleimg"]} />
          <p className={styles["rectangle4"]}>Like</p>
        </div>
      </div>

      <div className={styles["rectangle7"]}>
        <div className="container text-center">
          <div className="row align-items-start">
            <div className="card mb-100">
              <div className="">
                {reseps.map((resep)=>{
                  return (
                <div className="card-title">
                  <h2>Bahan-Bahan</h2>
                  <br />
                  <ul>
                    <li>* 4 potong roti tawar</li>
                    <li>* 2 butir telur</li>
                    <li>* 2 buah strawberry</li>
                    <li>* 1/2 liter susu</li>
                    <li>* gula secukupnya</li>
                  </ul>
                  <br />
                  <br />
                  <ul>
                    <li>
                      <h4>Langkah 1</h4>Kita buat dl bahan tang zhong: larutkan 20
                      gr terigu+ air..lalu masak hingga mengental di atas kompor
                      dgn api kecil..setelah mengental angkat dan
                      sisihkan..biarkan smpe auhu ruang
                    </li>
                    <li>
                      <h4>Langkah 2</h4>Masukan dlm wadah lain tepung, gulpas,
                      ragi, telur, pasta strawberry dan tangzhong pasta..uleni
                      smbil tuangi susu cair perlahan²
                    </li>
                    <li>
                      <h4>Langkah 3</h4>Setelah setengah kalis br masukan butter
                      dan garam lalu uleni smpai bnr² kalis elastis..
                    </li>
                    <li>
                      <h4>Langkah 4</h4>Bentuk adonan sesuai selera lalu tutup
                      adonan dengan kain bersih atw plastik wrap smpe mengembang
                      2× lipat
                    </li>
                    <li>
                      <h4>Langkah 5</h4>Panaskan oven di suhu 170°C..panggang
                      adonan selama 25 smpe 35 menit tergantung oven masing²..
                    </li>
                  </ul>
                </div>
                );
              })}
                <img
                  src={kotak}
                  alt="background"
                  className={styles["rectangel2"]}
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Recipe;