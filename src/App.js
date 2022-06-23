import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {css} from "@emotion/core"
import PropagateLoader from 'react-spinners/PropagateLoader';

function App() {

  const[loading, setLoading] = useState(false)
  const override = css`
    display:block;
    border-color:red;
    margin-top:20%
  `;

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 50000)
  },[])

  return (
    <div className="App">
      <h1>Bienvenidos a Cachengo Club</h1>
      <h3>Estámos en contrucción en breve estará disponible nuestra página...</h3>
      {
        loading ? <PropagateLoader color={"#3d2514"} loading={loading} css={override} size={40}/>
        :
        <>
          <Navbar/>
        </>
      }
    </div>
  );
}

export default App;
