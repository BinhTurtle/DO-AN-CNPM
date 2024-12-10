// src/components/NavBar.js
import React, { useState } from 'react';
import { AiOutlineBell } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../userContext/userContext';
import axios from 'axios';

const NavBar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const { userInfo, isLoggedIn, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleAvatarClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:8080/jobseeker/logout');
      
      if (response.status === 200) {
        alert("Bạn đã đăng xuất!");
        logout();
        setIsDropdownVisible(false);
        navigate('/');
      } else {
        alert("Đăng xuất thất bại. Vui lòng thử lại.");
      }
    } catch (error) {
      console.error('Lỗi khi đăng xuất:', error);
      alert("Đăng xuất thất bại. Vui lòng thử lại.");
    }
  };

  const handleLogin = async () => {
    window.location.href = 'http://localhost:8080/jobseeker/auth/google';
  };

  return (
    <div className='navBar flex flex-wrap justify-between items-center p-[2rem] w-[90%] m-auto'>
      <div className="logoDiv flex items-center gap-4 w-full sm:w-auto">
        <img src="/logo.png" alt="Logo" className="logofinal w-[70px] h-[70px]" />
        <h1 className="logo text-[25px]">
          <span className="job-text">ITJOB</span><span className="search-text">Search</span>
        </h1>
      </div>

      <div className='menu flex gap-8 sm:w-full md:w-auto sm:flex-col md:flex-row'>
        <Link to="/" className="menuList text-[#6f6f6f] hover:text-white hover:bg-black hover:rounded-[20px] text-[17px] text-black p-2">Trang chủ</Link>
        <Link to="/cv" className="menuList text-[#6f6f6f] hover:text-white hover:bg-black hover:rounded-[20px] text-[17px] text-black p-2">Hồ sơ & CV</Link>
        <Link to="/job" className="menuList text-[#6f6f6f] hover:text-white hover:bg-black hover:rounded-[20px] text-[17px] text-black p-2">Công việc</Link>
        <Link to="/jobseeker/status" className="menuList text-[#6f6f6f] hover:text-white hover:bg-black hover:rounded-[20px] text-[17px] text-black p-2">Trạng thái</Link>
        <Link to="/jobseeker/favorite" className="menuList text-[#6f6f6f] hover:text-white hover:bg-black hover:rounded-[20px] text-[17px] text-black p-2">Yêu thích</Link>
        
        {!isLoggedIn ? (
          <>
            <li className="menuList text-[#6f6f6f] text-blue-500 hover:text-white hover:bg-black hover:rounded-[20px] p-2" onClick={handleLogin}><strong>Đăng nhập/Đăng ký</strong></li>
            <li className="menuList text-[#6f6f6f] border-2 border-black rounded-[20px] hover:text-white hover:bg-black hover:rounded-[17px] text-black p-2"
            onClick={handleAvatarClick}>Nhà tuyển dụng</li>
          </>
        ) : (
          <>
            <li className="menuList text-[#6f6f6f] cursor-pointer p-2">
              <AiOutlineBell className="text-[25px]" />
            </li>
            <li className="menuList text-[#6f6f6f] cursor-pointer p-2 flex items-center gap-2" onClick={handleAvatarClick}>
              <img
                src={userInfo.avatar || ''}
                alt="User Avatar"
                className="w-[30px] h-[30px] rounded-full object-cover"
                style={{ objectFit: 'cover' }}
              />
              {!userInfo.avatar && <FaUserCircle className="text-[#6f6f6f] text-[25px]" />}
            </li>
          </>
        )}

        {isLoggedIn && isDropdownVisible && (
          <div className="absolute top-[50px] right-0 bg-white border-2 border-gray-300 rounded-lg w-[250px] shadow-md p-4">
            <div className="flex flex-col items-center gap-3 mb-4">
              <img
                src={userInfo.avatar || ''}
                alt="User Avatar"
                className="w-[80px] h-[80px] rounded-full object-cover"
              />
              <div className="text-center">
                <h2 className="font-semibold">{userInfo.name}</h2>
                <p className="text-sm text-gray-500">{userInfo.email}</p>
              </div>
            </div>
            <ul className="space-y-2 items-center text-center">
              <Link to="/jobseeker/profile" className="cursor-pointer text-gray-700 hover:text-blue-500 py-2">Hồ sơ</Link>
              <li className="cursor-pointer text-gray-700 hover:text-blue-500 py-2">Cài đặt</li>
              <li 
                className="cursor-pointer text-red-500 hover:text-red-600 flex items-center justify-center gap-2 py-2"
                onClick={handleLogout}
              >
                <MdLogout className="text-lg" />
                Đăng xuất
              </li>
              <li
                className="cursor-pointer text-gray-700 hover:text-blue-500 py-2"
                onClick={() => setIsDropdownVisible(false)}
              >
                Thoát
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
