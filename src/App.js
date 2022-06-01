import { Route, Routes } from "react-router-dom"
import NavBar from "./NavBar"
import Home from "./components/Home";
import Login from './components/Login'
import {AuthProvider} from './contexs/AuthContex'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import MyList from './components/myList';
import DeferredView from './components/Deferred'
import Messenger from './components/ChatMessaging/client'

function App() {
  return (
    <>
    <AuthProvider>
      <Header />
    <NavBar />
         <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deferred" element={<DeferredView />} />
          <Route path="/messenger" element={<Messenger />} />

          <Route path="/myList" element={<MyList />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      </AuthProvider>
    </>
  )
}

export default App
