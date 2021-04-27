// Importar todas las apps de los ej anteriores
import './App.css';
import App1 from '../src/pages/App1'
import App2 from '../src/pages/App2'
import App3 from '../src/pages/App3'
import App4 from '../src/pages/App4'
import { BrowserRouter, NavLinks, Route, Switch } from 'react-dom'
import {createContext} from "react"

export const GlobalContext = createContext({});


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <NavLinks activeClassName="active text-success" to="/pages/App1">Ejercicio 1</NavLinks>
          <NavLinks activeClassName="text-success" to="/pages/App2">Ejercicio 2</NavLinks>
          <NavLinks activeClassName="text-success" to="/pages/App3">Ejercicio 3</NavLinks>
          <NavLinks activeClassName="text-success" to="/pages/App4">Ejercicio 4</NavLinks>
        </nav>
        
        
        <Switch>
          <Route exact path = "/pages/App1" component = {App1} />
          <Route exact path = "/pages/App2" component = {App2} />
          <Route exact path = "/pages/App3" component = {App3} />
          <Route exact path = "/pages/App4" component = {App4} />
        </Switch>



      </BrowserRouter>



    </div>
  );
}

export default App;
