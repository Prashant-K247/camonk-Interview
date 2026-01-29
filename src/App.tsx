import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Homepage from './pages/HomePage'
import CreateBlog from './pages/CreateBlog'
import { Button } from './components/ui/button'
import Header from './components/Header'
import './App.css'


function App() {
  
  return (
    <>
      <Router>
        {/* header */}
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/create" element={<CreateBlog />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
