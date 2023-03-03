import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import Products from './components/Products';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import {css} from "@emotion/core"
import PropagateLoader from 'react-spinners/PropagateLoader';
import Promotions from "./components/utils/Carousel";
import Publicidad from './components/utils/Publicidad';
import Wheel from './components/utils/Wheel';

function App() {

  const[loading, setLoading] = useState(false)
  const override = css`
    display:block;
    border-color:red;
    margin-top:20%;
  `;

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 2000)
  },[])

  return (
    <div className="App">
      
      {
        loading ? 
        <>
        <h1 loading={loading}>Bienvenidos a Cachengo Club</h1>
        <PropagateLoader color={"#3d2514"} loading={loading} css={override} size={40}/> 
        </>
        :
        <>
          <Navbar />
          <Inicio />
          <Products />
          <Nosotros />
        </>
      }
    </div>
  );
}

export default App;
