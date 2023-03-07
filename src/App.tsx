import React, { Component } from 'react'
import './App.css'
// import Login from './pages/Login'
// import LoginIndex from './pages/LoginSuccess'
import PageLayout from './components/PageLayout'
export default class App extends Component {

  render() {
    return (
      <div className='App'>
        {/* <Login/>
        <LoginIndex /> */}
        <PageLayout/>
      </div>
    )
  }
}
