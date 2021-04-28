
//import './App.css';
//import TodoList from './components/TodoList'
import Input from '../components/Input'
import ListToDoes from '../components/ListToDoes'
import {createContext} from 'react'
//https://raw.githubusercontent.com/BC-FSWD/todo-list/master/todo-list.json
// Ruta de la API

export const GlobalContext = createContext({})

export default function App4() {

  

  


  return (
    <div className="container">
      <h2>To-Do-List</h2>
      <ListToDoes />
      <Input />
     
    </div>
  );
}

