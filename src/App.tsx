import React from 'react'
import './App.scss'
import Main from './layout/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './components/Login'

import Register from './components/Register'

const App: React.FC = () => {
  return (
    <div className='App'>

      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Main />}></Route>
          <Route path='/Login' element={<Login />} ></Route>
          <Route path='/Register' element={<Register />} ></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App