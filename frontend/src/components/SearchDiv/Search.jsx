import React from 'react'
//npm install react-icons
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
//classname icon at aioutlinesearch when hover is click

const Search = () => {
  return (
    <div className='searchDiv grid gp-10 bg-greyIsh rounded-[10px] p-[1rem] w-[90%] m-auto '>
      <form action=''></form>
      <div className='firstDiv flex justify-between items-center rounded-[30px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700'>
        {/*Div chứa tìm kiếm nâng cao*/}
          <div className='advancedSearch flex flex-col items-center justify-center bg-black rounded-[30px] text-center text-white p-2 w-[130px] cursor-pointer hover:bg-gray-500'> 
              Tìm kiếm nâng cao
          </div>
        {/* Line dọc ngăn cách giữa tìm kiếm và advanced search */}
        <div className='border-l-2 border-black h-[40px] mx-2'></div>
        {/* Div chứa input */}
        <div className='inputDiv flex items-center w-full border-2 border-black rounded-[20px]'>
            <input 
              type='text' 
              className='bg-transparent focus:outline-none w-full p-2' 
              placeholder='Tìm kiếm'
            />
            <AiOutlineCloseCircle className='text-[30px] flex-grow mr-[0.5rem] text-[#a5a6a6] hover:text-textColor icon'/>
        </div>
        {/* Div chứa icon tìm kiếm */}
        <div className='iconDiv flex items-center justify-center w-[50px] h-[40px] bg-black rounded-full cursor-pointer hover:bg-gray-500'>
          <AiOutlineSearch className='text-white text-[20px]' />
        </div>
      </div>
    </div>

  )
}

export default Search
