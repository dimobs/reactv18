import { useContacts } from "./contexts/ContactsProvider";
import { ListGroup } from 'react-bootstrap';


export default function Contacts() {
    const { contacts } = useContacts();

    return (
        <ListGroup variant='flush'>
            {contacts.map(x => (
             <ListGroup.Item key={x.id}>
                 {x.name}
             </ListGroup.Item>
            ))}
        </ListGroup>
    )
}