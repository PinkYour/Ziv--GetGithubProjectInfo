import React, { useEffect } from 'react'
import './App.scss'
import Main from './layout/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Repository from './components/Repository'
import DirList from './components/DirList'
import Login from './components/Login'
import SiderBar from './layout/SiderBar'
import Header from './layout/Header'
import Register from './components/Register'
// import axios from 'axios'

// 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
// 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
const App: React.FC = () => {
  return (
    <div className='App'>
      <div className="left">
        <SiderBar />
      </div>
      <div className="right">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/Repository/:reponame' element={<Repository />} />
            <Route path='/Repository/:reponame/:dirname' element={<DirList />} />

          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App