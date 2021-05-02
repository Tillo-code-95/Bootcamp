import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Detalles from './components/Detalles'
import Listado from './components/Listado'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Listado} />
          <Route path="/detalles/:movie_id" component={Detalles} />

          <Route component={Error} />
        </Switch>
      </BrowserRouter>

      <h2>Footer Común</h2>

    </div>
  );
}

export default App;















// token de listado : https://api.themoviedb.org/3/movie/upcoming?api_key=b4ecc5cd8a009dbc4bd98033dfbdc884&language=en-US&page=1
//https://api.themoviedb.org/3/movie/ 399566?api_key=b4ecc5cd8a009dbc4bd98033dfbdc884&language=en-US