import Login from './Login';
import useLocaleStorage from '../../hooks/useLocaleStorage';
import Dashboard from './Dashboard';
import {ContactsProvider} from './contexts/ContactsProvider'

const LayOut = () => {
    const [id, setId] = useLocaleStorage('id');
    
const dashboard = (
    <ContactsProvider>
    <Dashboard id={id} />
    </ContactsProvider>
)

    return (
    id ? dashboard :  <Login onIdSubmit={setId} />
    )
}

export default LayOut;