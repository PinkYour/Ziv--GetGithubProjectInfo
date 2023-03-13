import React, { useEffect, useState } from 'react'
// import { connect } from 'react-redux'
// import { rootState } from '../../store'
// import WithoutData from '../../components/WithoutData'
import Content from '../../components/Content'
// import { UpNameState } from '../../store/reducers/upName'

const Main: React.FC = () => {
  // const name1: String = props.upName.upName.name
  // console.log(typeof(name1));
  
  // const [name,setName]=useState('')
  // // const name=name1+''
  // useEffect(()=>{
  //   setName(props.upName.upName.name)
    
  // })
  // console.log("Main",name);
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
        {/* {console.log('Main',name)} */}
        <Content  />
      </div>
    )
  // }
}
// const mapStateToProps = (state: rootState) => {
//   return state
// }

// export default connect(mapStateToProps, null)(Main)
export default Main
