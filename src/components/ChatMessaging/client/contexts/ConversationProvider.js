import React, { useContext } from 'react';
import useLocaleStorage from '../../../hooks/useLocaleStorage';

const ConversationContext = React.createContext()

export function useConversations() {
    return useContext(ConversationContext)
}

export function ConversationProvider({ children }) {
const [conversations, setConversation] = useLocaleStorage('conversations', [])

function createConverstation(recipients) {
    setConversation(prevonverstation => {
        return[...prevonverstation, {recipients, messages: []}]
    })
}

    return (
<ConversationContext.Provider value={{conversations, createConverstation}}>
    {children}
</ConversationContext.Provider>
    )
}