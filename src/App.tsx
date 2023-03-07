import React, { Component } from 'react'
import './App.css'
import Header from './layout/Header'
import SiderBar from './layout/SiderBar'
import Content from './layout/Content'
export default class App extends Component {

  render() {
    return (
      <div className='App'>
        <div className='left'>
          <SiderBar />
        </div>
        <div className='right'>
          <Header />
          <Content/>
        </div>
      </div>
    )
  }
}
