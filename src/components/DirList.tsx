import React, { useState, useEffect } from 'react'
import '../css/DirList.scss'
import axios from 'axios'
import { Link as RouteLink, useParams } from 'react-router-dom'
import { FileOutlined, FolderOutlined } from '@ant-design/icons'
import { Breadcrumb } from 'antd'
import Link from 'antd/es/typography/Link'
import Header from '../layout/Header'
import SiderBar from '../layout/SiderBar'
import token from '../token'

const DirList: React.FC = () => {
    const { reponame, dirname } = useParams()
    const [list, setList] = useState<any[]>([])
    // console.log(reponame);
    // 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
    // const name=''+sessionStorage.getItem('name');
    useEffect(() => {
        axios({
            url: `https://api.github.com/repos/${sessionStorage.getItem('name')}/${reponame}/contents/${dirname}`,
            method: 'GET',
            headers: { "Authorization": `token ${token}` }
        })
            .then(res => {
                let data = [...res.data];
                let prev: any[] = [];
                let after: any[] = []
                data.forEach((item) => {
                    if (item['type'] === 'dir') {
                        prev.push(item)

                    } else {
                        after.push(item)
                    }
                })
                after.forEach((item) => {
                    prev.push(item)
                })
                setList(prev)
            }).catch((err) => {
                console.log('出错了', err);

            })
    }, [])
    return (
        <>
            {/* <div className="left">
                <SiderBar />
            </div>
            <div className="right">
                <Header /> */}
                <div className='DirList'>
                    <Breadcrumb items={[
                        {
                            title: <RouteLink to='/Content'>主页</RouteLink>,
                        },
                        {
                            title: <RouteLink to={`/Content/${reponame}`}>{reponame}</RouteLink>,
                        },
                        {
                            title: <RouteLink to={`/Content/${reponame}/${dirname}`}>{dirname}</RouteLink>,
                        },
                    ]}
                    />
                    <table>
                        <tbody>
                            <tr>
                                <th>名称</th>
                                <td>大小</td>
                                <td>更新日期</td>
                            </tr>
                            {
                                list.map((item, index) => {
                                    switch (item['type']) {
                                        case 'dir':
                                            return <tr key={index} className='dir' >
                                                <th ><Link href={`/${reponame}/${item['name']}`}> <FolderOutlined />{item['name']}</Link></th>
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

export default DirList
