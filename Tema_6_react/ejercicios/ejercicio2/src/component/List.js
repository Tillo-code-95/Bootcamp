

export default function List(props) {
    return (
        <div>
            <h2>{props.categoria}</h2>
            <ol>
                {props.productos.map(producto => 
                <li key = {producto.id}> {producto.name} {producto.marca} precio :{producto.precio}</li>)}
            </ol>

        </div>
    )
}
