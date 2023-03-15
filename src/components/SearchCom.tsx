import React, {  } from 'react'
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
  const onSearch = (value: string) => {
    // console.log(value);
    // console.log(props);
    
    props.serchUpName && props.serchUpName(value)
    sessionStorage.setItem('name', value)
    navigate('/Content')
    
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