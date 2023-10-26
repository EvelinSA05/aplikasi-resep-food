import React from 'react';
import { useContext, useEffect, useState } from "react";
import ResepContext from '../Context/ResepContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from "../c_iphone-14-3.module.css";

import axios from 'axios';
axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

export const New = () => {
  // const { formValues, onChange, storeResep, errors, setErrors } =
  //   useContext(ResepContext);
  // useEffect(() => {
  //   setErrors({});

  const [akunadmin, setAkunAdmin] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [telp, setTelp] = useState('');

  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const storeAdmin = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('akunadmin', akunadmin);
    formData.append('password', password);
    formData.append('email', email);
    formData.append('telp', telp);

    await axios.post("admin", formData)
      .then(() => {

        navigate('/dashboardAdmin');


      })
      .catch(error => {

        setErrors(error.response.data);
      })
  }


  return (
    // <div className="bg-slate-200 w-full h-full">
    //   <div className="max-w-7xl mx-auto min-h-screen">
    //     <form onSubmit={storeResep}
    //       className="max-w-md mx-auto p-4 bg-white shadow-md rounded-sm pt-60"
    //     >
    //       <div className="space-y-6">
    //         <div className="mb-4">
    //           <label className="block mb-2 text-sm font-medium">
    //             Nama Resep
    //             <input
    //               name="title"
    //               value={formValues["title"]}
    //               onChange={onChange}
    //               className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
    //             />
    //           </label>

    //         </div>
    //         <div className="mb-4">
    //           <label className="block mb-2 text-sm font-medium">
    //             Gambar
    //             <input
    //               type='file'
    //               name="image"
    //               value={formValues["image"]}
    //               onChange={onChange}
    //             />
    //           </label>

    //         </div>
    //         <div className="mb-4">
    //           <label className="block mb-2 text-sm font-medium">
    //             Bahan dan Alat
    //             <input
    //               name="ingredients"
    //               value={formValues["ingredients"]}
    //               onChange={onChange}
    //               className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
    //             />
    //           </label>


    //         </div>
    //         <div className="mb-4">
    //           <label className="block mb-2 text-sm font-medium">
    //             Langkah-Langkah
    //             <input
    //               name="step"
    //               value={formValues["step"]}
    //               onChange={onChange}
    //               className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
    //             />
    //           </label>



    //         </div>
    //         <div className="mb-4">
    //           <label className="block mb-2 text-sm font-medium">
    //             Nama Akun
    //             <input
    //               name="namaakun"
    //               value={formValues["namaakun"]}
    //               onChange={onChange}
    //               className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
    //             />
    //           </label>


    //         </div>
    //       </div>
    //       <div className="my-4">
    //         <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
    //           ADD
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>

    <div className={styles["frame2"]}>
    <div className="bg-slate-300 h-full w-full">
      <form
        encType="multipart/form-data"
        onSubmit={storeAdmin}

        className="max-w-md mx-auto p-4 bg-white shadow-md rounded-sm"
      >
        <div className="space-y-6">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Nama Admin
            </label>
            <input
              name="akunadmin"
              onChange={(e) => setAkunAdmin(e.target.value)}
              className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
            />
            {errors.akunadmin && (
              <span className="text-sm text-red-400">{errors.akunadmin[0]}</span>
            )}
          </div>
          {/* <div className="mb-4">
          <label htmlFor="slug" className="block mb-2 text-sm font-medium">
            Slug
          </label>
          <input
          type="file"
            name="image"
            value={formValues.image}
            onChange={onChange}
            className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
          />
          {errors.image && (
            <span className="text-sm text-red-400">{errors.image[0]}</span>
          )}
        </div> */}
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Password
            </label>
            <input
              name="password"
              // value={formValues.step}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
            />
            {errors.password && (
              <span className="text-sm text-red-400">{errors.password[0]}</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              name="email"
              // value={formValues.ingredients}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
            />
            {errors.email && (
              <span className="text-sm text-red-400">{errors.email[0]}</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Telpon
            </label>
            <input
              name="telp"
              // value={formValues.ingredients}
              onChange={(e) => setTelp(e.target.value)}
              className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
            />
            {errors.telp && (
              <span className="text-sm text-red-400">{errors.telp[0]}</span>
            )}
          </div>
        </div>
        <div className="my-4">
          <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
            Store
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default New