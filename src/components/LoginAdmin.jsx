import React from 'react'
import { Link } from "react-router-dom";

const LoginAdmin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Login Admin</h2>
        <form onSubmit=''>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 mb-2">Username</label>
            <input
              type="text"
              id="username"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Masukkan username"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Masukkan password"
            />
          </div>
          <Link to="/dashboardAdmin">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button></Link>
        </form>
      </div>
    </div>
  )
}

export default LoginAdmin