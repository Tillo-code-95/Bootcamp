
//import './App.css';
//import TodoList from './components/TodoList'
import Input from '../components/Input'
import ListToDoes from '../components/ListToDoes'
import {useState , useEffect} from 'react'
//https://raw.githubusercontent.com/BC-FSWD/todo-list/master/todo-list.json
// Ruta de la API

export default function App4() {

  

  const [ListToDo, setListToDoes] = useState([])
  
  useEffect(() => {
    const URL = "https://raw.githubusercontent.com/BC-FSWD/todo-list/master/todo-list.json"
    fetch(URL)
    .then(response => response.json())
    .then(data => setListToDoes(data.slice(0, 20)));
  }, []);

 
  


  return (
    <div className="container">
      <h2>To-Do-List</h2>
      <ListToDoes toDo={ListToDo} setListToDoes={setListToDoes}/>
      <Input setListToDoes={setListToDoes}/>
     
    </div>
  );
}

