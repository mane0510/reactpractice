
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import ReactHookWithYup from './components/ReactHookForm/ReactHookWithYup';
import { UseReducerHook } from './components/UseReducerHook/UseReducerHook';
import UseStateCounter from './components/UseStateHook/UseStateCounter';


function App() {
  return (
    <div className="App">
   <Navbar/>
   {/* <ReactHookWithYup/> */}
   {/* <UseReducerHook/> */}
   <UseStateCounter/>
    </div>
  );
}

export default App;
