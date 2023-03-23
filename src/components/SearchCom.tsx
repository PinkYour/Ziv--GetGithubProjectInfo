import React, { createRef } from 'react'
import { Dispatch, } from 'redux';
import '../css/SearchCom.scss'
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import { UpNameActionType } from '../store/reducers/upName';

interface Props {
  name?: string,
  serchUpName?(name: string): void
}
const SearchCom:React.FC<Props>=(props:Props)=>{
  const navigate=useNavigate()
 
  // const serchValue:React.Ref<InputRef> = createRef()
  const serchValue:React.LegacyRef<HTMLInputElement> = createRef()

  // const onSearch = (value: string) => {
  //   if (serchValue.current?.input?.value) {
  //     props.serchUpName && props.serchUpName(value)
  //     sessionStorage.setItem('name', value)
  //     navigate('/Content')
  //     serchValue.current.input.value=''

  //   }
  // };
  const click=()=>{
    // console.log(serchValue.current?.value);
    if (serchValue.current?.value) {
      let va=serchValue.current.value
      props.serchUpName && props.serchUpName(va)
      sessionStorage.setItem('name', va)
      localStorage.setItem('upname', va)
      navigate('/Content')
      serchValue.current.value=''
    }
    
  }
  
  return (
    <>
    
    {/* <div>
      <Search
            ref={serchValue}
            placeholder="请输入你要查找的用户"
            allowClear
            enterButton="搜索"
            // value={}
            size="large"
            loading={false}
            onSearch={onSearch}
            className='serchInput'
          />
    </div> */}

    <div className='SearchCom'>
      <input type="text" placeholder="请输入你要查找的用户"  ref={serchValue} onKeyDown={(e)=>{
        if (e.code==='Enter') {
          click()
        }
      }} />
      <button onClick={click}>搜索</button>
    </div>
    </>
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