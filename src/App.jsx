import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import DashboardLayout from './components/DashboardLayout'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='dashboard' element={<DashboardLayout />}>
            <Route index element={<h1>Home</h1>} />
            <Route path='inbox' element={<h1>Inbox</h1>} />
            <Route path='calendar' element={<h1>Calendar</h1>} />
            <Route path='search' element={<h1>Search</h1>} />
            <Route path='settings' element={<h1>Settings</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
