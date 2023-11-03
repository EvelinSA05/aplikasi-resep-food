import Login from "./components/Login";
import LoginAdmin from "./components/LoginAdmin";
import LogoutAdmin from "./components/LogoutAdmin";
import HomePageAdmin from "./components/HomePageAdmin";
import HomePageUser from "./components/HomePageUser";
import Recipe from "./components/Recipe";
import RecipeLogin from "./components/RecipeLogin";
import User from "./components/User";
import New from "./components/New";
import NewUser from "./components/NewUser";
import NewRecipe from "./components/NewRecipe";
import NewAdmin from "./components/NewAdmin";
import Save from "./components/Save";
import Saran from "./components/Saran";
import SaveAdmin from "./components/SaveAdmin";
import RecipeAdmin from "./components/RecipeAdmin";
import EditAdmin from "./components/EditAdmin";
import Register from "./components/Register";
import RegisterAdmin from "./components/RegisterAdmin";
import DashboardAdmin from "./components/DashboardAdmin";
import Approve from "./components/Approve";
import DashboardLogin from "./components/DashboardLogin";
import Akun from "./components/Akun";
import History from "./components/History";
import CobaGet from "./components/CobaGet";
import SearchResults from "./components/SearchResult";

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
        <Route path="/logoutAdmin" element={<LogoutAdmin />} />
        <Route path="/homepageAdmin" element={<HomePageAdmin />} />
        <Route path="/homepageUser" element={<HomePageUser />} />
        <Route path="/reseps/:id" element={<Recipe />} />
        <Route path="/reseps/:id/login" element={<RecipeLogin />} />
        <Route path="/recipeAdmin" element={<RecipeAdmin />} />
        <Route path="/editAdmin/:id" element={<EditAdmin />} />
        <Route path="/user" element={<User />} />
        <Route path="/new" element={<New />} />
        <Route path="/NewUser" element={<NewUser />} />
        <Route path="/NewRecipe" element={<NewRecipe />} />
        <Route path="/NewAdmin" element={<NewAdmin />} />
        <Route path="/save" element={<Save />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/saran" element={<Saran />} />
        <Route path="/saveAdmin" element={<SaveAdmin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registerAdmin" element={<RegisterAdmin />} />
        <Route path="/dashboardAdmin" element={<DashboardAdmin />} />
        <Route path="/approve" element={<Approve />} />
        <Route path="/akun" element={<Akun />} />
        <Route path="/dashboardLogin" element={<DashboardLogin />} />
        <Route path="/history" element={<History />} />
        <Route path="/CobaGet" element={<CobaGet />} />
      </Routes>
      </ResepProvider>
  );
}

export default App;