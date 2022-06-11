import { Route, Routes } from "react-router-dom"
import NavBar from "./NavBar"
import Home from "./components/Home";
import Login from './components/Login'
import {AuthProvider} from './contexs/AuthContex'
import Header from './components/Header';
import MyList from './components/myList';
import DeferredView from './components/Deferred'
import Messenger from './components/ChatMessaging/client'
import CountTwo from "./components/Deferred/CountTwo";
import PracticUseEffect from "./components/PracticUseEffect";
import MainUseContex from "./components/PratcticUseContex";
import MainUseRef from "./components/MainUseRef";
import MainUseMemo from "./components/MainUseMemo";

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
          <Route path="/countTwo" element={<CountTwo />} />
          <Route path="/useEffect" element={<PracticUseEffect />} />
          <Route path="/useContex" element={<MainUseContex />} />
          <Route path="/useRef" element={<MainUseRef />} />
          <Route path="/useMemo" element={<MainUseMemo />} />

          <Route path="/myList" element={<MyList />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      </AuthProvider>
    </>
  )
}

export default App
