import {useState} from "react";

export default function Input({setListToDoes}) {

    const [newTodos, setNewTodo] = useState("");
    
    function handleSubmit(e){
        e.preventDefault();
        
        const newObjectTodo = {title: newTodos, completed: false};

        setListToDoes(currentTodos => [newObjectTodo, ...currentTodos]);
        
        setNewTodo("");
    }

    return (
        <form onSubmit ={handleSubmit} className = "my-4 mx-4">
            <input type="text"
                placeholder = "Introduce nuevo to-do"
                className = "form-control"
                onChange={e => setNewTodo(e.target.value)} 
                value = {newTodos}       
            />
            
        </form>
    )
} 