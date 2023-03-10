// import Search from 'antd/es/transfer/search'
import React from 'react'
import './index.scss'
// import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';

const { Search } = Input;
function index() {
  const onSearch = (value: string) =>{
    console.log(12);
    
  };
  return (
    <div className='Header'>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        loading={false}
        onSearch={onSearch}
        className='serchInput'
      />
      <button>login in</button>
    </div>
  )
}

export default index
