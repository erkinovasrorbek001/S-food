import React from 'react'
import { Routes ,Route } from 'react-router-dom'

import Dom from './pages/Dom/Dom'
import Fillai from './pages/Filali/Fillai'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import Magich from './pages/Magic/Magic'
import Toshkentmax from './pages/Tshkentmax/Tashkentmax'
import Max from './pages/Chilonzormax/Chilonzormax'
import Wrapper from './components/Wrapper/Wrapper'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div >
        <Wrapper/>
      <Routes>
        <Route path='/' element={<Dom />} />
       <Route path='/Magic' element={<Magich />} />
        <Route path='/Toshkentmax' element={<Toshkentmax />} />
         <Route path='/Chilonzormax' element={<Max />} />
        <Route path='/Fillai' element={<Fillai />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/About' element={<About />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App