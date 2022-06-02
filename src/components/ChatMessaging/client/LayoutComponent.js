import Login from './Login';
import useLocaleStorage from '../../hooks/useLocaleStorage';
import Dashboard from './Dashboard';
import {ContactsProvider} from './contexts/ContactsProvider'
import { ConversationProvider } from './contexts/ConversationProvider';

const LayOut = () => {
    const [id, setId] = useLocaleStorage('id');
    
const dashboard = (
    <ContactsProvider>
        <ConversationProvider>
    <Dashboard id={id} />
        </ConversationProvider>
    </ContactsProvider>
)

    return (
    id ? dashboard :  <Login onIdSubmit={setId} />
    )
}

export default LayOut;