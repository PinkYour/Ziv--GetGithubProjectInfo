import React from 'react'
import './App.css'
import Header from './layout/Header'
import SiderBar from './layout/SiderBar'
import Content from './layout/Content'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Repository from './components/Repository'
import DirList from './components/DirList'


 const App:React.FC =()=> {

    return (
      <div className='App'>
        <div className='left'>
          <SiderBar />
        </div>
        <div className='right'>
          <Header />
          <BrowserRouter>
            <Routes>
              <Route path='/' element={ <Content/>}/>
              <Route path={"/Repository/:reponame"} element={ <Repository />}/>
              <Route path={"/Repository/:reponame/:dirname"} element={ <DirList />}/>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    )
  }

export default App