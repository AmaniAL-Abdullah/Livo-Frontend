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
import TaskEdit from './pages/Task/TaskEdit'
import RoleTasks from './pages/Task/RoleTasks'

import AchievementDetail from './pages/Achievement/AchievementDetail'
import AchievementEdit from './pages/Achievement/AchievementEdit'
import AddAchievement from './pages/Achievement/AddAchievement'
import RoleAchievements from './pages/Achievement/RoleAchievements'



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='*' element={<NotFound />} />

        <Route path='/roles/add' element={<AddRole />} />
        <Route path='roles/:id' element={<RoleDetail />} />
        <Route path='/roles/:id/edit' element={<RoleEdit />} />

        <Route path="/roles/:id/tasks" element={<RoleTasks />} />
        <Route path="/roles/:id/tasks/add" element={<AddTask />} />
        <Route path='/task/:id' element={<TaskDetail />} />
        <Route path="/task/:id/edit" element={<TaskEdit />} />

        <Route path="/roles/:id/achievements" element={<RoleAchievements />} />
        <Route path="/roles/:id/achievements/add" element={<AddAchievement />} />
        <Route path='/achievement/:id' element={<AchievementDetail />} />
        <Route path="/achievement/:id/edit" element={<AchievementEdit />} />


      </Routes>
    </Router>


  )
}

export default App