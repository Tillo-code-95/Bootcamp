
import './App.css';
import Input from './components/Input'
import ListToDoes from './components/ListToDoes'
import {useState , useEffect} from 'react'
//https://raw.githubusercontent.com/BC-FSWD/todo-list/master/todo-list.json
// Ruta de la API

function App() {

  

  const [ListToDo, setListToDoes] = useState([])
  
  useEffect(() => {
    const URL = "https://raw.githubusercontent.com/BC-FSWD/todo-list/master/todo-list.json"
    fetch(URL)
    .then(response => response.json())
    .then(data => setListToDoes(data.splice(0, 20)));
  }, [])

 
  


  return (
    <div className="container">
      <h2>To-Do-List</h2>
      <ListToDoes toDo = {ListToDo} />
      <Input />
     
    </div>
  );
}

export default App;
