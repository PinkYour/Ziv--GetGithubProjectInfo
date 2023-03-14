import React, { Component } from 'react'
import './index.scss'
import { Button, Input } from 'antd';
import { connect } from 'react-redux';
// import { useParams } from 'react-router-dom'

import { Dispatch } from 'redux';
import { UpNameActionType } from '../../store/reducers/upName'

const { Search } = Input;

interface Props {
  name?: string,
  serchUpName?(name: string): void
}
class Header extends Component<Props> {

  render() {
    const onSearch = (value: string) => {
      // console.log(value);
      this.props.serchUpName && this.props.serchUpName(value)
      sessionStorage.setItem('name', value)
      
    };
    if (this.props.name==='') {
      
      return (
        <div className='Header'>
  
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            loading={false}
            onSearch={onSearch}
            className='serchInput'
          />
          {/* <button>{this.props.name}</button> */}
          <div className='btn'>
            <Button type="primary" size={'small'} href='/Login'>
              登录
            </Button>
            <span> &nbsp;</span>
            <Button type="default" size={'small'} href='/Register'>
              注册
            </Button>
  
          </div>
        </div>
      )
    }
    else{
      const userName=localStorage.getItem('userName')
      return (
        <div className='Header'>
  
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            loading={false}
            onSearch={onSearch}
            className='serchInput'
          />
          {/* <button>{this.props.name}</button> */}
          <div className='btn'>
            <span>欢迎：{userName} </span>
              &nbsp;
            <Button type="default" size={'small'} href='/Login' onClick={()=>{
              localStorage.setItem('isLogin','false')
              localStorage.setItem('userName','')
              sessionStorage.setItem('name', '')
              
            }}>
              退出
            </Button>
          </div>
        </div>
      )
    }
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  serchUpName: (name: string) => {
    dispatch({
      type: UpNameActionType.UPNAME,
      payload: { upName: { name } }
    })
  },

})


export default connect(null, mapDispatchToProps)(Header)
