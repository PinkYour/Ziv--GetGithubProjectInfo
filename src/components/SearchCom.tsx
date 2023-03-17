import React, { MutableRefObject, useRef, useState } from 'react'
import { Dispatch, } from 'redux';

import { useNavigate } from 'react-router-dom';
import { Button, Input } from 'antd';
import { connect } from 'react-redux';

import { UpNameActionType } from '../store/reducers/upName';
const { Search } = Input;

interface Props {
  name?: string,
  serchUpName?(name: string): void
}
const SearchCom:React.FC<Props>=(props:Props)=>{
  const navigate=useNavigate()
  // const [serchValue,setSerchValue]=useState('')
  // const serchValue=useRef()
  const serchValue: MutableRefObject<any> = useRef(null)

  const onSearch = (value: string) => {
    props.serchUpName && props.serchUpName(value)
    sessionStorage.setItem('name', value)
    navigate('/Content')
    // value=''
    serchValue.current.value=''
    // console.log(serchValue.current.input);
    

  };
  return (
    <div>
      <Search
            placeholder="请输入你要查找的用户"
            allowClear
            enterButton="搜索"
            size="large"
            loading={false}
            onSearch={onSearch}
            ref={serchValue}
            className='serchInput'
          />
    </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  serchUpName: (name: string) => {
    dispatch({
      type: UpNameActionType.UPNAME,
      payload: { upName: { name } }
    })
  },

})
export default connect(null,mapDispatchToProps) (SearchCom)