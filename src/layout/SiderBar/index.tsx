import { Avatar } from 'antd'
import React ,{useEffect,useState}from 'react'
import axios from 'axios'
import './index.scss'
import Link from 'antd/es/typography/Link'

const Index:React.FC=()=> {
  const [avatarurl,setAvatarurl]=useState('')
  const [name,setName]=useState('')
  const [homepage,setHomepage]=useState('')
  useEffect(() => {
    axios.get('https://api.github.com/users/michaelliao').then(
        response => {
            // console.log('获取数据成功:side',response.data)
            setAvatarurl(response.data.avatar_url)
            setName(response.data.name)
            setHomepage(response.data.html_url)
          },
          error => {
            console.log('获取数据失败',error)
          }
    )
},[])
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

export default Index
