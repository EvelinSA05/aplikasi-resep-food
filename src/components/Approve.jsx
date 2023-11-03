// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// import styles from "../c_iphone-14-3.module.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import image from "../assets3/image1.png"; //gambar
// import logo from "../assets3/logo.png"; //gambar
// import { Link, useNavigate } from "react-router-dom";
// import '../c_iphone-14-5.module.css';

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from 'react-router-dom';

// const RecipeAdmin = () => {
//     const [recipesA, setRecipeA] = useState([]);
//     const { id } = useParams();
//     const [reseps, setReseps] = useState([]);
//     const [resep, setResep] = useState([]);
//     const navigate = useNavigate();
//     const [results, setResults] = useState([]);

//     const [isApprove, setIsApprove] = useState(reseps.is_approve);

//     const handleApproveClick = () => {
//         axios.get(`http://127.0.0.1:8000/api/reseps/${id}/approve`)
//             .then(response => {
//                 setIsApprove(!isApprove);
//             })
//             .catch(error => {
//                 console.error(error);
//             });
//     };


//     useEffect(() => {

//         axios.get('http://127.0.0.1:8000/api/reseps')
//             .then(response => {
//                 setRecipeA(response.data);
//             })
//             .catch(error => {
//                 console.error(error);
//             });

//     }, []);

//     return (
//         <div className="flex">
//             <div className="relative overflow-x-auto">
//                 <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//                     <thead className="">
//                         <tr>
//                             <th scope="col" className="px-6 py-3">
//                                 Nama Resep
//                             </th>
//                             <th scope="col" className="px-6 py-3">
//                                 Image
//                             </th>
//                             <th scope="col" className="px-6 py-3">
//                                 Nama Akun
//                             </th>
//                             <th scope="col" className="px-6 py-3"></th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {recipesA.map((recipeA) => {
//                             return (
//                                 <tr
//                                     key={recipeA.id}
//                                     className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
//                                 >

//                                     <td className="px-6 py-4">{recipeA.title}</td>
//                                     <td><img src={recipeA.image} width={100} height={70} alt="" /></td>
//                                     <td className="px-6 py-4">{recipeA.namaakun}</td>
//                                     <td>
//                                     <button onClick={() => handleApproveClick(recipeA.id)}>
//                                         {isApprove ? (
//                                             <div className={styles["rectangleimg2"]}>
//                                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bookmark-plus-fill" viewBox="0 0 16 16">
//                                                     <path fillRule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm6.5-11a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5V4.5z" />
//                                                 </svg>
//                                             </div>
//                                         ) : (
//                                             <div className={styles["rectangleimg2"]}>
//                                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bookmark-plus" viewBox="0 0 16 16">
//                                                     <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
//                                                     <path d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z" />
//                                                 </svg>
//                                             </div>
//                                         )}
//                                     </button></td>
//                                 </tr>
//                             );
//                         })}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     )
// }

// export default RecipeAdmin

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const RecipesList = () => {
//   const [recipes, setRecipes] = useState([]); // Inisialisasi dengan array kosong

//   useEffect(() => {
//     axios.get('http://127.0.0.1:8000/api/reseps')
//       .then(response => {
//         if (response.data && response.data.length > 0) {
//           setRecipes(response.data);
//         }
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, []);

//   const handleBookmarkClick = (recipeId) => {
//     axios.post(`http://127.0.0.1:8000/api/reseps/${recipeId}/approve`)
//       .then(response => {
//         // Pastikan respons mengandung data yang diperlukan atau perbarui status lainnya
//         if (response.data && response.data.length > 0) {
//           const updatedRecipes = recipes.map(recipe => {
//             if (recipe.id === recipeId) {
//               return { ...recipe, is_approve: !recipe.is_approve };
//             }
//             return recipe;
//           });
//           setRecipes(updatedRecipes);
//           window.location.reload('http://localhost:3000/approve'); 
//         }
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   };

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Title</th>
//           <th>Description</th>
//           <th>Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         {recipes.map(recipe => (
//           <tr key={recipe.id}>
//             <td>{recipe.title}</td>
//             <td>{recipe.namaakun}</td>
//             {/* <td>
//               <button onClick={() => handleBookmarkClick(recipe.id)}>
//                 {recipe.is_approve ? 'Unbookmark' : 'Bookmark'}
//               </button>
//             </td> */}
//             {/* <td>
//                                      <button onClick={() => handleBookmarkClick(recipe.id)}>
//                                          {recipe.is_approve ? (
//                                             <div>
//                                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bookmark-plus-fill" viewBox="0 0 16 16">
//                                                     <path fillRule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm6.5-11a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5V4.5z" />
//                                                 </svg>
//                                             </div>
//                                         ) : (
//                                             <div >
//                                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bookmark-plus" viewBox="0 0 16 16">
//                                                     <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
//                                                     <path d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z" />
//                                                 </svg>
//                                             </div>
//                                         )}
//                                     </button></td> */}
//                                      <td>
//               {recipe.is_approve ? (
//                 <button onClick={() => handleBookmarkClick(recipe.id)}>
//                   Disetujui
//                 </button>
//               ) : (
//                 <button onClick={() => handleBookmarkClick(recipe.id)}>
//                   Bookmark
//                 </button>
//               )}
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default RecipesList;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecipesList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/reseps/')
      .then(response => {
        setRecipes(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleBookmarkClick = (recipeId) => {
    axios.post(`http://127.0.0.1:8000/api/reseps/${recipeId}/approve`)
      .then(response => {
        const updatedRecipes = recipes.map(recipe => {
          if (recipe.id === recipeId) {
            return { ...recipe, is_approve: !recipe.is_approve };
          }
          return recipe;
        });
        setRecipes(updatedRecipes);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {recipes.map(recipe => (
          <tr key={recipe.id}>
            <td>{recipe.title}</td>
            <td>{recipe.namaakun}</td>
              {/* <button onClick={() => handleBookmarkClick(recipe.id)}>
                {recipe.is_approve ? 'Disetujui' : 'Bookmark'}
              </button> */}
              <td>
               <button onClick={() => handleBookmarkClick(recipe.id)}>
                            {recipe.is_approve ?  (
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bookmark-plus-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm6.5-11a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5V4.5z" />
                                    </svg>
                                </div>
                            ) : (
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bookmark-plus" viewBox="0 0 16 16">
                                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                        <path d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z" />
                                    </svg>
                                </div>
                            )}
                        </button>
                        </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RecipesList;