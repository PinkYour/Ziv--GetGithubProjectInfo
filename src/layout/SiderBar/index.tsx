import { Avatar } from 'antd'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './index.scss'
import Link from 'antd/es/typography/Link'
import { rootState } from '../../store'
import { connect } from 'react-redux'
import { UpNameState } from '../../store/reducers/upName'
import token from '../../token'

const Index: React.FC<{ upName: UpNameState }> = (props: { upName: UpNameState }) => {
  const [avatarurl, setAvatarurl] = useState<string>('')
  const [name, setName] = useState('')
  let upName = ''
  const [homepage, setHomepage] = useState('')

  useEffect(() => {
    if (sessionStorage.getItem('name') === null) {
      upName = props.upName.upName.name
    } else {
      upName = sessionStorage.getItem('name') + ''
    }
    if (upName==='') {
      
    }else{
      axios.get(`https://api.github.com/users/${upName}`, { headers: { "Authorization": `token ${token}` } }).then(
        (response) => {
          setAvatarurl(response.data['avatar_url'])
          setName(response.data['login'])
          setHomepage(response.data['html_url'])
        },
        (error) => {
          console.log('获取数据失败Siderbar', error)
        }
      )
    }
  }, [upName, props])
  return (
    <div className='SiderBar'>
      <Avatar src={avatarurl} size={100} />
      <br />
      <ul style={{ listStyle: 'none', textAlign: 'left', lineHeight: 3 }}>
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
