import React, { useEffect } from 'react'
import {  BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Content from '../../components/Content'
// import DirList from '../../components/DirList'
// import Login from '../../components/Login'
// import Register from '../../components/Register'
// import Repository from '../../components/Repository'
// import DirList from '../../components/DirList'
// import Repository from '../../components/Repository'
import Header from '../Header'
import SiderBar from '../SiderBar'

import './index.scss'


const Main: React.FC = () => {

  const navigate = useNavigate()

  useEffect(() => {
    // console.log(localStorage.getItem('isLogin'));
    //判断是否登录过
    if (localStorage.getItem('isLogin') === 'false') {
      navigate('/Login')
    } else {
      navigate('/')
    }
  }, [])
  return (
    <div className='Main'>
      <div className="left">
        <SiderBar />
      </div>
      <div className="right">
        <Header />
        <Content />
      </div>
      {/* <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/Main' element={<Main />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/Main/Repository/:reponame' element={<Repository />} />
            <Route path='/Main/Repository/:reponame/:dirname' element={<DirList />} />
          </Routes>
        </BrowserRouter> */}
    </div>
  )
  // }
}
export default Main
