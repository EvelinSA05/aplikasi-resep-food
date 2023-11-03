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
                    <div className={styles['search2']}>
                        <div className="flex items-center">
                            <input
                                type="text"
                                className="border rounded p-1 w-1/7"
                                placeholder="Cari..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />

                            {/* <button onClick={handleSearch} className="bg-blue-500 text-white rounded p-1 ml-2" type="button">
                Cari
              </button> */}

                            <button className="bg-blue-500 text-white rounded p-1 ml-2" onClick={handleSearch}>Cari</button>
                        </div>
                    </div>
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
                    <img src={image} alt="background" className={styles["foto4"]} />
                </div>
                <br />
                <div className={styles["rectangle3"]}>
                    <div className={styles["rectangleSimpan"]}>
                        <button onClick={handleBookmarkClick}>
                            {isBookmarked ? (
                                <div className={styles["rectangleimg2"]}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bookmark-plus-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm6.5-11a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5V4.5z" />
                                    </svg>
                                </div>
                            ) : (
                                <div className={styles["rectangleimg2"]}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bookmark-plus" viewBox="0 0 16 16">
                                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                        <path d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z" />
                                    </svg>
                                </div>
                            )}
                        </button>
                        <p className={styles["rectangle4"]}>Simpan Resep</p>
                    </div>
                    <div className="container" style={{ marginTop: "50px" }}>
                {/* <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card border-0 rounded shadow-sm">
                            <div className="card-body">
                                <div>
                                Ditulis oleh : <strong className="text-uppercase">{user.name}</strong>
                                </div>
                                <div>
                                Email : <strong className="text-uppercase">{user.email}</strong>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
                    

                    {/* <div className={styles["rectangleSimpan"]}>
                        <img src={pu} alt="background" className={styles["rectangleimg"]} />
                        <p className={styles["rectangle4"]}>Like</p>
                    </div> */}
                </div>
                

                <div className={styles["rectangle7"]}>
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
        </>
    );
};

export default Recipe;