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
import MainUseCallBack from "./components/MainCallback";
import MainUseReducer from "./components/MainUseReducer";
import MainUseReducer2 from "./components/MainUseReducer2";
import MainUseReducer3 from "./components/MainUseReducer3";
import MainUseTransition from "./components/MainUseTransition";
import MainUseDeferredValue from "./components/MainUseDeferredValue";
import UseLayoutEffect from "./components/OptionalHooks/MainUseLayoutEffect/UseLayoutEffect";
import UseLocaleStorage from "./components/CustomHooks/localeStorage";
import Toggle1 from "./components/CustomHooks/1-useToggle/Toggle1";
import Timeout from "./components/CustomHooks/2-useTimeOut/TimeoutComponent";
import DebounceComponent from "./components/CustomHooks/3-useDebounce/DebounceComponent";
import UpdateEffectComponent from "./components/CustomHooks/4-useUpdateEffect/UpdateEffectComponent";
import ArrayComponent from "./components/CustomHooks/5-useArray/ArrayComponent";

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
          <Route path="/useCallback" element={<MainUseCallBack />} />
          <Route path="/useReducer" element={<MainUseReducer />} />
          <Route path="/useReducer2" element={<MainUseReducer2 />} />
          <Route path="/useReducer3" element={<MainUseReducer3 />} />
          <Route path="/useTransition" element={<MainUseTransition />} />
          <Route path="/useDeferredValue" element={<MainUseDeferredValue />} />
          <Route path="/useLayout" element={<UseLayoutEffect />} />
          {/* custum Hooks */}
          <Route path="/localeStorage" element={<UseLocaleStorage />} />
          <Route path="/toggle1" element={<Toggle1 />} />
          <Route path="/timeout" element={<Timeout />} />
          <Route path="/debounce" element={<DebounceComponent />} />
          <Route path="/updateEffect" element={<UpdateEffectComponent />} />
          <Route path="/useArray" element={<ArrayComponent />} />
          
          <Route path="/myList" element={<MyList />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      </AuthProvider>
    </>
  )
}

export default App
