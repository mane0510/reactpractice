
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import ReactHookWithYup from './components/ReactHookForm/ReactHookWithYup';
import { UseReducerHook } from './components/UseReducerHook/UseReducerHook';

function App() {
  return (
    <div className="App">
   <Navbar/>
   {/* <ReactHookWithYup/> */}
   <UseReducerHook/>
    </div>
  );
}

export default App;
