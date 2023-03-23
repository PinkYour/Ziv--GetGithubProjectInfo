import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Content from '../../components/Content'
import DirList from '../../components/DirList'
import Repository from '../../components/Repository'
import WithoutData from '../../components/WithoutData'


import Header from '../Header'
import SiderBar from '../SiderBar'

import './index.scss'


const Main: React.FC = () => {

  const navigate = useNavigate()

  useEffect(() => {
    //判断是否登录过
    if (localStorage.getItem('isLogin') === 'false') {
      navigate('/Login')
    }

  }, [])
  // if (sessionStorage.getItem('name') === '') {
  if (sessionStorage.getItem('name')) {
    console.log(111);
    return (
      <div className='Main'>
        <div className="left">
          <SiderBar />
        </div>
        <div className="right">
          <Header />
          <Routes>
            <Route path='/Content' element={<Content />} >
            </Route>
            <Route path='/Content/:reponame' element={<Repository />} />
            <Route path='/Content/:reponame/:dirname' element={<DirList />} />
          </Routes>

        </div>
      </div>
    )
    
  } else {
    return (
      <div className='Main'>
        <div className="left">
          <SiderBar />
        </div>
        <div className="right">
          <Header />
          <WithoutData />
        </div>
      </div>
    )
  }
}
export default Main
