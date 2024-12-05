//rafce
//want import use <NAME enter 
import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Search from './components/SearchDiv/Search'
import Job from './components/JobDiv/Job'
import Value from './components/ValueDiv/Value'
import Footer from './components/FooterDiv/Footer'

const App = () => {
  return (
    <div className='w-[90%] m-auto bg-white'> 
      <NavBar/>
      <Search/>
      <Job/>
      <Value/>
      <Footer/>
    </div>
      
  )
}

export default App
