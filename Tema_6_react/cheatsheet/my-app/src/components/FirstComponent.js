import React, { Fragment } from 'react'
import PropTypes from "prop-types"

export default function FirstComponent(props) {
    // console.log(props, typeof props);
    // console.log(props.date);


    const myFunction = function (bookID){
        return function (event)  {
            
            console.log(bookID,event.target); 
        } 
    }

    const mySimpleFunction = function (event){
        // Process event  
            
        console.log(event); 
        
    }

    return (
        <Fragment>
            <h3>{props.title}</h3>
            <small>{props.date}</small>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            <button onClick = {myFunction(1)}>Eliminar book1</button>
            <button onClick = {myFunction(2)}>Eliminar book2</button>
            <button onClick = {mySimpleFunction}>click me!</button>
        </Fragment>
    )
}

FirstComponent.defaultProps = {
    title : "!!!!!!!!!!",
    date : "Sin fecha",
    products : []
}

FirstComponent.propTypes = {
    title : PropTypes.string.isRequired,
    date : PropTypes.isRequired,
    products : PropTypes.array,
}

// Eventos React




// Fragment etiqueta temporal que te permite inyectar codigo en el DOM
//sin estar dentro de una etiqueta container.

// Solo se puede un export_default por archivo.

function SecondComponent() {
    return (
        < >
            <h1>Soy otro componente</h1>
        </>
    )
}       
// Otra de englobar fragment con etiquetas de apertura y cierre solo

function ThirdComponent() {
    return (
        <div>
            <h1>Soy otro componente mas</h1>
        </div>
    )
}


export {SecondComponent, ThirdComponent}