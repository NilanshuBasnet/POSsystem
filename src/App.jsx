import React from 'react'
import DataCollection from './Components/DataCollection'
import Dashboard from './Components/Dashboard'
import { Route, Routes } from 'react-router-dom'
import Cards from './Components/Cards'
import Settings from './Components/Settings'
import History from './Components/History'



const App = () => {
  
  return (
    <>
      <Routes>
      {/* Login/Entry Route */}
      <Route path="/" element={<DataCollection />} />

      {/* Dashboard Layout */}
      <Route path="/dashboard" element={<Dashboard />}>
        {/* Nested Routes under Dashboard */}
        <Route path="cards" element={<Cards />} />
        <Route path="history" element={<History />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
      
    </>
  )
}

export default App