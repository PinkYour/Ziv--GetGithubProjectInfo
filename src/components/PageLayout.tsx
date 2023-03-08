import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Descriptions, Pagination } from 'antd';
import Link from 'antd/es/typography/Link';



const PageLayout: React.FC = () => {
    const [data, setData] = useState([])
    const [pageData, setPageData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    // console.log(start,end);
    useEffect(() => {
        axios.get('https://api.github.com/users/michaelliao/repos').then(
            response => {
                setData(response.data)
                let arr = response.data.splice(0, 4)
                setPageData(arr)
                
            },
            error => {
                console.log('获取数据失败', error)

            }
        )

    }, [])
    //    console.log(data);

    const ChangePage=(page:number)=>{
        setCurrentPage(page)
        console.log(page);
        let start:number=(page-1)*4;
        let end:number=page*4;
        setPageData(data.slice(start,end))
    }
    return (

        <div className=''>

            {
                pageData.map((item, index) => {

                    return <div key={index}>
                        <Link href='/' target='_blank'>
                            <Descriptions title={"仓库(" + item['id'] + ')：' + item['name']} className='Item'>
                                <Descriptions.Item label="Full_name(全称)">{item['full_name']}</Descriptions.Item>
                                <Descriptions.Item label="Created_at">{item['created_at']}</Descriptions.Item>
                                <Descriptions.Item label="Private">{item['private'] ? '私有' : '公有'}</Descriptions.Item>
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
                onChange={(page: number) => {ChangePage(page)}}
            />
        </div>
    )
};

export default PageLayout;