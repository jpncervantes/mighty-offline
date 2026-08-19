import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import HeaderRejuv from './components/Header'
import Sidebar from './components/Sidebar'
import HomePage from './pages/homepage/Homepage'
import { useState } from 'react'

function App() {
  const [sidebarOpen, setSideBarOpen] = useState(false)
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderRejuv setSidebarOpen={() => setSideBarOpen(!sidebarOpen)} />
        <Sidebar open={sidebarOpen} onClose={() => setSideBarOpen(!sidebarOpen)}/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
