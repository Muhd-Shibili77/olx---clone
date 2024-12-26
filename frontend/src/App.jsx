import React from 'react'
import Home from './pages/Home/Home'
import Sell from './pages/Sell/Sell';
import Form from './pages/Form/Form'
import { ToastContainer, toast } from 'react-toastify';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Sell />} />
        <Route path="/post/attributes" element={<Form />} />



      </Routes>
    
    </>
  )
}

export default App