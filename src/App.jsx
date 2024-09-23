import React from 'react'
import "./App.css"
import SignUp from './components/SignUp'
import Sign2 from './components/Sign2'
import Login from './components/Login'
import Forgetpassword from './components/Forgetpassword'
import Otp from './components/Otp'
import Confirmotp from './components/Confirmotp'
import ResetPassword from './components/ResetPassword'
import Landingpage from './components/Landingpage'
import Contact from './components/Contact'
import Business from './components/Business'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    // <div className='maincont'>
    //    <SignUp/>
    //    <Sign2/>/
    //    <Login/>/
    //    <Forgetpassword/>/
    //    <Otp/>/
    //    <Confirmotp/>/
    //    <ResetPassword/>
    //    <Landingpage/>/
    //    <Contact/>/
    //    <Business/>/
    // </div>
    <Router>
      <Routes>
        <Route path='/' element={<Landingpage/>} />
        <Route path='/Business' element={<Business/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Sign2' element={<Sign2/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Forgetpassword' element={<Forgetpassword/>} />
        <Route path='/Otp' element={<Otp/>} />
        <Route path='/Confirmotp' element={<Confirmotp/>} />
        <Route path='/ResetPassword' element={<ResetPassword/>} />
        
      </Routes>
    </Router>
  )
}

export default App