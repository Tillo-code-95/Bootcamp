
//import { Component, useContext } from 'react';

// import FirstComponent,{SecondComponent, ThirdComponent} from './components/FirstComponent';
// import Counter from "./components/Counter"
// import useEffectComponent from   './components/useEffectComponent';
// import UseContextComponent from   './components/UseContextComponent';

//import {useState, createContext} from "react";

import Router from "./Router"
import './App.css'
//export const GlobalContext = createContext({});



function App() {

  //const [show, setShow] = useState(true)


  return (
    <div className="App">
      {/* {show && <useEffectComponent />}
      <button onClick = {() => setShow(!show)}>Show</button> */}
      {/* <Counter />
      <FirstComponent title = "Titulo enviado desde el padre" date = "16 agosto 2025"></FirstComponent>
      <FirstComponent title = "otro titulo"/>
      <SecondComponent/>
      <ThirdComponent/>  */}
      {/* Se puede abrir y cerrar etiquetas en la misma linea */}

      {/* <GlobalContext.Provider value = "Soy un string guardado en in contexto">

        <UseContextComponent /> 

      </GlobalContext.Provider> */}

      <Router />

    </div>
  );
}

export default App;
