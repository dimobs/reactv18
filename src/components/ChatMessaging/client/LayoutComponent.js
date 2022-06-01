import Login from './Login';
import useLocaleStorage from '../../hooks/useLocaleStorage';
import Dashboard from './Dashboard';

const LayOut = () => {
    const [id, setId] = useLocaleStorage('id');


    return (
    id ? <Dashboard id={id} /> :  <Login onIdSubmit={setId} />
  
    )

}
export default LayOut;