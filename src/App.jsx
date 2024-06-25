
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Skills from './components/Skills';
import Project from './components/Project';
import ContactUs from './components/ContactUs';
import Experience from './components/Experience';


function App() {

  return (
    <>
      
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/AboutUs' element={<AboutUs/>}/>
          <Route path='/Skills' element={<Skills/>}/>
          <Route path='/Projects' element={<Project/>}/>
          <Route path='/Experience' element={<Experience/>}/>
          <Route path='/Contact' element={<ContactUs/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
