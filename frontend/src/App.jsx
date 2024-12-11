//rafce
//want import use <NAME enter 
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import NavBar from './components/NavBar';
import NavBar_Cruit from './components/NavBar_Cruit';
import CV from './components/CV';
import Job from './components/Job';
import Favor from './components/Favor'
import Status from './components/Status'
import Footer from './components/Footer';
import ImgBg from './components/ImgBg'
import CompDetail from './components/CompDetail';
import Profile from './components/Profile'
import CreateJob from './components/CreateJob';
import Candidate from './components/Candidate';


const App = () => {
  const [isLogin, setIsLogin] = useState(false); // Quản lý trạng thái đăng nhập
  const [role, setRole] = useState('user'); // Quản lý vai trò ('user' hoặc 'recruiter')

  return (
    <Router>
      <div className="bg-white">
        {/* Hiển thị NavBar tương ứng */}
        {role === 'user' ? (
          <NavBar isLogin={isLogin} setIsLogin={setIsLogin} setRole={setRole} />
        ) : (
          <NavBar_Cruit isLogin={isLogin} setIsLogin={setIsLogin} setRole={setRole} />
        )}

        <ImgBg/>

        <Routes>
          {/* Trang chủ */}
          <Route path="/" element={<Home />} />
          {role === 'user' && (
            <>
            <Route path="/cv" element={<CV />} />
            <Route path="/favorite" element={<Favor />} />
            <Route path="/status" element={<Status />} />
            <Route path="/profile" element={<Profile />} />
            </>
          )}
          {role === 'recruiter' && (
            <>
            <Route path="/create" element={<CreateJob />} />
            <Route path='/candidate' element={<Candidate />} />
            </>
          )}
            
          <Route path="/job" element={<Job />} />
          <Route path="/companyDetail" element={<CompDetail />} />

        </Routes>
        <Footer /> {/* Footer có thể hiển thị dưới tất cả các trang */}
      </div>
    </Router>
  );
};


export default App
