import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginForm/LoginPage';
import Register from './components/LoginForm/Register';
import Navbar from './components/Navbar/Navbar';
import FormOne from './components/Forms/FormOne';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar/>}/>
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/Register" element={<Register />} />
        <Route  path='/FormOne'   element={<FormOne/>}/>
      </Routes>
    </Router>
  );
}

export default App;
