import { Link } from "react-router-dom"

const Home = () => {

    return (
        <>
        <h2>Welcome Home</h2>
        <Link to="/deferred" className="site-title">Deferred</Link>
        </>
    )
}

export default Home;