import React from 'react'
import DataCollection from './Components/DataCollection'
import Dashboard from './Components/Dashboard'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DataCollection />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      
    </>
  )
}

export default App