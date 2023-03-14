import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Content from '../../components/Content'

import './index.scss'


const Main: React.FC = () => {

  const navigate = useNavigate()

  useEffect(() => {
    // console.log(localStorage.getItem('isLogin'));
    if (localStorage.getItem('isLogin') === 'false') {
      navigate('/Login')
    } else {
      navigate('/')
    }
  },[])
  return (
    <div className='Main'>
        <Content />
    </div>
  )
  // }
}
export default Main
