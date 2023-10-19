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
import logo from "../assets3/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import bg from "../assets/bg.jpg"; //gambar
import image from "../assets3/image1.png"; //gambar
import { Link } from "react-router-dom";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import '../c_iphone-14-5.module.css';
import {Row, Col, Button } from 'react-bootstrap';
import kartun from "../assets4/kartun.jpg";

const DashboardAdmin = () => {
  return (
    <div className="flex">
        <div className="sidebar bg-emerald-500 w-52 min-h-screen h-auto flex-shrink-0">
        <img src={logo} className={styles['logo']}  alt="..." />
      {/* <a href="/dashboardAdmin" className="block py-3 px-6 text-black no-underline font-medium hover-bg-green-800 duration-500">Dashboard Admin</a>
      <a href="/NewRecipe" className="block py-3 px-6">Tambah Resep</a>
      <a href="/RecipeAdmin" className="block py-3 px-6">Resep Terbaru User</a>
      <a href="/history" className="block py-3 px-6">History User</a>
      <a href="/saran" className="block py-3 px-6">Saran dan Kritik User</a> */}
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
      {/* Add more menu items as needed */}
    </div>
    <div className="main-content flex-1 bg-lime-100">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Dashboard Admin</h1>

        <div className="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-lg mt-10">
      <div className="flex-shrink-0 mb-4 md:mr-6">
        <img
          src={kartun}
          alt="Profile"
          className="w-24 h-24 rounded-full"
        />
      </div>
      <div className="flex-grow">
        <h2 className="text-xl font-bold mb-2">John Doe</h2>
        <p>Email: john.doe@contoh.com</p>
        <p>Phone: 1234567890</p>
      </div>
      <Link to="/loginAdmin"><button
                      className="px-4 py-10 bg-red-500 hover:bg-red-700 text-white rounded-md"
                    >
                      Log Out
                    </button></Link>
    </div>
       
      </div>
    </div>
  </div>
  )
}

export default DashboardAdmin