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

import ResepContext from "../Context/ResepContext";

import { useState, useEffect, useContext } from "react";
import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

const Recipe = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [step, setStep] = useState('');
  const [image, setImage] = useState('');

  const { id } = useParams();

  const fetchRecipe = async () => {
        
    await axios.get(`reseps/${id}`)
        .then(response => {
            setTitle(response.data.title);
            setImage(response.data.image);
            setIngredients(response.data.ingredients);
            setStep(response.data.step);
        })
  };

  fetchRecipe();

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
      {/* <img src={bg} alt="background" className={styles["rectangle"]} />
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
            <tr>
                  <td className="px-6 py-4">{title}</td>
                  <td className="px-6 py-4">{ingredients}</td>
                  <td className="px-10 py-4">{step}</td>
                </tr>
          </tbody>
        </table>
      </div> */}

<img src={bg} className={styles["rectangle"]} alt="" />
      <h1 className="">{title}</h1>
      <br />
      <div className={styles["rectangle1"]}>
        <img src={image} alt="background" className={styles["foto4"]} />
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
                <div className="card-title">
                  <h2>Bahan-Bahan</h2>
                  <ul>
                    <li>{ingredients}</li>
                  </ul>
                  <br />
                  <h2>Langkah-Langkah</h2>
                  <ul>
                    <li>{step}</li>
                  </ul>
                </div>
                <img
                  src={kotak}
                  alt="background"
                  className={styles["rectangel2"]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;