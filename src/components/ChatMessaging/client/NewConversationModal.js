import React, {useState} from "react";
import {Modal, Form, Button} from 'react-bootstrap';
import {useContacts} from './contexts/ContactsProvider';
import {useConversations} from './contexts/ConversationProvider';

export default function NewConversationModel(closeModal) {
   const [selectedContactIds, setSelectedContacIds] = useState([])
const {contacts} = useContacts();
const {createConverstation} = useConversations();

function handlerSubmit(e) {
e.preventDefault();

createConverstation(selectedContactIds)
closeModal()
}

function handleCheckboxChange(contactId) {
    setSelectedContacIds(prevSelectContactId => {
        if(prevSelectContactId.includes(contactId)) {
            return prevSelectContactId.filter(prevId =>{
                return contactId !== prevId
            })
        }else {
            return[...prevSelectContactId, contactId]
        }
    })
}

    return (
        <>
<Modal.Header closeButton>Create Conversations </Modal.Header>
<Modal.Body>
    <Form onSubmit={handlerSubmit}>
 {contacts.map(x => (
     <Form.Group controlId={x.id} key={x.id}>
       <Form.Check
       type="checkbox"  
       value={selectedContactIds.includes(x.id)}
       label={x.name}
       onChange={() => handleCheckboxChange(x.id)}
   />
       </Form.Group> 
 ))}
    <Button type="submit">Create</Button>
</Form>
</Modal.Body>
        </>
    )
}