import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Orders from './pages/Orders/Orders'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import { Route,Routes } from 'react-router-dom'


const App = () => {
  const url="http://localhost:8000"
  return (
    <div>
      <Navbar/>
      <hr/>
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path='/add' element={<Add/>}></Route>
          <Route path='/list' element={<List/>}></Route>
          <Route path='/orders' element={<Orders url={url}/>}></Route>

        </Routes>
      </div>
      
    </div>
  )
}

export default App
