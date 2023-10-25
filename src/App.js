import Login from "./components/Login";
import LoginAdmin from "./components/LoginAdmin";
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
import CobaGet from "./components/CobaGet";

import { Routes, Route, Link } from "react-router-dom";

import React from "react";
import { ResepProvider } from "./Context/ResepContext";

function App() {
  return (
    <ResepProvider>
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
        <Route path="/CobaGet" element={<CobaGet />} />
      </Routes>
      </ResepProvider>
  );
}

export default App;