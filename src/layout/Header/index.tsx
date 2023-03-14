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
