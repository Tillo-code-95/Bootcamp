export default function ListToDoes(props) {

    // function croosout() {
       
        
    // }


    return (

        <div>
            { props.toDo.map((lista) => {

                return (

                    <ul>
                        <li className="list-group-item">{lista.userId}:{lista.title}{lista.completed} <button className = "btn bg-danger float-right">X</button></li>
                        
                    </ul>

                    
                )



            })}

            

        </div>
    )
} 