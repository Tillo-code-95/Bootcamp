
//import './App.css';
import ContactList from "../components/ContactList";
import NewContactForm from "../components/NewContactForm";

//import NewContactForm from "./components/NewContactForm"



export default function App3() {

  return (
    <div className="container">
      <h2 className = "my-4">Agenda</h2>
      <ContactList />

      <h2 className = "my-4">Nuevo contacto</h2>
      <NewContactForm  />
    </div>
  );
}

