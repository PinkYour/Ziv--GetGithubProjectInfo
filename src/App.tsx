import React from 'react'
import './App.css'
import Header from './layout/Header'
import SiderBar from './layout/SiderBar'
import Content from './layout/Content'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Details from './components/Details'


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
              <Route path={"/Detail/:name"} element={ <Details />}/>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    )
  }

export default App