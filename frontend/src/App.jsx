//rafce
//want import use <NAME enter 
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import NavBar from './components/NavBar';
import CV from './components/CV';
import Job from './components/Job';
import Favor from './components/Favor'
import Status from './components/Status'
import Footer from './components/Footer';
import ImgBg from './components/ImgBg'
import Profile from './components/Profile';
const App = () => {
  return (
    <Router>
      <div className="bg-white">
        {/* NavBar luôn hiển thị ở tất cả các trang */}
        <NavBar />
        <ImgBg/>
        <Routes>
          {/* Trang chủ */}
          <Route path="/" element={<Home />} />

          {/* Trang hồ sơ */}
          <Route path="/cv" element={<CV />} />

          {/* Trang công việc */}
          <Route path="/job" element={<Job />} />

          {/* Trang yêu thích */}
          <Route path="/favorite" element={<Favor />} />

          {/* Trang trạng thái */}
          <Route path="/status" element={<Status />} />

          {/* Trang trạng thái */}
          <Route path="/profile" element={<Profile />} />
        </Routes>
        
        <Footer /> {/* Footer có thể hiển thị dưới tất cả các trang */}
      </div>
    </Router>
  );
};


export default App
