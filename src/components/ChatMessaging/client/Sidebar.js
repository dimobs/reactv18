import React, {useState} from 'react';
import {Tab, Nav, Button, Modal}from 'react-bootstrap';
import Conversations from './Conversation';
import Contacts from './Contacts';
import NewConversationModal from './NewConversationModal';
import NewContactModel from '../client/NewContactModal';

const CONVERSATIONS_KEY = 'conversations'
const CONTACTS_KEY = 'constacts'


export default function Sidebar({id}) {
const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY)
const conversationOpen = activeKey === CONVERSATIONS_KEY 
const [modalOpen, setModalOpen] = useState(false);

function closeModal() {
    setModalOpen(false);
}

    return (
        <div style={{width: '250px'}} className='d-flex flex-column'>
<Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
    <Nav variant='tabs' className="justify-content-center">
    <Nav.Item>
            <Nav.Link eventKey='conversations'>{CONVERSATIONS_KEY}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey='constacts'>{CONTACTS_KEY}</Nav.Link>
        </Nav.Item>
    </Nav>
    <Tab.Content className='border-right overflow-auto flex-grow-1'>
        <Tab.Pane style={{color: "blue"}} eventKey={CONVERSATIONS_KEY}>
        <Conversations />
        </Tab.Pane>
        <Tab.Pane style={{color: "green"}} eventKey={CONTACTS_KEY}>
        <Contacts />
        </Tab.Pane>
    </Tab.Content>
    <div className="p-2 border-top border-right small">
        Your Id: <span className="text-muted">{id}</span>
    </div>
        <Button onClick={() => setModalOpen(true) } className="rounded-0">
New {conversationOpen ? 'Conversation' : 'contact'}
        </Button>
</Tab.Container>
<Modal show={modalOpen} onHide={closeModal}>
    {conversationOpen
    ? <NewConversationModal closeModal={closeModal } />
    : <NewContactModel closeModal={closeModal } />
    }
</Modal>

        </div>
    )
}