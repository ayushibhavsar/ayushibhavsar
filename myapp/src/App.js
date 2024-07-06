import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
// import Home from './screens/Home';
// import AdminDashboard from './screens/AdminDashboard';

function App() {
    return (
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />{" "}
        <Route  path="/signup" element={<SignUp />} />{" "}
        </Routes>
        </BrowserRouter>
    );
}

export default App;
