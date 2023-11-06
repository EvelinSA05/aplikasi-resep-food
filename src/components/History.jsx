import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import styles from "../c_iphone-14-3.module.css";
import logo from "../assets3/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import '../c_iphone-14-5.module.css';
import { useParams } from 'react-router-dom';

import { useState, useEffect } from "react";
import axios from "axios";


const History = () => {
  const [histories, setHistory] = useState([]);
  const [saved, setSave] = useState([]);
  const [bookmarkedRecipes, setBookmarkedRecipes] = useState([]);
  // const [imageData, setImageData] = useState(null);
  const { id } = useParams();

  // const [imageData, setImageData] = useState(null);

  // useEffect(() => {
  //   // const getReseps = async () => {
  //   //   const apiReseps = await axios.get("http://127.0.0.1:8000/api/reseps");
  //   //   setReseps(apiReseps.data);
  //   // };
  //   // getReseps();

  //   axios.get('http://127.0.0.1:8000/api/histories')
  //     .then(response => {
  //       setHistory(response.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);

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

  return (
    <div className="flex">
      <div className="sidebar bg-emerald-500 w-52 min-h-screen h-auto flex-shrink-0">
        <img src={logo} className={styles['logo']} alt="..." />
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

      </div>
      <div className="main-content flex-1 bg-lime-100">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4 text-center">BookMark User</h1>

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
                    Nama Akun
                  </th>
                  <th scope="col" className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {/* {histories.map((history) => {
              return (
                <tr
                  key={history.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4">{history.title}</td>
                  <td className="px-6 py-4">{history.namaakun}</td>
                  <td className="px-6 py-4">{history.kategori}</td>
                </tr>
              );
            })} */}
                {bookmarkedRecipes.map((resep) => {
                  return (
                    <tr
                      key={resep.id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td className="px-6 py-4">{resep.title}</td>
                      <img src={resep.image} width={100} height={70} alt="" />
                      <td className="px-6 py-4">{resep.name}</td>
                      <Link to={`/reseps/${resep.id}/admin`}>
                        <div>
                          <button className="btn btn-success rounded-sm shadow border-0">DETAIL</button>
                        </div>
                      </Link>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  )
}

export default History