import React from 'react'
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="flex flex-col items-center mt-20">
            <h2 className="text-xl font-bold mb-4">Silakan pilih jenis pengguna:</h2>
            <div className="mb-4">
                <Link to="/loginAdmin">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Admin Login
                    </button>
                </Link>
            </div>
            <div>
                <Link to="/homepageUser">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        User Login
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Register