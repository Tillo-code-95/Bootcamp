import React, { Fragment } from 'react'


export default function FirstComponent(props) {
    console.log(props, typeof props);
    console.log(props.date);
    return (
        <Fragment>
            <h3>{props.title}</h3>
            <small>{props.date}</small>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        </Fragment>
    )
}

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