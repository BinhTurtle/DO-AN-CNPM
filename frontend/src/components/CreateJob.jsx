import React, { useState,useEffect } from 'react';
import { SingleJob } from './JobHome'; // Import SingleJob từ JobHome
import logo1 from '/company/vnglogo.png';
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoLocateOutline, IoLocationOutline } from "react-icons/io5";
import { GiSandsOfTime } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
import { PiListMagnifyingGlassLight } from "react-icons/pi";
import { GrLocationPin, GrStatusGood } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { BiGridAlt } from 'react-icons/bi'; // Icon lĩnh vực
import { FaUsers } from 'react-icons/fa'; // Icon quy mô
import { FaFlag } from 'react-icons/fa';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
const Data = [
  {
    id: 1,
    image: logo1,
    title: 'Software Engineer',
    company: 'Công ty cổ phần VNG',
    salary: '20 - 50 triệu đồng',
    location: 'Hà Nội'
  },
  {
    id: 2,
    image: logo1,
    title: 'DevOps',
    company: 'Công ty cổ phần VNG',
    salary: '20 - 50 triệu đồng',
    location: 'Hà Nội'
  },
  {
    id: 2,
    image: logo1,
    title: 'DevOps',
    company: 'Công ty cổ phần VNG',
    salary: '20 - 50 triệu đồng',
    location: 'Hà Nội'
  },
  {
    id: 2,
    image: logo1,
    title: 'DevOps',
    company: 'Công ty cổ phần VNG',
    salary: '20 - 50 triệu đồng',
    location: 'Hà Nội'
  },
  {
    id: 2,
    image: logo1,
    title: 'DevOps',
    company: 'Công ty cổ phần VNG',
    salary: '20 - 50 triệu đồng',
    location: 'Hà Nội'
  },
  {
    id: 2,
    image: logo1,
    title: 'DevOps',
    company: 'Công ty cổ phần VNG',
    salary: '20 - 50 triệu đồng',
    location: 'Hà Nội'
  },
  {
    id: 2,
    image: logo1,
    title: 'DevOps',
    company: 'Công ty cổ phần VNG',
    salary: '20 - 50 triệu đồng',
    location: 'Hà Nội'
  },
];

const CreateJob = () => {
  const [Jobtitle, setJobtitle] = useState(""); // Giá trị ban đầu là chuỗi rỗng
  const [salary, setSalary] = useState(""); // Lưu giá trị mức lương
  const [location, setLocation] = useState(""); // Lưu giá trị địa điểm
  const [experience, setExperience] = useState(""); // Lưu giá trị kinh 
  const [address, setAddress] = useState("");
  
  const [tasks, setTasks] = useState([{ task: "" }]); // Initial task with one input field
  const [showInput, setShowInput] = useState(false); // Toggle visibility of new input 
  const [workingTime, setWorkingTime] = useState("");

  const handleInputChange = (index, event) => {
    const newTasks = [...tasks];
    newTasks[index].task = event.target.value;
    setTasks(newTasks);
  };

  const handleAddInput = () => {
    setTasks([...tasks, { task: "" }]); // Add new empty input field
  };

  const handleRemoveInput = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks); // Remove input field
  };

  const handleChangeJobtitle = (e) => {
    setJobtitle(e.target.value); // Cập nhật giá trị khi người dùng nhập
  };
  
  const handleAddressChange = (e) => {
    setAddress(e.target.value); // Update address state with the input value
  };

  const handleWorkingTimeChange = (e) => {
    setWorkingTime(e.target.value);
  };
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        if (!userInfo) {
          setError('Vui lòng đăng nhập để xem công việc.');
          setLoading(false);
          return;
        }
        const response = await axios.get('http://localhost:8080/recruiter', 
          { withCredentials: true }
        );
        setfetch("đã thực hiện lấy data");
        setJobs(response.data); 
      } catch (error) {
        setError(error.message);  // Lưu lỗi nếu có
      } finally {
        setLoading(false);  // Kết thúc trạng thái loading
      }
    };

    fetchJobs();  // Gọi hàm lấy dữ liệu
  }, []); 
  
  return (
    <div className='w-[90%] m-auto'>
      <div className='TitleJobsection text-[30px] flex mt-5 justify-between items-center mb-5'>
        <h1 className="text-2xl font-bold">Chi tiết công việc</h1>
      </div>
      <div className='flex gap-[1.5rem] justify-between m-auto'>
        <div className='jobContainer flex flex-col gap-[20px] items-center'>
          {Data.map(({ id, image, title, company, salary, location }) => (
            <SingleJob 
              key={id}
              image={image}
              title={title}
              company={company}
              salary={salary}
              location={location}
            />
          ))}
        </div>

        <div className='infoDetail flex-column gap-10 justify-center flex-wrap items-center py-5 border-2 border-black p-4 rounded-[20px]]'> 
            <div className='JobTitleBox text-[30px] flex justify-between items-center ml-4 font-bold'>
              <input
                type="text"
                placeholder="Nhập tiêu đề công việc của bạn..."
                onChange={handleChangeJobtitle}
                className="w-full p-2 border-2 border-gray-300 rounded-[10px] focus:outline-none focus:border-blue-500"
              />
            </div>
            
            <div className="ChecklistBox mt-4">
      <div className="flex gap-20 items-center justify-center p-4">
        {/* Mức lương */}
        <div className="flex items-center gap-4">
          <RiMoneyDollarCircleLine className="text-3xl flex-shrink-0" />
          <div className="flex flex-col">
            <label className="font-bold text-lg">Mức lương:</label>
            <input
              type="text"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              placeholder="Nhập..."
              className="text-md text-gray-500 border rounded-md p-2 focus:outline-none focus:border-blue-500 w-[100px]"
            />
          </div>
        </div>

      
        <div className="flex items-center gap-4">
          <IoLocationOutline className="text-3xl flex-shrink-0" />
          <div className="flex flex-col">
            <label className="font-bold text-lg">Địa chỉ:</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Nhập..."
              className="text-md text-gray-500 border rounded-md p-2 focus:outline-none focus:border-blue-500 w-[100px]"
            />
          </div>
        </div>

        {/* Kinh nghiệm */}
        <div className="flex items-center gap-4">
          <GiSandsOfTime className="text-3xl flex-shrink-0" />
          <div className="flex flex-col">
            <label className="font-bold text-lg">Kinh nghiệm:</label>
            <input
              type="text"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              placeholder="Nhập..."
              className="text-md text-gray-500 border rounded-md p-2 focus:outline-none focus:border-blue-500 w-[120px]"
            />
          </div>
        </div>
      </div>
    </div>

            <div className='ButtonDiv flex gap-5 m-4'>
            {/* Nút "Ứng tuyển ngay" */}
            <button className="bg-blue-500 text-white py-2 px-6 rounded-[20px] hover:bg-blue-700 w-2/3">
              <span className="block transition-transform duration-150 hover:scale-110">
                Ứng tuyển ngay
              </span>
            </button>

            {/* Nút "Yêu thích" */}
            <button className="border-2 border-black py-2 px-4 rounded-[20px] hover:text-white hover:bg-black w-1/3">
              <span className="block transition-transform duration-150 hover:scale-110">
                Yêu thích
              </span>
            </button>
          </div>

            <div className='Chitiettuyendung text-xl font-bold flex justify-between items-center ml-4 mt-5'>
              Chi tiết tuyển dụng
            </div>

            <div className="DescDiv flex flex-col gap-4 p-4">
      {/* Tiêu đề "Mô tả công việc" */}
      <div className="flex items-center text-xl ml-4 font-bold">
        <SlNote className="ml-2 text-gray-500 text-lg mr-2" />
        <span>Mô tả công việc</span>
      </div>

      {/* Nội dung bullet list */}
      <div className="flex-col gap-1 ml-10">
        <div className="flex items-center">
          <button
            onClick={handleAddInput}
            className="text-blue-500 hover:text-blue-700 transition"
          >
            <span className="text-xl font-bold">+</span> Thêm công việc
          </button>
        </div>

        {/* Dynamically render input fields for tasks */}
        {tasks.map((task, index) => (
          <div key={index} className="flex items-start gap-2 mt-4 items-center">
            <span className="text-xl font-bold text-black mr-2">•</span>
            <input
              type="text"
              value={task.task}
              onChange={(e) => handleInputChange(index, e)}
              className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Nhập công việc"
            />
            {/* Remove button only if there is more than one task */}
            {tasks.length > 1 && (
              <button
                onClick={() => handleRemoveInput(index)}
                className="text-red-500 hover:text-red-700"
              >
                Xóa
              </button>
            )}
          </div>
        ))}
      </div>
    </div>


            <div className="RequireDiv flex flex-col gap-4 p-4">
                {/* Tiêu đề*/}
                <div className="flex items-center text-xl ml-4 font-bold">
                  <PiListMagnifyingGlassLight className="ml-2 text-gray-800 text-xl mr-2" /> 
                  <span>Yêu cầu ứng viên</span>
                </div>

                <div className="flex-col gap-1 ml-10">
        <div className="flex items-center">
          <button
            onClick={handleAddInput}
            className="text-blue-500 hover:text-blue-700 transition"
          >
            <span className="text-xl font-bold">+</span> Thêm công việc
          </button>
        </div>

        {/* Dynamically render input fields for tasks */}
        {tasks.map((task, index) => (
          <div key={index} className="flex items-start gap-2 mt-4 items-center">
            <span className="text-xl font-bold text-black mr-2">•</span>
            <input
              type="text"
              value={task.task}
              onChange={(e) => handleInputChange(index, e)}
              className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Nhập công việc"
            />
            {/* Remove button only if there is more than one task */}
            {tasks.length > 1 && (
              <button
                onClick={() => handleRemoveInput(index)}
                className="text-red-500 hover:text-red-700"
              >
                Xóa
              </button>
            )}
          </div>
        ))}
      </div>
            </div>
            
            <div className="InterestDiv flex flex-col gap-4 p-4">
                {/* Tiêu đề */}
                <div className="flex items-center text-xl ml-4 font-bold">
                  <GrStatusGood className="ml-2 text-gray-500 text-l mr-2" /> 
                  <span>Quyền lợi</span>
                </div>

                {/* Nội dung bullet list */}
                <div className="flex-col gap-1 ml-10">
        <div className="flex items-center">
          <button
            onClick={handleAddInput}
            className="text-blue-500 hover:text-blue-700 transition"
          >
            <span className="text-xl font-bold">+</span> Thêm công việc
          </button>
        </div>

        {/* Dynamically render input fields for tasks */}
        {tasks.map((task, index) => (
          <div key={index} className="flex items-start gap-2 mt-4 items-center">
            <span className="text-xl font-bold text-black mr-2">•</span>
            <input
              type="text"
              value={task.task}
              onChange={(e) => handleInputChange(index, e)}
              className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Nhập công việc"
            />
            {/* Remove button only if there is more than one task */}
            {tasks.length > 1 && (
              <button
                onClick={() => handleRemoveInput(index)}
                className="text-red-500 hover:text-red-700"
              >
                Xóa
              </button>
            )}
          </div>
        ))}
      </div>
      </div>

      <div className="LocationDiv flex flex-col gap-4 p-4">
      {/* Title: Địa chỉ */}
      <div className="flex items-center text-xl ml-4 font-bold">
        <IoHomeOutline className="ml-2 text-gray-500 text-xl mr-2" />
        <span>Địa chỉ</span>
      </div>

      {/* Input for address */}
      <div className="flex-col gap-1 ml-10 mt-2">
        <div className="flex items-start gap-2">
          <span className="text-xl font-bold text-black mr-2">•</span>
          {/* Input field for the address */}
          <input
            type="text"
            value={address}
            onChange={handleAddressChange}
            className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Nhập địa chỉ"
          />
        </div>
      </div>
    </div>

    <div className="TimeDiv flex flex-col gap-4 p-4">
      {/* Tiêu đề "Thời gian làm việc" */}
      <div className="flex items-center text-xl ml-4 font-bold">
        <IoMdTime className="ml-2 text-gray-500 text-lg mr-2" />
        <span>Thời gian làm việc</span>
      </div>

      {/* Nội dung nhập thời gian làm việc */}
      <div className="flex-col gap-1 ml-10 mt-2">
        <div className="flex items-start gap-2">
          <span className="text-xl font-bold text-black mr-2">•</span>
          {/* Input field for working time */}
          <input
            type="text"
            value={workingTime}
            onChange={handleWorkingTimeChange}
            className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Nhập thời gian làm việc"
          />
        </div>
      </div>
    </div>

        </div>

        <div className="p-6 bg-white border border-black rounded-[20px] shadow-md text-center h-fit w-[400px] relative">

      {/* Nội dung chính */}
      <div className="nameDiv">
        <div className="w-[100px] h-[100px] mx-auto rounded-full border border-black flex items-center justify-center">
          <img
            src="/vng.logo.png"
            alt="Company Logo"
            className="w-[80%] h-[80%] object-contain"
          />
        </div>
        <h2 className="text-xl font-semibold mt-4">Công ty TNHH Một Mình Anh</h2>
        <div className="text-left mt-6">
          <div className="flex items-center gap-2 mb-3">
            <BiGridAlt className="text-gray-500 text-lg" /> 
            <span className="text-lg font-bold">Lĩnh vực: <span className="font-medium">Công nghệ thông tin</span></span>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <FaUsers className="text-gray-500 text-lg" /> 
            <span className="text-lg font-bold">Quy mô: <span className="font-medium">1000 nhân viên</span></span>
          </div>
          <div className="flex items-center gap-2 mb-3">
           <IoLocationOutline className="text-gray-500 text-lg" /> 
            <span className="text-lg font-bold">Địa điểm: <span className="font-medium">268 Lý Thường Kiệt Quận 10</span></span>
          </div>
        </div>
        <button className="mt-6 py-2 px-6 border-2 border-black rounded-[20px] hover:bg-black hover:text-white transition duration-200">
          Xem trang công ty
        </button>
      </div>

     
    </div>

      </div>
    </div>
  );
};

export default CreateJob;