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
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import foodrecipes from "../assets3/foodrecipes.png";
import sendok from "../assets3/sendok.png";
import rumah from "../assets3/rumah.png";
import akun from "../assets3/akun.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBookmark, faBookmark as faBookmarkSolid } from '@fortawesome/free-regular-svg-icons';
// import { faBookmark as faBookmarkSolid } from '@fortawesome/free-solid-svg-icons';


import ResepContext from "../Context/ResepContext";

import { useState, useEffect, useContext } from "react";
import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

const Recipe = () => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [step, setStep] = useState('');
    const [image, setImage] = useState('');
    const [reseps, setReseps] = useState([]);
    const [onBookmark] = useState([]);
    const [results, setResults] = useState([]);

    const { id } = useParams();
    const [query, setQuery] = useState('');

    const [user, setUser] = useState({});


    //token
    const token = localStorage.getItem("token");

    //function "fetchData"
    const fetchData = async () => {

        //set axios header dengan type Authorization + Bearer token
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        //fetch user from Rest API
        await axios.get('http://localhost:8000/api/user')
            .then((response) => {

                //set response user to state
                setUser(response.data);
            })
    }


    const [isBookmarked, setIsBookmarked] = useState(reseps.is_bookmarked);

    const handleBookmarkClick = () => {
        axios.post(`http://127.0.0.1:8000/api/reseps/${id}/bookmark`)
            .then(response => {
                setIsBookmarked(!isBookmarked);
            })
            .catch(error => {
                console.error(error);
            });

        // axios.get(`http://127.0.0.1:8000/api/reseps/${id}/approve`)
        // .then(response => {
        //     setIsBookmarked(!isBookmarked);
        // })
        // .catch(error => {
        //     console.error(error);
        // });
    };

    //hook useEffect
    useEffect(() => {

        //check token empty
        if (!token) {

            //redirect login page
            navigate('/');
        }

        //call function "fetchData"
        fetchData();
    }, []);


    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/reseps/search?query=${query}`);
            setResults(response.data);

            // Setelah menerima hasil pencarian, arahkan pengguna ke halaman hasil pencarian
            navigate(`/search?query=${query}`);
        } catch (error) {
            console.error(error);
        }
    }

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
                    {/* <img
            src={sendok}
            alt="rectangle"
            className={styles['sendok']}
          /> */}
                  
                </Container>
            </Navbar>

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


                {/* <img src={bg} className={styles["rectangle"]} alt="" /> */}
                <h1 className="mt-10">{title}</h1>
                <br />
                <div className={styles["rectangle1"]}>
                    <img src={image} alt="background" className={styles["fotor"]} />
                </div>
                <br />
                <br />

                <div className={styles["rectangl7"]}>
                    <div className="container text-center">
                        <div className="row align-items-start">
                            <div className="card mb-150">
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
                                            <br />
                                        </ul>
                                    </div>
                                    <img
                                        src={kotak}
                                        alt="background"
                                        className={styles["rectangel2"]}
                                    />
                                    {/* <button onClick={handleBookmarkClick}>
                      {isBookmarked ? 'Unbookmark' : 'Bookmark'}
                    </button> */}
                                    {/* <button onClick={handleBookmarkClick}>
                  {isBookmarked ? (
                    <FontAwesomeIcon icon={faBookmarkSolid} />
                  ) : (
                    <FontAwesomeIcon icon={faBookmark} />
                  )}
                </button> */}

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

           
        </>
    );
};

export default Recipe;