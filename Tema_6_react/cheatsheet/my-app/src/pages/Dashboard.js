import {useState} from 'react'
import { useHistory } from 'react-router-dom';

export default function Dashboard() {
    const [userID, setUserId] = useState(1);

    const history = useHistory();

    function handleClick(){
        // Queremos que nos lleva a /record/userID

        history.push(`/record/${userID}`);
    }

    return (
        <div>
            <input type="text" onChange={e => setUserId(e.target.value)} value ={userID}/>
            <button onClick={handleClick}>Ir a perfil de usuario {userID}</button>
        </div>
    )
}
