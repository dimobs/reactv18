import { Link } from "react-router-dom";

const Home = () => {

return (
<>
<h2>Welcome Home Page</h2>
<ol>
<li><Link to="/deferred" className="site-title">Deferred</Link></li>
<li><Link to="/messenger" className="site-title">Chat</Link></li>
<li><Link to="/countTwo" className="site-title">Count</Link></li>
<li><Link to="/login" className="site-title">go to Login</Link></li>
<li><Link to="/useEffect" className="site-title">use Effect</Link></li>
<li><Link to="/useContex" className="site-title">use Contex</Link></li>
<li><Link to="/useRef" className="site-title">use Ref</Link></li>
<li><Link to="/useMemo" className="site-title">use Memo</Link></li>
<li><Link to="/useCallback" className="site-title">use CallBack</Link></li>
<li><Link to="/useReducer" className="site-title">use Reducer</Link></li>
<li><Link to="/useReducer2" className="site-title">use Reducer - 2</Link></li>
<li><Link to="/useReducer3" className="site-title">use Reducer - 3</Link></li>
<li><Link to="/useTransition" className="site-title">use Transition - 2</Link></li>
<li><Link to="/useDeferredValue" className="site-title">use Deferred Value</Link></li>
<li><Link to="/useLayout" className="site-title">use layout effect</Link></li>
<h2>Custom Hooks </h2>
<li><Link to="/localeStorage" className="site-title">use LocaleStrorage custom Hook</Link></li>

</ol>
</>
    )
}

export default Home;