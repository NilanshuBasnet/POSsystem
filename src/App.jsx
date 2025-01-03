import React from 'react'
import DataCollection from './Components/DataCollection'
import Dashboard from './Components/Dashboard'
import { Route, Routes } from 'react-router-dom'
import Menu from './Components/Menu'


const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<DataCollection />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/test" element={<Menu />} />
      </Routes>
      
    </>
  )
}

export default App