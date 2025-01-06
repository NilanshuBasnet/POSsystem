import React from 'react'
import DataCollection from './Components/DataCollection'
import Dashboard from './Components/Dashboard'
import { Route, Routes } from 'react-router-dom'
import Menu from './Components/Menu'
import Settings from './Components/Settings'
import History from './Components/History'



const App = () => {
  return (
    <div className="flex">
      <Menu/>
      <div className="w-full">
        <Routes>
          <Route path="/" element={<DataCollection />} />
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/settings" element={<Settings />}/>
          <Route path="/history" element={<History />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App