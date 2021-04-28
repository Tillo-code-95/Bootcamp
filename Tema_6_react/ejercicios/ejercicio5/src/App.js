// Importar todas las apps de los ej anteriores
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom'
import './App.css';
import App1 from '../src/pages/App1'
import App2 from '../src/pages/App2'
import App3 from '../src/pages/App3'
import App4 from '../src/pages/App4'

import {createContext} from "react"

export const GlobalContext = createContext({});


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <nav className = "navbar px-5 py-3 bg-dark">
          <NavLink exact to ="/"    activeClassName="active text-success"  >Ejercicio 1</NavLink>
          <NavLink to="/pages/App2" activeClassName="text-success" >Ejercicio 2</NavLink>
          <NavLink to="/pages/App3" activeClassName="text-success" >Ejercicio 3</NavLink>
          <NavLink to="/pages/App4" activeClassName="text-success" >Ejercicio 4</NavLink>
        </nav>
        
        
        <Switch>
          <Route exact path = "/" component = {App1} />
          <Route  path = "/pages/App2" component = {App2} />
          <Route  path = "/pages/App3" component = {App3} />
          <Route  path = "/pages/App4" component = {App4} />
        </Switch>



      </BrowserRouter>



    </div>
  );
}

export default App;
