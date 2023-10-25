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
    const navigate = useNavigate();
  
    const onChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
    
    // RESEP
    const getReseps = async () => {
      const apiReseps = await axios.get("reseps");
      setReseps(apiReseps.data);
    };
  
    const getResep = async (id) => {
      const response = await axios.get("reseps/" + id);
      const apiResep = response.data.data;
      setResep(apiResep);
      setFormValues({
        title: apiResep.title,
        image: apiResep.image,
        ingredients: apiResep.ingredients,
        step: apiResep.step,
        namaakun: apiResep.namaakun,
      });
    };
  
    const storeResep = async (e) => {
      e.preventDefault();
      try {
        await axios.post("reseps", formValues);
        setFormValues(initialForm);
        navigate("/reseps");
      } catch (e) {
        if (e.response.status === 422) {
          //
        }
      }
    };

    return (
      <ResepContext.Provider
        value={{
          resep,
          reseps,
          getResep,
          getReseps,
          storeResep,
          onChange,
          formValues,
          setFormValues,
        }}
      >
        {children}
      </ResepContext.Provider>
    );
  };
  
  export default ResepContext;
  
