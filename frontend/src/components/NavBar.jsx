import React, { useState } from 'react';
import { AiOutlineBell } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';  // Import Link để điều hướng giữa các trang

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Quản lý trạng thái đăng nhập, mặc định là chưa đăng nhập
  const [userInfo, setUserInfo] = useState({
    avatar: 'https://example.com/avatar.jpg', // URL avatar người dùng (nếu có), có thể thay thế bằng ảnh thật
    email: 'user@example.com',  // Email người dùng (chỉ khi đăng nhập)
  });

  return (
    <div className='navBar flex flex-wrap justify-between items-center p-[2rem] w-[90%] m-auto '>
      {/* Logo và Thanh chọn */}
      <div className="logoDiv flex items-center gap-4 w-full sm:w-auto">
        <img src="./public/logo.png" alt="Logo" className="logofinal w-[70px] h-[70px]" />
        <h1 className="logo text-[25px]">
          <span className="job-text">ITJOB</span><span className="search-text">Search</span>
        </h1>
      </div>
  
      {/* Menu */}
      <div className='menu flex gap-8 sm:w-full md:w-auto sm:flex-col md:flex-row'>
        <Link to="/" className="menuList text-[#6f6f6f] hover:text-white hover:bg-black hover:rounded-[20px] p-2">Trang chủ</Link>
        <Link to="/cv" className="menuList text-[#6f6f6f] hover:text-white hover:bg-black hover:rounded-[20px] p-2">Hồ sơ & CV</Link>
        <Link to="/job" className="menuList text-[#6f6f6f] hover:text-white hover:bg-black hover:rounded-[20px] p-2">Công việc</Link>
        <Link to="/status" className="menuList text-[#6f6f6f] hover:text-white hover:bg-black hover:rounded-[20px] p-2">Trạng thái</Link>
        <Link to="/favorite" className="menuList text-[#6f6f6f] hover:text-white hover:bg-black hover:rounded-[20px] p-2">Yêu thích</Link>
        {!isLoggedIn ? (
          // Chưa đăng nhập
          <>
            <li className="menuList text-[#6f6f6f] text-blue-500 hover:text-white hover:bg-black hover:rounded-[20px] p-2"><strong>Đăng nhập/Đăng ký</strong></li>
            <li className="menuList text-[#6f6f6f] border-2 border-black rounded-[20px] hover:text-white hover:bg-black hover:rounded-[20px] p-2">Nhà tuyển dụng</li>
          </>
        ) : (
          // Sau đăng nhập
          <>
            <li className="menuList text-[#6f6f6f] cursor-pointer p-2">
              <AiOutlineBell className="text-[25px]" /> {/* Icon thông báo khi đã đăng nhập */}
            </li>
            <li className="menuList text-[#6f6f6f] cursor-pointer p-2 flex items-center gap-2">
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
      </div>
    </div>
  )
}

export default NavBar
