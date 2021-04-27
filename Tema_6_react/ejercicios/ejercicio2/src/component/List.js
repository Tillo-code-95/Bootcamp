

export default function List(props) {
    return (
        <div>
            <h2>{props.category}</h2>
            <ol>
                {props.products.map(product => 
               <li key = {product.id}> {product.name} {product.brand} precio :{product.price}</li>)}
            </ol>

        </div>
    )
}
