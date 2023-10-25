import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";


const CobaGet = () => {
    const [reseps, setReseps] = useState([]);

    useEffect(() => {
        const getReseps = async () => {
            const apiReseps = await axios.get("http://127.0.0.1:8000/api/reseps");
            setReseps(apiReseps.data);
        };
        getReseps();
    }, []);

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     axios.get('http://127.0.0.1:8000/api/reseps') // Sesuaikan dengan URL API Laravel Anda
    //         .then(response => {
    //             setData(response.data);
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });
    // }, []);

    return (
        <div>CobaGet</div>
    )
}

export default CobaGet