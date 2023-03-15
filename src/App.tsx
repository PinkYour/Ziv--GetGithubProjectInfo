import React, { useEffect } from 'react'
import './App.scss'
import Main from './layout/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Repository from './components/Repository'
import DirList from './components/DirList'
import Login from './components/Login'
// import SiderBar from './layout/SiderBar'
// import Header from './layout/Header'
import Register from './components/Register'
import Content from './components/Content'
// import axios from 'axios'

// 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
// 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
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