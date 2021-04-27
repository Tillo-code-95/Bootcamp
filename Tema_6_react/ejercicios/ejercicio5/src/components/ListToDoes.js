
//import './TodoList.css'

export default function ListToDoes({toDo, setListToDoes }) {

    const removeTodo = (title) => setListToDoes(toDo.filter(t => t.title !== title));

    const toggleCompleted = (e, index) => {
        if(e.target.tagName !== "BUTTON") {
            const newTodos = [...toDo];
            newTodos[index].completed = !newTodos[index].completed;
            setListToDoes(newTodos);
        }
    }
    
    return (

        <ul className = "list-group">
            {toDo.map((list, index) => {
                let className = "list-group-item";
                if (list.completed) {
                    className += " completed"
                }
                return (
                        <li className={className} onClick= {e => toggleCompleted(e, index)}>
                            {index}:{list.title}
                            <button className = "btn bg-danger float-right" onClick={() => removeTodo(list.title)}>X</button>
                        </li>
                )})}

        </ul>
    )
} 