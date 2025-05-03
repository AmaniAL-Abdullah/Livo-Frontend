import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'

import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Logout from './pages/Logout'
import NotFound from './pages/NotFound'

import AddRole from './pages/Role/AddRole'
import RoleDetail from './pages/Role/RoleDetail'
import RoleEdit from './pages/Role/RoleEdit'

import TaskDetail from './pages/Task/TaskDetail'
import AddTask from './pages/Task/AddTask'



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
        <Route path='/roles/:id/edit' element={<RoleEdit />} />

        <Route path='/roles/:id/tasks' element={<TaskDetail />} />
        <Route path='/roles/:id/tasks/add' element={<AddTask />} />


      </Routes>
    </Router>


  )
}

export default App