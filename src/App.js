import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import {useState, useEffect} from "react";
import "./styles.css";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import MyContext from "./my_context";

export default function App() {

  const [photos, setPhotos] = useState([]);
  const endpoint = '/desafio-naturalpic/fotos.json';

  const consultarInformacion = async () => {
    const response = await fetch(endpoint);
    const { photos } = await response.json();
    console.log(photos);
    photos.forEach((element, id,alt,liked,src) => {
    });
    setPhotos(photos);

    
  };
  console.log(photos)

  useEffect( ()=>{
    consultarInformacion();
  }, [])
  console.log(photos)
  return (
    <div className="App">
      <MyContext.Provider value={{photos,setPhotos}}>
        <BrowserRouter basename="desafio-naturalpic">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}
