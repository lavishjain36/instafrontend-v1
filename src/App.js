import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Signup from './components/pages/Signup';
import Signin from './components/pages/Signin';
import Profile from './components/pages/Profile';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/"  element={<Home/>}></Route>
      <Route path="/signup"  element={<Signup/>}></Route>
      <Route path="/signin"  element={<Signin/>}></Route>
      <Route path="/profile"  element={<Profile/>}></Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
