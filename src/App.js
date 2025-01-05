
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import DataFetcher from './components/UseEffectHook/DataFetcher';
import LoggerComponent from './components/UseEffectHook/LoggerComponent';
import TimerComponent from './components/UseEffectHook/TimerComponent';



function App() {
  
  return (
    <div className="App">
   <Navbar/>
   <LoggerComponent/>
   <TimerComponent/>
   <DataFetcher/>

    </div>
  );
}

export default App;
