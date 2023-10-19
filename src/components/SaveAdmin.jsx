import React from 'react'

const SaveAdmin = () => {
  return (
    <div className="overflow-x-auto mt-20">
    <h1 className="text-center p-1">Histori Resep User</h1>
      <table className="table-auto w-full border-collapse border border-green-800">
        <thead>
          <tr className="bg-green-500 text-white">
            <th className="px-4 py-2">Nama Akun</th>
            <th className="px-4 py-2">Nama Resep</th>
            <th className="px-4 py-2">Kategori</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">John Doe</td>
            <td className="border px-4 py-2">Bread Toast</td>
            <td className="border px-4 py-2">Breakfast</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Jane Smith</td>
            <td className="border px-4 py-2">Fried Rice</td>
            <td className="border px-4 py-2">Breakfast</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Jane Smith</td>
            <td className="border px-4 py-2">Fried Rice</td>
            <td className="border px-4 py-2">Breakfast</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Jane Smith</td>
            <td className="border px-4 py-2">Fried Rice</td>
            <td className="border px-4 py-2">Breakfast</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Jane Smith</td>
            <td className="border px-4 py-2">Fried Rice</td>
            <td className="border px-4 py-2">Breakfast</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default SaveAdmin