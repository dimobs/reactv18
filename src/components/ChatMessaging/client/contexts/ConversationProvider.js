import React, { useContext, useState } from 'react';
import useLocaleStorage from '../../../hooks/useLocaleStorage';
import { useContacts } from './ContactsProvider';

const ConversationContext = React.createContext()

export function useConversations() {
    return useContext(ConversationContext)
}

export function ConversationProvider({ children }) {
    const [conversations, setConversation] = useLocaleStorage('conversations', [])
    const [selectConversationIndex, setSelectConversationIndex ] = useState(0);
    const { contacts } = useContacts();

    function createConverstation(recipients) {
        setConversation(prevonverstation => {
            return [...prevonverstation, { recipients, messages: [] }]
        })
    }

    const formatedConversations = conversations.map((con, index) => {
        const recipients = con.recipients.map(r => {
            const c = contacts.find(c => {
                return c.id === r
            })
            const name = (c && c.name) || r
            return { id: r, name }
        })
const selected = index === selectConversationIndex 
        return{...conversations, recipients, selected}
    })

const value = {
    conversations: formatedConversations, 
    selectedConversation: formatedConversations[selectConversationIndex], 
    selectConversationIndex: setSelectConversationIndex, 
    createConverstation
}

    return (
        <ConversationContext.Provider value={value}>
            {children}
        </ConversationContext.Provider>
    )
}