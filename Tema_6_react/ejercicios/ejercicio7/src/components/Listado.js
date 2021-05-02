import {useState, useEffect} from 'react'
import { useHistory }from "react-router-dom"


export default function Listado() {
    const [movies, setMovies] = useState([]);

    const MOVIES_URL = "https://api.themoviedb.org/3/movie/upcoming?api_key=b4ecc5cd8a009dbc4bd98033dfbdc884&language=en-US&page=1"


    useEffect(() => {
        fetch(`${MOVIES_URL}`)
            .then(response => response.json())
            .then(data => setMovies(data.results))
    }, []);

    const [movie_ID, setMovie_ID] = useState(0) 

    const history = useHistory();

    function handleSubmit(){
        history.push(`/detalles/${movie_ID}`)
    }

    return(
        <div >
            {
                movies.map(movie => {
                    return(
                        <div className = "card-body">
                            <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path } className = "card-img-top" alt=""/>
                            <h2 className ="card-title">{movie.title}</h2>
                            <p className ="card-text">{movie.overview}</p>
                            <div className ="card">{movie.release_date}</div>
                           <form onSubmit = {handleSubmit}>
                           <button className= "btn btn-primary" onClick = {() => setMovie_ID(movie.id)}>more information</button>
                           </form>
                        </div>
                    )
                })
            }
        </div>
    )

}

// Clase dia 27 apartir de " 01 : 20 :  00"

// Explicación useHistory:

// Cambiar la ruta desde un botón/input en vez de desde el URL. Cualquier tipo de casuística que
// no se puede controlar con un navlink.

// useHistory te redirecciona.

// Con history.push() te llevará donde establezcas entre parentesis.

// Por ejemplo: history.push(`/record/${userID}`);



// Ejemplo con botón:

// 1. Creamos botón.
// 2. Le ponemos on evento onClick con la función handleClick dentro.
// 3. En la función handleClick añadimos history.push("/home")
// Resultado: Cada vez que des click al botón te llevará a la ruta establecida por history.



// En el ejercicio en el que nos encontramos history.push() nos lleva:

// Funcionamiento del input y botón en dashboard:

// 0. Previamente hemos inicializado el hook useState con const userID y valor inicial 1.
// 1. Se introduce un número en el input.
// 2. El evento onChange registra el value del input y actualiza el estado de userID al valor
// del input.

// 3. En el botón hay un evento onClick que nos dirige a su función handleClick.
// 4. En ella establecemos history.push(). history.push() nos llevará a  `/record/${userID}`.
// Por lo tanto nos direccionará a la página del usuario en concreto.

// USE PARAMS EXPLICACIÓN:

// En Router tenemos el componente Record con su ruta:

//     <Route path="/record/:user" component={Record} />

// De momento ':user' no está definido por lo que esta ruta funcionará siempre que carguemos
// dicha ruta cuan cualquier dato detrás de /record/.

//   Por ejemplo path="/record/8"

// Pondremos el siguiente dato:

//     path="/record/:user"

// Los ':' establecen que el dato que viene a continuación es un parámetro.

// Tendremos entonces que caputar ese parámetro usando el hook useParams().


// <KEY>
// UseParams es un hook que nos devuelve nuestros parámetros. params es el objeto y sus
// propiedades son los parámetros que hayamos creado.

// Como todos los hooks, lo importamos.

// Iniciaremos el hook useParams (con deconstrucción) inicializando la constante 'user'. El
// nombre de dicha constante tiene que ser el mismo que el parámetro establecido en la ruta
// (:user).

// El valor de está constante será el valor que obtenga el parámetro :'user' establecido 
// en la ruta /Record/:user/

// Por ejemplo: /record/5   ----> el valor del parámetro user es 5.
// </KEY>


// Nos facilita deconstruir el objeto el hecho de que dentro del objeto params solo tenemos
// la propiedad user. No tenemos más.

// Lo que recibimos por useParams es el parámetro user (Record/:user).
// Params es un objeto que le hemos dado la propiedad 'user'.

// Resumen: params es un objeto que tiene como propiedades los parámetros que creemos con los ':'.


// 1: path="/record/:user"
//         En la ruta establecemos que user es un parámetro.

// 2: const {user} = useParams();     
//         Iniciamos el hook useParams y dentro del objeto params cogerá la única propiedad: user

// 3: http://localhost:3000/record/1
//         La cifra '1' es en este momento el valor del parámetro user.

// Objeto params --> propiedad user: --> valor: "8"

// params -> user: "8"