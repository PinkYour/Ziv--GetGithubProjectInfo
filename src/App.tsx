import React from 'react'
import './App.css'
import Header from './layout/Header'
import SiderBar from './layout/SiderBar'
import Main from './layout/Main'
import { BrowserRouter,Route,Routes, useParams } from 'react-router-dom'
import Repository from './components/Repository'
import DirList from './components/DirList'
import Login from './components/Login'


 const App:React.FC =()=> {
  const isLogin=sessionStorage.getItem('isLogin')
  // const {props}=useParams()
  // const params=props.history.push({pathname :"/meet"})
    if (isLogin) {
      
      return (
        <div className='App'>
          <div className='left'>
            <SiderBar />
          </div>
          <div className='right'>
            <Header  />
            <BrowserRouter>
              <Routes>
                <Route path='/' element={ <Main/>}/>
                <Route path='/Login' element={ <Login/>}/>
                <Route path={"/Repository/:reponame"} element={ <Repository />}/>
                <Route path={"/Repository/:reponame/:dirname"} element={ <DirList />}/>
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      )
    }else{
      // {useParams()}
      return(
        <Login/>
      )
    }
  }

export default App