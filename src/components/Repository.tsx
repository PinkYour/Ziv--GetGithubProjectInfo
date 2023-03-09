import Breadcrumb from 'antd/es/breadcrumb'
import React, { useState, useEffect } from 'react'
import { useParams, Link as RouteLink } from 'react-router-dom'
import '../css/Repository.scss'
import axios from 'axios'
import { FolderOutlined, FileOutlined } from '@ant-design/icons'
import Link from 'antd/es/typography/Link'



const Repository: React.FC = () => {
  const { reponame } = useParams()
  const [detailData, setDetailData] = useState<any[]>([])
  
  useEffect(() => {
    axios.get(`https://api.github.com/repos/michaelliao/${reponame}/contents/`).then(
      response => {
        let data=[...response.data];
        let prev:any[]=[];
        let after: any[]=[]
        data.forEach((item)=>{
          if(item['type']==='dir'){
            prev.push(item)
          }else{
            after.push(item)
          }
        })
        console.log(123);
        
        after.forEach((item)=>{
          prev.push(item)
        })
      //  let arr:object[] =prev.concat(after)
        setDetailData(prev)
        

      },
      error => {
        console.log('获取数据失败', error)
      }
    )
    // console.log(reponame);

  },[reponame])

  return (
    <div className='Repository'>
      <Breadcrumb items={[
        {
          title: <RouteLink to='/'>主页</RouteLink>,
        },
        {
          title: <RouteLink to={`/Repository/${reponame}`}>{reponame}</RouteLink>,
        },
      ]}
      />
      <br />
      
      <table>
        <tbody>
          <tr>
            <th>名称</th>
            <td>大小</td>
            <td>更新日期</td>
          </tr>
          {
            // 
            detailData.map((item, index) => {
              switch (item['type']) {
                case 'dir':
                  return<tr key={index} className='dir' >
                    <th ><Link href={`/Repository/${reponame}/${item['name']}`}> <FolderOutlined />{item['name']}</Link></th>
                    <td></td>
                    <td>{item['created_at']}</td>
                  </tr>;
                case 'file':
                  return<tr key={index} className='file'>
                    <th ><FileOutlined />{item['name'].length>18?item['name'].slice(0,18)+'...':item['name']}</th>
                    <td>{item['size']}</td>
                    <td>{item['created_at']}</td>
                  </tr>
                
              }
            })
          } 
        </tbody>
      </table>
    </div>
  )
}


export default Repository

