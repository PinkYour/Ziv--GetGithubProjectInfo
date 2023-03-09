import Breadcrumb from 'antd/es/breadcrumb'
import React,{useState,useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import '../css/Details.scss'
import axios from 'axios'

const Details: React.FC = () => {
  let { name } = useParams()
  const [repoName ,setRepoName]=useState<string>('')
  useEffect(() => {
    setRepoName('1024pixels')
    axios.get(`https://api.github.com/repos/michaelliao/1024pixels/contents/`).then(
      response => {
        console.log(response);
        
      },
      error => {
        console.log('获取数据失败', error)
      }
    )

  }, [])

  return (
    <div className='Details'>
      <Breadcrumb
        items={[
          {
            title: <Link to='/'>主页</Link>,
          },
          {
            title: <Link to={`/Dtails/${repoName}`}>详情</Link>,
          },
        ]}
      />
      {repoName}
    </div>
  )
}

export default Details
