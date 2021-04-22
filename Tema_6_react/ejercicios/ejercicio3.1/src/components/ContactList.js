export default function ContactList({contacts}) {

    return (
        <div className = "row">
            {contacts.map((contact, index) => {
                return (
                    <ul>
                        <li className="list-group-item active">Contacto {index + 1}</li>
                        <li className="list-group-item">{contact.name}</li>
                        <li className="list-group-item">{contact.lastName}</li>
                        <li className="list-group-item">{contact.phoneNumber}</li>
                        <li className="list-group-item">{contact.address},{contact.postalCode},{contact.city}</li>
                        
                    </ul>
                )
            })}
        </div>
    )
        
    



}