
import './App.css';
import ApiForm from './components/ApiForm/ApiForm';
import { Navbar } from './components/Navbar/Navbar';
import DataFetcher from './components/UseEffectHook/DataFetcher';
import LoggerComponent from './components/UseEffectHook/LoggerComponent';
import MultiEffectComponent from './components/UseEffectHook/MultiEffectComponent';
import ResizeComponent from './components/UseEffectHook/ResizeComponent';
import TimerComponent from './components/UseEffectHook/TimerComponent';



function App() {
  
  return (
    <div className="App">
   <Navbar/>
   {/* <LoggerComponent/> */}
   {/* <TimerComponent/>
   <DataFetcher/> */}
   {/* <ResizeComponent/>
   <MultiEffectComponent/> */}
 <ApiForm/>
    </div>
  );
}

export default App;
