import React from 'react'
import { useState } from 'react'
import { IoHeartCircleOutline } from "react-icons/io5";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { IoHeartCircle } from "react-icons/io5";
import { IoIosArrowDropleft, IoIosArrowDropright, IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
//import logo company
import logo1 from '/company/vnglogo.png';

const Data = [
  {
    id:1,
    image: logo1,
    title: 'Software Engineer',
    company: 'Công ty cổ phần VNG',
    salary: '20 - 50 triệu đồng',
    location: 'Hà Nội'
  },
  {
    id:2,
    image: logo1,
    title: 'Software Engineer',
    company: 'Công ty cổ phần VNG',
    salary: '20 - 50 triệu đồng',
    location: 'Hà Nội'
  },
  {
    id:1,
    image: logo1,
    title: 'Software Engineer',
    company: 'Công ty cổ phần VNG',
    salary: '20 - 50 triệu đồng',
    location: 'Hà Nội'
  },
  {
    id:1,
    image: logo1,
    title: 'Software Engineer',
    company: 'Công ty cổ phần VNG',
    salary: '20 - 50 triệu đồng',
    location: 'Hà Nội'
  },
  {
    id:1,
    image: logo1,
    title: 'Software Engineer',
    company: 'Công ty cổ phần VNG',
    salary: '20 - 50 triệu đồng',
    location: 'Hà Nội'
  },
]

const Job = () => {
  const [hoverlove, setHoverlove] = useState(false);
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);
  return (
    <div>
        <div className='TitleJobsection text-[30px] flex mt-5 justify-between items-center'> 
          <span>Việc làm tốt nhất </span>
          <span className='Dieuhuong flex items-center'>
              {/* Icon left */}
              <div 
                className='cursor-pointer'
                onMouseEnter={() => setHoverLeft(true)} 
                onMouseLeave={() => setHoverLeft(false)}
              >
                {hoverLeft ? <IoIosArrowDropleftCircle /> : <IoIosArrowDropleft />}
              </div>

              {/* Icon right */}
              <div 
                className='cursor-pointer ml-2'
                onMouseEnter={() => setHoverRight(true)} 
                onMouseLeave={() => setHoverRight(false)}
              >
                {hoverRight ? <IoIosArrowDroprightCircle /> : <IoIosArrowDropright />}
              </div>
          </span>
        </div>
        <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-5'>
            {
              Data.map(({id,image,title,company,salary,location}) => { 
                return (
                  <div key={id} className='group group/item singleJob w-[280px] h-[135px] p-[15px] bg-white rounded-[20px] border border-black cursor-pointer'> 
                      <div className='com_top flex justify-between items-center mb-2'> 
                        <h2 className='text-lg font-bold'>{title}</h2> 
                        <span className='text-xl' 
                          onMouseEnter={() => setHoverlove(true)} 
                          onMouseLeave={() => setHoverlove(false)} 
                        > 
                          {hoverlove ? <IoHeartCircle /> : <IoHeartCircleOutline />} 
                        </span>
                      </div> 
                      <div className='com_bot flex items-center'> 
                        {/* Logo công ty */}
                        <div className='w-[60px] h-[60px] mr-2'> 
                          <img src={image} alt='Company Logo' className='w-full h-full object-contain' /> 
                        </div>
                        
                        {/* Line dọc ngăn cách giữa logo và thông tin */}
                        <div className='border-l-2 border-gray-500 h-[60px] mx-2'></div>
                        
                        {/* Tên công ty + phúc lợi */}
                        <div className='com_right ml-2'>
                          <div className='com_left text-left'> 
                            <p className='text-sm font-medium mb-1'>{company}</p>
                          </div> 
                          <div className='flex items-center mb-1'>
                            <span className='text-sm font-medium'><RiMoneyDollarCircleLine /></span> 
                            <p className='text-sm ml-2'>{salary}</p> 
                          </div> 
                          <div className='flex items-center'> 
                            <span className='text-sm font-medium'><IoLocationOutline /></span> 
                            <p className='text-sm ml-2'> {location} </p> 
                          </div>
                        </div>
                      </div>
                    </div>
                )
              })
            }
            
          </div>
    </div>
  )
}

export default Job
