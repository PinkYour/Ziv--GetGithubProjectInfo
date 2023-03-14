import { Avatar } from 'antd'
import React ,{useEffect,useState}from 'react'
import axios from 'axios'
import './index.scss'
import Link from 'antd/es/typography/Link'
import { rootState } from '../../store'
import { connect } from 'react-redux'
import { UpNameState } from '../../store/reducers/upName'
// import Login from '../../pages/Login'

const Index:React.FC<{ upName: UpNameState }>=(props:{ upName: UpNameState })=> {
  const [avatarurl,setAvatarurl]=useState('')
  const [name,setName]=useState('')
  const [upName,setUpName]=useState('')
  const [homepage,setHomepage]=useState('')
  // const name=
  
  useEffect(() => {
    // setUpName(props.upName.upName.name)
    if (sessionStorage.getItem('name')===null) {
      // console.log(sessionStorage.getItem('name'));
      setUpName(props.upName.upName.name)
      console.log();
      
      
  }else{
    setUpName(sessionStorage.getItem('name')+'')
      // console.log('else');
      
  }
    // setUpName(sessionStorage.getItem('name')+'')
    console.log('11',upName);
    axios({ url: `https://api.github.com/users/${upName}`, 
    method: 'GET', 
    headers: { "Authorization": `token ${'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'}` } })
    .then(response=>{
    // axios.get(`https://api.github.com/users/${upName}`).then(
    //     response => {
            // console.log('获取数据成功:side',response.data[''])
            setAvatarurl(response.data['avatar_url'])
            setName(response.data['login'])
            setHomepage(response.data['html_url'])
          },
          error => {
            console.log('获取数据失败Siderbar',error)
          }
    )
},[upName,props])
  return (
    <div className='SiderBar'>
        <Avatar src={avatarurl} size={100}/> 
        <br />
        <ul style={{listStyle:'none',textAlign:'left',lineHeight:3}}>
          <li><span>姓名: {name}</span></li>
          <li><Link href={homepage} target="_blank">主页</Link></li>
        </ul>
    </div>
  )
}

// export default Index
const mapStateToProps = (state: rootState) => {
  return state
}

export default connect(mapStateToProps, null)(Index)
