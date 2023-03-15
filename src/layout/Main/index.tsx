import React, { useEffect } from 'react'
import {  BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Content from '../../components/Content'
import DirList from '../../components/DirList'
import Repository from '../../components/Repository'
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
        <Content/>
        {/* <Routes>
            <Route path='/' element={<Content />} />
            <Route path='Content' element={<Content />} />
            <Route path='Content/:reponame' element={<Repository />} />
            <Route path='Content/:reponame/:dirname' element={<DirList />} />
        </Routes> */}
        
      </div>
     </div>
  )
  // }
}
export default Main
