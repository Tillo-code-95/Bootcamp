// Importar todas las apps de los ej anteriores
import { createContext, useState, useEffect } from "react"
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom'
import './App.css';
import App1 from '../src/pages/App1'
import App2 from '../src/pages/App2'
import App3 from '../src/pages/App3'
import App4 from '../src/pages/App4'



export const GlobalContext = createContext({});


function App() {
  const initialState = [
    { name: "Federico", lastName: "Garcia Lorca", address: "Calle X", city: "Grananda", postalCode: 27009, phoneNumber: 756432124 },

    { name: "Miguel", lastName: "Hernandez", address: "Calle X", city: "Madrid", postalCode: 27344, phoneNumber: 758877893 },

    { name: "Manuel", lastName: "Alberti", address: "Calle Y", city: "Cadiz", postalCode: 27455, phoneNumber: 731245434 }
  ];




  const [contacts, setContacts] = useState(initialState)


  const [toDo, setListToDoes] = useState([])
  
  useEffect(() => {
    const URL = "https://raw.githubusercontent.com/BC-FSWD/todo-list/master/todo-list.json"
    fetch(URL)
    .then(response => response.json())
    .then(data => setListToDoes(data.slice(0, 20)));
  }, []);

 

  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar px-5 py-3 bg-dark">
          <NavLink exact to="/" activeClassName="active text-success"  >Ejercicio 1</NavLink>
          <NavLink to="/pages/App2" activeClassName="text-success" >Ejercicio 2</NavLink>
          <NavLink to="/pages/App3" activeClassName="text-success" >Ejercicio 3</NavLink>
          <NavLink to="/pages/App4" activeClassName="text-success" >Ejercicio 4</NavLink>
        </nav>


        <GlobalContext.Provider value={{ contacts, setContacts, toDo, setListToDoes }}>

          <Switch>
            <Route exact path="/" component={App1} />
            <Route path="/pages/App2" component={App2} />
            <Route path="/pages/App3" component={App3} />
            <Route path="/pages/App4" component={App4} />
          </Switch>

        </GlobalContext.Provider>



      </BrowserRouter>



    </div>
  );
}

export default App;
