import React from 'react'
import kartun from "../assets4/kartun.jpg";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from "axios";



const User = () => {
  const [users, setUser] = useState([]);
  // const [imageData, setImageData] = useState(null);

  useEffect(() => {
    // const getReseps = async () => {
    //   const apiReseps = await axios.get("http://127.0.0.1:8000/api/reseps");
    //   setReseps(apiReseps.data);
    // };
    // getReseps();

    axios.get('http://127.0.0.1:8000/api/user')
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className='bg-slate-200 w-full h-full'>
      <div className="max-w-7xl mx-auto min-h-screen">
        <div className="relative overflow-x-auto">
          <h1 className="text-4xl font-bold mt-20 ml-10">User Profile</h1>
          {/* <div className="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-lg mt-10">
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
            <Link to="/"><button
              className="px-4 py-10 bg-red-500 hover:bg-red-700 text-white rounded-md"
            >
              Log Out
            </button></Link>
          </div> */}

          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Nama Akun
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Password
                  </th>
                  <th scope="col" className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => {
                  return (
                    <tr
                      key={user.id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td className="px-6 py-4">{user.name}</td>
                      <td className="px-6 py-4">{user.email}</td>
                      <td className="px-6 py-4">{user.password}</td>
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

export default User