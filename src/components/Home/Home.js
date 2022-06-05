import { Link } from "react-router-dom";

const Home = () => {

return (
<>
<h2>Welcome Home Page</h2>
<ul>
<li><Link to="/deferred" className="site-title">Deferred</Link></li>
<li><Link to="/messenger" className="site-title">Chat</Link></li>
<li><Link to="/countTwo" className="site-title">Count</Link></li>
<li><Link to="/login" className="site-title">go to Login</Link></li>
<li><Link to="/useEffect" className="site-title">use Effect</Link></li>
<li><Link to="/useContex" className="site-title">use Contex</Link></li>
</ul>
</>
    )
}

export default Home;