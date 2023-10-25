import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/css/bootstrap.min.css";
import '../c_iphone-14-5.module.css';

const Saran = () => {
  return (
    <div className="flex">
      <div className="sidebar bg-gray-200">
        <a href="/dashboardAdmin" className="block py-3 px-6">Dashboard Admin</a>
        <a href="/NewRecipe" className="block py-3 px-6">Tambah Resep</a>
        <a href="/RecipeAdmin" className="block py-3 px-6">Resep Terbaru User</a>
        <a href="/history" className="block py-3 px-6">History User</a>
        <a href="/saran" className="block py-3 px-6">Saran dan Kritik User</a>

      </div>
      <div className="main-content flex-1 bg-white">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4 text-center">Saran dan Kritik User</h1>

          <table className="table-auto w-full border-collapse border border-green-800">
            <thead>
              <tr className="bg-green-500 text-white">
                <th className="px-4 py-2">Nama Resep</th>
                <th className="px-4 py-2">Kritik</th>
                <th className="px-4 py-2">Saran</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Fried Rice</td>
                <td className="border px-4 py-2">Langkah-langkahnya tidak sesuai</td>
                <td className="border px-4 py-2">Sebaiknya ada video di tiap langkah-langkah</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Nasi Goreng</td>
                <td className="border px-4 py-2">Langkah-langkahnya tidak sesuai</td>
                <td className="border px-4 py-2">Sebaiknya ada video di tiap langkah-langkah</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Nasi Ayam</td>
                <td className="border px-4 py-2">Langkah-langkahnya tidak sesuai</td>
                <td className="border px-4 py-2">Sebaiknya ada video di tiap langkah-langkah</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Nasi Ayam</td>
                <td className="border px-4 py-2">Langkah-langkahnya tidak sesuai</td>
                <td className="border px-4 py-2">Sebaiknya ada video di tiap langkah-langkah</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Nasi Ayam</td>
                <td className="border px-4 py-2">Langkah-langkahnya tidak sesuai</td>
                <td className="border px-4 py-2">Sebaiknya ada video di tiap langkah-langkah</td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
  )
}

export default Saran