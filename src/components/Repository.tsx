import Breadcrumb from 'antd/es/breadcrumb'
import React, { useState, useEffect } from 'react'
import { useParams, Link as RouteLink } from 'react-router-dom'
import '../css/Repository.scss'
import axios from '../utils/axios'
import { FolderOutlined, FileOutlined } from '@ant-design/icons'
import Link from 'antd/es/typography/Link'
import { connect } from 'react-redux'
import { rootState } from '../store'
import Header from '../layout/Header'
import SiderBar from '../layout/SiderBar'
import token from '../token'


const Repository: React.FC = () => {
  const { reponame } = useParams()
  const [detailData, setDetailData] = useState<any[]>([])

  useEffect(() => {

    axios({
      url: `https://api.github.com/repos/${sessionStorage.getItem('name')}/${reponame}/contents/`,
      method: 'GET',
      headers: { "Authorization": `token ${token}` }
    })
      .then(response => {

        let data = [...response.data];
        let prev: any[] = [];
        let after: any[] = []
        data.forEach((item) => {
          if (item['type'] === 'dir') {
            prev.push(item)
          } else {
            if (item['name'] === '.gitignore') {
              prev.unshift(item)

            } else {
              after.push(item)
            }
          }
        })
        after.forEach((item) => {
          if (item['name'] === '.gitignore') {
            prev.unshift(item)
          }
          prev.push(item)
        })
        //  let arr:object[] =prev.concat(after)
        setDetailData(prev)
      },
        error => {
          console.log('获取数据失败', error)
        }
      )

  }, [reponame])

  return (
    <>
      {/* <div className="left">
        <SiderBar />
      </div>
      <div className="right">
        <Header /> */}
        <div className='Repository'>
          <Breadcrumb items={[
            {
              title: <RouteLink to='/Content'>主页</RouteLink>,
            },
            {
              title: <RouteLink to={`/Content/${reponame}`}>{reponame}</RouteLink>,
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
                  if (item['name'] === '.gitignore') {
                    return <tr key={index} className='dir'>
                      <th > <FolderOutlined />{item['name']}</th>
                      <td></td>
                      <td>{item['created_at']}</td>
                    </tr>;
                  }
                  switch (item['type']) {
                    case 'dir':
                      return <tr key={index} className='dir' >
                        <th ><Link href={`/Content/${reponame}/${item['name']}`}> <FolderOutlined />{item['name']}</Link></th>
                        <td></td>
                        <td>{item['created_at']}</td>
                      </tr>;
                    case 'file':
                      return <tr key={index} className='file'>
                        <th ><FileOutlined />{item['name'].length > 18 ? item['name'].slice(0, 18) + '...' : item['name']}</th>
                        <td>{item['size']}</td>
                        <td>{item['created_at']}</td>
                      </tr>

                  }
                })
              }
            </tbody>
          </table>
        </div>
      {/* </div> */}
    </>
  )
}


// export default Repository
const mapStateToProps = (state: rootState) => {
  return state
}

export default connect(mapStateToProps, null)(Repository)
