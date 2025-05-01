import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'

import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Logout from './pages/Logout'
import AddRole from './pages/AddRole'
import RoleDetail from './pages/RoleDetail'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='*' element={<NotFound />}/>
        <Route path='/roles/new' element={<AddRole />} />
        <Route path='roles/:id' element={<RoleDetail />} />
      </Routes>
    </Router>


  )
}

export default App