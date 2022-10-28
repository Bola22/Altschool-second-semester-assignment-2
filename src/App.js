import { React } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Users from "./pages/users/Users"
import User from "./pages/user/User"


function App() {

 

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='users'element = {<Users />} />
        <Route path='user/:userId' element={<User/>}/>
      {/* </Route> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
