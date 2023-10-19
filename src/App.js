// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React from 'react'
// import styles from './c_iphone-14-1.module.css'
// import gambar from './assets/112.jpg'
// import gambar1 from './assets/rectangle1.png'
// import gambar2 from './assets/rectangle2.png'
// import gambar3 from './assets/group1.png'

// const App = (props) => {
//   return (
//     <div className={styles['frame']}>
//         <img
//           src={gambar}
//           alt="rectangle"
//           width={390}
//           height={844}
//           className={styles['rectangle']}
//         />
//         <img
//           src={gambar1}
//           alt="rectangle"
//           width={390}
//           height={252}
//           className={styles['rectangle1']}
//         />
//         <img
//           src={gambar3}
//           alt="frame"
//           width={100}
//           height={150}
//         />
//       <div className={styles['text']}>
//       </div>
//       <div className={styles['text2']}>
//         <p className={styles['text3']}>
//           Jelajahi aplikasi ini dan mulai memasak makanan yang lezat!
//         </p>
//       </div>
//       <img
//         src={gambar2}
//         alt="rectangle"
//         width={319}
//         height={51}
//         className={styles['rectangle2']}
//       />
//       <div className={styles['text4']}>
//         <p className={styles['text5']}>Get Started !</p>
//       </div>
//     </div>
//   )
// }
// export default App

// import Home from "./components/Home";
// import Content from "./components/skills/Content";
// import HomePage from "./components/skills/HomePage";
import Login from "./components/Login";
import LoginAdmin from "./components/LoginAdmin";
import Home from "./components/Home";
import HomePageAdmin from "./components/HomePageAdmin";
import HomePageUser from "./components/HomePageUser";
import Recipe from "./components/Recipe";
import User from "./components/User";
import New from "./components/New";
import NewRecipe from "./components/NewRecipe";
import Save from "./components/Save";
import Saran from "./components/Saran";
import SaveAdmin from "./components/SaveAdmin";
import RecipeAdmin from "./components/RecipeAdmin";
import Register from "./components/Register";
import DashboardAdmin from "./components/DashboardAdmin";
import History from "./components/History";

import { Routes, Route, Link } from "react-router-dom";

import React from "react";
// import {
//   Routes,
//   Route,
//   useRoutes,
// } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* <Home /> */}
      {/* <Content />
      <HomePage /> */}
      <Routes>
        <Route path="" element={<HomePageUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginAdmin" element={<LoginAdmin />} />
        <Route path="/homepageAdmin" element={<HomePageAdmin />} />
        <Route path="/homepageUser" element={<HomePageUser />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/recipeAdmin" element={<RecipeAdmin />} />
        <Route path="/user" element={<User />} />
        <Route path="/new" element={<New />} />
        <Route path="/NewRecipe" element={<NewRecipe />} />
        <Route path="/save" element={<Save />} />
        <Route path="/saran" element={<Saran />} />
        <Route path="/saveAdmin" element={<SaveAdmin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboardAdmin" element={<DashboardAdmin />} />
        <Route path="/history" element={<History />} />
      </Routes>
      {/* <Login /> */}
    </BrowserRouter>
  );
}

export default App;