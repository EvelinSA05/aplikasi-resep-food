import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

const ResepContext = createContext();

const initialForm = {
  title: "",
  image: "",
  ingredients: "",
  step: "",
  namaakun: "",
};

export const ResepProvider = ({ children }) => {
    const [formValues, setFormValues] = useState(initialForm);
    const [reseps, setReseps] = useState([]);
    const [resep, setResep] = useState([]);
    const [title, setTitle] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [step, setStep] = useState([]);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
  
    const onChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
    
    // RESEP
    // const getReseps = async () => {
    //   const apiReseps = await axios.get("reseps");
    //   setReseps(apiReseps.data);
    // };
  
    // const getResep = async (id) => {
    // //   const response = await axios.get("reseps" + id);
    // //   const apiResep = response.data.data;
    // //   setResep(apiResep);
    // //   setFormValues({
    // //     title: apiResep.title,
    // //     image: apiResep.image,
    // //     ingredients: apiResep.ingredients,
    // //     step: apiResep.step,
    // //     namaakun: apiResep.namaakun,

    // const response = await axios.get("reseps" + id);
    // setResep(response.data);
    // };
  
    // const storeResep = async (e) => {
    //   e.preventDefault();
    //   try {
    //     // await axios.post("reseps", formValues);
    //     // setFormValues(initialForm);
    //     // navigate("/");
    //     await axios.post("reseps", formValues);
    //     getReseps();
    //   } catch (e) {
    //     if (e.response.status === 422) {
    //       console.log('error');
    //     }
    //   }

    // // try {
    // //     const response = await axios.post('resep', this.state.post);
    // //     console.log(response.data.data); // Tangani respons dari Laravel jika sukses
    // //   } catch (error) {
    // //     console.log('hai');
    // //     // Contoh menampilkan pesan kesalahan ke pengguna
    // //     if (error.response === 422) {
    // //       alert('Ada kesalahan validasi. Pastikan Anda mengisi semua field dengan benar.');
    // //     } else {
    // //       alert('Terjadi kesalahan saat mengirim data.');
    // //     }
    // // }
    // };

    const getReseps = async () => {
        const apiReseps = await axios.get("reseps");
        setReseps(apiReseps.data);
      };

      const getResep = async (id) => {
        // const response = await axios.get("reseps/" + id);
        // const apiResep = response.data.data;
        // setResep(apiResep);

        await axios.get(`reseps/${id}`)
        .then(response => {
            setTitle(response.data.data.title);
            setIngredients(response.data.data.ingredients);
            setStep(response.data.data.step);
        })
      };
    
      const storeResep = async (e) => {
        e.preventDefault();
        try {
          await axios.post("reseps", formValues);
          setFormValues(initialForm);
          navigate("/");
        } catch (e) {
          if (e.response.status === 422) {
            setErrors(e.response.data.errors);
          }
        }
      };

    return (
      <ResepContext.Provider
        value={{
          reseps,
          resep,
          getReseps,
          getResep,
          storeResep,
          onChange,
          formValues,
          setFormValues,
          errors,
          setErrors,
        }}
      >
        {children}
      </ResepContext.Provider>
    );
  };

  export default ResepContext;
  
