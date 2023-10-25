import React from 'react';
import { useContext, useEffect } from "react";
import ResepContext from '../Context/ResepContext';

const New = () => {
  const { formValues, onChange, storeResep } =
    useContext(ResepContext);
  useEffect(() => {
    //
  }, []);


  return (
    <div className="bg-slate-200 w-full h-full">
      <div className="max-w-7xl mx-auto min-h-screen">
        <form onSubmit={storeResep}
          className="max-w-md mx-auto p-4 bg-white shadow-md rounded-sm pt-60"
        >
          <div className="space-y-6">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Nama Resep
              </label>
              <input
                name="title"
                value={formValues["title"]}
                onChange={onChange}
                className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="slug" className="block mb-2 text-sm font-medium">
                Gambar
              </label>
              <input
                type='file'
                name="image"
                value={formValues["image"]}
                onChange={onChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="slug" className="block mb-2 text-sm font-medium">
                Bahan dan Alat
              </label>
              <input
                name="ingredients"
                value={formValues["ingredients"]}
                onChange={onChange}
                className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
              />
            
            </div>
            <div className="mb-4">
              <label htmlFor="slug" className="block mb-2 text-sm font-medium">
                Langkah-Langkah
              </label>
              <input
                name="step"
                value={formValues["step"]}
                onChange={onChange}
                className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
              />
               
           
            </div>
            <div className="mb-4">
              <label htmlFor="slug" className="block mb-2 text-sm font-medium">
                Nama Akun
              </label>
              <input
                name="namaakun"
                value={formValues["namaakun"]}
                onChange={onChange}
                className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
              />
             
            </div>
          </div>
          <div className="my-4">
            <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
              ADD
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default New