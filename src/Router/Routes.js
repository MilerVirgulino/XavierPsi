// src/Router/Routes.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../components/Login/Login';
import HomePage from '../components/HomePage/HomePage';

 const AppRoutes = () => {
  return (
   <Router>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/home" element={<HomePage />} />
    </Routes>
   </Router>
  );
};

export default AppRoutes;