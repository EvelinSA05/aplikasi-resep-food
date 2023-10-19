import React from 'react'
import kartun from "../assets4/kartun.jpg";
import { Link } from "react-router-dom";


const User = () => {
  return (
  //   <div className='bg-slate-200 w-full h-full'>
  //   <div className="mx-auto max-w-7xl mx-auto min-h-screen">
  //   <div className=''>
  //   {/* <h1 className="text-2xl font-bold mt-15">User Profile</h1> */}
  //   <div className="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-lg mt-20">
  //     <div className="flex-shrink-0 mb-4 md:mr-6">
  //       <img
  //         src={kartun}
  //         alt="Profile"
  //         className="w-24 h-24 rounded-full"
  //       />
  //     </div>
  //     <div className="flex-grow">
  //       <h2 className="text-xl font-bold mb-2">John Doe</h2>
  //       <p>Email: john.doe@contoh.com</p>
  //       <p>Phone: 1234567890</p>
  //     </div>
  //   </div>
  // </div>
  // </div>
  // </div>

<div className='bg-slate-200 w-full h-full'>
<div className="max-w-7xl mx-auto min-h-screen">
  <div className="relative overflow-x-auto">
  <h1 className="text-4xl font-bold mt-20 ml-10">User Profile</h1>
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
      <Link to="/"><button
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

export default User