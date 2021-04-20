
import './App.css';
import FirstComponent,{SecondComponent, ThirdComponent} from './components/FirstComponent';


function App() {
  return (
    <div className="App">
      <FirstComponent title = "Titulo enviado desde el padre" date = "16 agosto 2025"></FirstComponent>
      <FirstComponent title = "Otro titulo"/>
      <SecondComponent/>
      <ThirdComponent/> 
      {/* Se puede abrir y cerrar etiquetas en la misma linea */}
    </div>
  );
}

export default App;
