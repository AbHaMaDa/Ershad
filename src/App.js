import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Scholarship from './pages/scholarshipForm/Scholarship';
import Join from './pages/joinTeamForm/Join';
import Experts from './pages/experts/Experts';
import AboutUs from './pages/aboutUs/AboutUs';

function App() {
  return (
      <div className='container-fluid '>
        <Routes>
          <Route>
          <Route path='/' Component={Home} />
          <Route path='/login' Component={Login} />
          <Route path='/register' Component={Register} />
          <Route path='/register_scholarship' Component={Scholarship} />
          <Route path='/join_team' Component={Join} />
          <Route path='/experts' Component={Experts} />
          <Route path='/about_us' Component={AboutUs} />






          </Route>
        </Routes>
      </div>
  );
}

export default App;
