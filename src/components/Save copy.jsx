import React from 'react';
import styles from '../c_iphone-14-3.module.css'
import save2 from "../assets3/save2.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../assets3/image1.png' //gambar
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";


const customerData = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '1234567890' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '9876543210' },
  // Add more customer data as needed
];

const CustomerData = () => {
  return (
    // <div className='bg-slate-200 w-full h-full'>
    // <div className="container mx-auto mt-40">
    //   <h1 className="text-2xl font-bold mb-4">Customer Data</h1>
    //   <table className="min-w-full bg-white border border-gray-300">
    //     <thead>
    //       <tr>
    //         <th className="border-b">ID</th>
    //         <th className="border-b">Name</th>
    //         <th className="border-b">Email</th>
    //         <th className="border-b">Phone</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {customerData.map((customer) => (
    //         <tr key={customer.id}>
    //           <td className="border-b">{customer.id}</td>
    //           <td className="border-b">{customer.name}</td>
    //           <td className="border-b">{customer.email}</td>
    //           <td className="border-b">{customer.phone}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
    // </div>
    // <div className='bg-slate-200 w-full h-full'>
    // <div className="max-w-7xl mx-auto min-h-screen">
    //   <div className="relative overflow-x-auto">
    //   <h1 className="text-4xl font-bold mt-20 ml-10">Histori Resep</h1>
    //     <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-10">
    //       <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    //         <tr>
    //           <th scope="col" className="px-6 py-3">
    //             Nama Resep
    //           </th>
    //           <th scope="col" className="px-6 py-3">
    //             Kategori
    //           </th>
    //           <th scope="col" className="px-6 py-3"></th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //             <tr
    //               className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
    //             >
    //               <td className="px-6 py-4">Toast with milk and strawberry</td>
    //               <td className="px-6 py-4">Breakfast</td>
    //               <td className="px-6 py-4 space-x-2">
    //               </td>
    //             </tr>
    //             <tr
    //               className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
    //             >
    //               <td className="px-6 py-4">Jjapaguri atau Ram-don </td>
    //               <td className="px-6 py-4">Lunch</td>
    //               <td className="px-6 py-4 space-x-2">
    //               </td>
    //             </tr>
    //             <tr
    //               className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
    //             >
    //               <td className="px-6 py-4">Macaroni and Cheese</td>
    //               <td className="px-6 py-4">Snack</td>
    //               <td className="px-6 py-4 space-x-2">
    //               </td>
    //             </tr>
    //             <tr
    //               className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
    //             >
    //               <td className="px-6 py-4">Toast with milk and strawberry</td>
    //               <td className="px-6 py-4">Breakfast</td>
    //               <td className="px-6 py-4 space-x-2">
    //               </td>
    //             </tr>
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
    // </div>

    <div className={styles['card4']}>
      <div className="row">
      <h1 className="text-center">Histori Resep</h1>
        <div className="col-md-4 col-sm-12 mt-15">
          <Link to="/recipe">
            <div className="card">
              <img src={image} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="card-title"><h4>Toast with Milk and Strawberry</h4></div>
              </div>
            </div>
          </Link>
          <img
            src={save2}
            alt="rectangle"
            className={styles['save2']}
          />
        </div>

        <div className="col-md-4 col-sm-12 mb-15">
          <Link to="/recipe">
            <div className="card">
              <img src={image} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="card-title"><h4>Toast with Milk and Strawberry</h4></div>
              </div>
            </div>
          </Link>
          <img
            src={save2}
            alt="rectangle"
            className={styles['save2']}
          />
        </div>

        <div className="col-md-4 col-sm-12 mb-15">
          <Link to="/recipe">
            <div className="card">
              <img src={image} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="card-title"><h4>Toast with Milk and Strawberry</h4></div>
              </div>
            </div>
          </Link>
          {/* <Link to="/login"> */}
          <img
            src={save2}
            alt="rectangle"
            className={styles['save2']}
          />
          {/* </Link> */}
        </div>

        <div className="col-md-4 col-sm-12 mb-15">
          <Link to="/recipe">
            <div className="card">
              <img src={image} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="card-title"><h4>Toast with Milk and Strawberry</h4></div>
              </div>
            </div>
          </Link>
          {/* <Link to="/login"> */}
          <img
            src={save2}
            alt="rectangle"
            className={styles['save2']}
          />
          {/* </Link> */}
        </div>

        <div className="col-md-4 col-sm-12 mb-15">
          <Link to="/recipe">
            <div className="card">
              <img src={image} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="card-title"><h4>Toast with Milk and Strawberry</h4></div>
              </div>
            </div>
          </Link>
          {/* <Link to="/login"> */}
          <img
            src={save2}
            alt="rectangle"
            className={styles['save2']}
          />
          {/* </Link> */}
        </div>

        <div className="col-md-4 col-sm-12 mb-15">
          <Link to="/recipe">
            <div className="card">
              <img src={image} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="card-title"><h4>Toast with Milk and Strawberry</h4></div>
              </div>
            </div>
          </Link>
          {/* <Link to="/login"> */}
          <img
            src={save2}
            alt="rectangle"
            className={styles['save2']}
          />
          {/* </Link> */}
        </div>

      </div>
    </div>
  );
};

export default CustomerData;
