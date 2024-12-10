// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import CV from './components/CV';
import Job from './components/Job';
import Favor from './components/Favor';
import Status from './components/Status';
import Footer from './components/Footer';
import ImgBg from './components/ImgBg';
import CompDetail from './components/CompDetail';
import Profile from './components/Profile';
import Register from './components/register';
import { UserProvider } from './userContext/userContext';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <div className="bg-white">
          <NavBar />
          <ImgBg />
          <Routes>
            <Route path="/jobseeker" element={<Home />} />
            <Route path="/recruiter" element={<Home />} />
            <Route path="/jobseeker/profile" element={<Profile />} />
            <Route path="/jobseeker/job" element={<Job />} />
            <Route path="/jobseeker/favorite" element={<Favor />} />
            <Route path="/jobseeker/status" element={<Status />} />
            <Route path="/jobseeker/register" element={<Register />} />
            <Route path="/jobDetail/:id" element={<CompDetail />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
