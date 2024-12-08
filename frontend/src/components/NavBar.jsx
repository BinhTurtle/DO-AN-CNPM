import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineBell} from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { MdLogout } from "react-icons/md";
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
const NavBar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // Quản lý việc hiển thị box thông tin người dùng

  const [isLoggedIn, setIsLoggedIn] = useState(false); // Quản lý trạng thái đăng nhập, mặc định là chưa đăng nhập
  const [userInfo, setUserInfo] = useState("");
  const handleAvatarClick = () => {
    setIsDropdownVisible(!isDropdownVisible); // Khi nhấp vào avatar, toggle (hiển thị/ẩn) dropdown
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:8080/jobseeker/logout', {}, { withCredentials: true });
      
      if (response.status === 200) {
        alert("Bạn đã đăng xuất!");
        setIsLoggedIn(false); // Cập nhật trạng thái đăng xuất
        setIsDropdownVisible(false); // Ẩn dropdown khi đăng xuất
      } else {
        alert("Đăng xuất thất bại. Vui lòng thử lại.");
      }
    } catch (error) {
      console.error('Lỗi khi đăng xuất:', error);
      alert("Đăng xuất thất bại. Vui lòng thử lại.");
    }
  };
  const handleLogin = async () => {
    try {
      window.location.href = 'http://localhost:8080/jobseeker/auth/google';
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };
  useEffect(() => {
    const token = getCookie('token');
    if (token) {
      try {
        const user = jwtDecode(token);
        setUserInfo(user);
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
  }, []);
  return (
    <div className='navBar flex flex-wrap justify-between items-center p-[2rem] w-[90%] m-auto '>
      <div className="logoDiv flex items-center gap-4 w-full sm:w-auto">
       <img src="/logo.png" alt="Logo" className="logofinal w-[70px] h-[70px]" />
        <h1 className="logo text-[25px]">
          <span className="job-text">ITJOB</span><span className="search-text">Search</span>
        </h1>
      </div>
  
      {/* Menu */}
      <div className='menu flex gap-8 sm:w-full md:w-auto sm:flex-col md:flex-row'>
        <Link to="/" className="menuList text-[#6f6f6f] hover:text-white hover:bg-black hover:rounded-[20px] text-[17px] text-black p-2">Trang chủ</Link>
        <Link to="/cv" className="menuList text-[#6f6f6f] hover:text-white hover:bg-black hover:rounded-[20px] text-[17px] text-black p-2">Hồ sơ & CV</Link>
        <Link to="/job" className="menuList text-[#6f6f6f] hover:text-white hover:bg-black hover:rounded-[20px] text-[17px] text-black p-2">Công việc</Link>
        <Link to="/status" className="menuList text-[#6f6f6f] hover:text-white hover:bg-black hover:rounded-[20px] text-[17px] text-black p-2">Trạng thái</Link>
        <Link to="/favorite" className="menuList text-[#6f6f6f] hover:text-white hover:bg-black hover:rounded-[20px] text-[17px] text-black p-2">Yêu thích</Link>
        {!isLoggedIn ? (
          // Chưa đăng nhập
          <>
            <li className="menuList text-[#6f6f6f] text-blue-500 hover:text-white hover:bg-black hover:rounded-[20px]  p-2" onClick={handleLogin}><strong>Đăng nhập/Đăng ký</strong></li>
            <li className="menuList text-[#6f6f6f] border-2 border-black rounded-[20px] hover:text-white hover:bg-black hover:rounded-[17px] text-black p-2"
            onClick={handleAvatarClick}>Nhà tuyển dụng</li>
          </>
        ) : (
          // Sau đăng nhập
          <>
            <li className="menuList text-[#6f6f6f] cursor-pointer p-2">
              <AiOutlineBell className="text-[25px]" /> {/* Icon thông báo khi đã đăng nhập */}
            </li>
            <li className="menuList text-[#6f6f6f] cursor-pointer p-2 flex items-center gap-2" onClick={handleAvatarClick}>
              {/* Avatar hoặc Icon người dùng */}
              <img
                src={userInfo.avatar || ''}  // Nếu có avatar thì dùng, nếu không thì dùng FaUserCircle
                alt="User Avatar"
                className="w-[30px] h-[30px] rounded-full object-cover"
                style={{ objectFit: 'cover' }}
              />
              {/* Nếu không có avatar, hiển thị icon mặc định */}
              {!userInfo.avatar && <FaUserCircle className="text-[#6f6f6f] text-[25px]" />}
            </li>
          </>
        )}

        {/* Box thông tin người dùng (hiển thị khi nhấp vào avatar) */}
        {isLoggedIn && isDropdownVisible && (
        <div className="absolute top-[50px] right-0 bg-white border-2 border-gray-300 rounded-lg w-[250px] shadow-md p-4">
          <div className="flex flex-col items-center gap-3 mb-4">
            {/* Avatar lớn */}
            <img
              src={userInfo.avatar || ''} 
              alt="User Avatar"
              className="w-[80px] h-[80px] rounded-full object-cover"
            />
            {/* Tên và email */}
            <div className="text-center">
              <h2 className="font-semibold">{userInfo.name}</h2>
              <p className="text-sm text-gray-500">{userInfo.email}</p>
            </div>
          </div>

          {/* Các tính năng */}
          <ul className="space-y-2 items-center text-center">
          <Link to="/profile" className="cursor-pointer text-gray-700 hover:text-blue-500 py-2">Hồ sơ</Link>
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
                onClick={() => setIsDropdownVisible(false)} // Ẩn dropdown khi click vào "Thoát"
              >
                Thoát
              </li>
          </ul>
          
        </div>
      )}
      </div>
    </div>
  )
}

export default NavBar
