
import { Component } from 'react';
import './App.css';
import FirstComponent,{SecondComponent, ThirdComponent} from './components/FirstComponent';
import Counter from "./components/Counter"
import {useState} from "react";
import useEffectComponent from   './components/useEffectComponent';


function App() {

  const [show, setShow] = useState(true)


  return (
    <div className="App">
      {show && <useEffectComponent />}
      <button onClick = {() => setShow(!show)}>Show</button>
      {/* <Counter />
      <FirstComponent title = "Titulo enviado desde el padre" date = "16 agosto 2025"></FirstComponent>
      <FirstComponent title = "otro titulo"/>
      <SecondComponent/>
      <ThirdComponent/>  */}
      {/* Se puede abrir y cerrar etiquetas en la misma linea */}
    </div>
  );
}

export default App;
