import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Home from './pages/Home'
import AddRole from './pages/AddRole'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/roles/new' element={<AddRole />} />
      </Routes>
    </Router>


  )
}

export default App