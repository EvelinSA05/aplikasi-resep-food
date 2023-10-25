import React from 'react';
import styles from '../c_iphone-14-3.module.css'
import save2 from "../assets3/save2.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../assets3/image1.png' //gambar
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from "axios";

const CustomerData = () => {
  const [saved, setSave] = useState([]);
  // const [imageData, setImageData] = useState(null);

  useEffect(() => {
    // const getReseps = async () => {
    //   const apiReseps = await axios.get("http://127.0.0.1:8000/api/reseps");
    //   setReseps(apiReseps.data);
    // };
    // getReseps();

    axios.get('http://127.0.0.1:8000/api/histories')
      .then(response => {
        setSave(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  return (
    <div className={styles['card4']}>
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



      </div>
    </div>
  );
};

export default CustomerData;
