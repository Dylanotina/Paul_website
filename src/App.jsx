
import Hero from './components/Hero'
import './App.css'
import CtaSection from './components/CtaSection'
import Card from './components/Card'
import Footer from './components/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>

 
    </>
  )
}

export default App
