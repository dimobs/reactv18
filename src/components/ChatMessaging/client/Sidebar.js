import React, {useState} from 'react';
import {Tab, Nav}from 'react-bootstrap';
import Conversations from './Conversation';

const CONVERSATIONS_KEY = 'conversations'
const CONTACTS_KEY = 'constacts'


export default function Sidebar({id}) {
const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY)

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
    <Tab.Content>
        <Tab.Pane eventKey={CONVERSATIONS_KEY} />
        <Conversations />
    </Tab.Content>
</Tab.Container>
        </div>
    )
}