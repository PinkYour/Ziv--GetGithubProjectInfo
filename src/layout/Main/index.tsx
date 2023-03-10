import React, { useState } from 'react'
import { connect } from 'react-redux'
import { rootState } from '../../store'
import WithoutData from '../../components/WithoutData'
import Content from '../../components/Content'
import { UpNameState } from '../../store/reducers/upName'

const Main: React.FC<{ upName: UpNameState }> = (props: { upName: UpNameState }) => {
  // const name: String = props.upName.upName.name
  // console.log(typeof(name));
  
  const [name,setName]=useState<String>(props.upName.upName.name)
  // sessionStorage.setItem("name", name.upName.name);
  // name=sessionStorage.getItem('name') === ''
  // if (name.upName.name === '' && sessionStorage.getItem('name') === '') {
  //   return (
  //     <div className='Main'>
  //       <WithoutData />
  //     </div>
  //   )
  // }
  // else {
    return (
      <div className='Main'>
        <Content namess={name} />
      </div>
    )
  // }
}
const mapStateToProps = (state: rootState) => {
  return state
}

export default connect(mapStateToProps, null)(Main)
