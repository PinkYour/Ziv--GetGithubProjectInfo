import React, { useEffect, useState } from 'react';
import axios from "../utils/axios";
import { Descriptions, Pagination, } from 'antd';
import Link from 'antd/es/typography/Link';
import '../css/Content.scss'
import Dayjs from 'dayjs';
import { rootState } from '../store';
import { connect } from 'react-redux';
import { UpNameState } from '../store/reducers/upName';
import WithoutData from '../components/WithoutData'

// import { UpNameState } from '../store/reducers/upName';

// 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

// 5dc71cadc1d32ca18330374c511ca9cdbb1ccef2
const Content: React.FC<{ upName: UpNameState }> = (props: { upName: UpNameState }) => {
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [pageData, setPageData] = useState([])
    const [name,setName] = useState('')
    const ChangePage = (page: number, size: number) => {
        setCurrentPage(page)
        let start: number = (page - 1) * size;
        let end: number = page * size;
        setPageData(data.slice(start, end))
    }
    const ChangeSize = (current: number, size: number) => {
        let start: number = (current - 1) * size;
        let end: number = current * size;
        setPageData(data.slice(start, end))
    }
    useEffect(() => {
        // console.log(props.upName.upName.name);
        
        if (sessionStorage.getItem('name')===null) {
            setName(props.upName.upName.name)
            
        }else{
            setName(sessionStorage.getItem('name')+'')
        }
    axios({ 
        url: `https://api.github.com/users/${name}/repos`, 
        // url: `https://api.github.com/users/PinkYour/repos`, 
        method: 'GET', 
        headers: { "Authorization": `token ${'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'}` } 
    })
    .then(response=>{
        console.log(response);
        
                setData(response.data)
                setPageData(response.data.slice(0, 4))
            },
            error => {
                console.log('获取数据失败', error)
            }
        )
        // michaelliao
    }, [name,props])
    if (name === '' && localStorage.getItem('name') === '') {
        return (
            <WithoutData />
        )
    }else {
        return (
            <>
                <div className='Content'>
                    {
                        pageData.map((item, index) => {
                            let date = Dayjs(item['created_at']).format()
                            // console.log(item);
                            
                            return <div key={index} >
                                <Link href={`/Repository/${item['name']}`} >
                                    <Descriptions title={"仓库：" + item['name']} className='Item'>
                                        <Descriptions.Item label="Full_name(全称)">{item['full_name']}</Descriptions.Item>
                                        <Descriptions.Item label="Created_at">{date.substring(0, 10) + '—' + date.substring(11, 19)}</Descriptions.Item>
                                        <Descriptions.Item label="Private">{item['private'] ? '私有' : '公有'}</Descriptions.Item>
                                        <Descriptions.Item label="ID">{item['id']}</Descriptions.Item>
                                        <Descriptions.Item label="Description(介绍)">{item['description'] ? item['description'] : '暂无介绍'}</Descriptions.Item>
                                    </Descriptions>
                                </Link>
                            </div>
                        })
                    }

                    <Pagination
                        showSizeChanger
                        current={currentPage}
                        total={data.length}
                        defaultPageSize={4}
                        pageSizeOptions={[4, 6, 8, 10]}
                        onChange={(page: number, size: number) => { ChangePage(page, size) }}
                        onShowSizeChange={(current: number, size: number) => { ChangeSize(current, size) }}
                    />
                </div>
            </>
        )
    }
};

//   export default Content
const mapStateToProps = (state: rootState) => {
    // sessionStorage.clear()
    return state
}

export default connect(mapStateToProps, null)(Content)

