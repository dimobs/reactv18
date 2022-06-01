import React, {useState} from 'react';
import {Tab, Nav}from 'react-bootstrap';
import Conversations from './Conversation';
import Contacts from './Contacts';

const CONVERSATIONS_KEY = 'conversations'
const CONTACTS_KEY = 'constacts'


export default function Sidebar({id}) {
const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY)
const conversationOpen = activeKey === CONVERSATIONS_KEY 

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
        <Button>
New {conversationOpen ? 'Conversation' : 'contact'}
        </Button>
    </div>
</Tab.Container>
        </div>
    )
}