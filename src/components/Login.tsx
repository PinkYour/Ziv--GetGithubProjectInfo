import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import '../css/Login.scss'
import { } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import userInfo from '../UserInfo'

const layout = {
    labelCol: { span: 12 },
    wrapperCol: { span: 10 },
};
const tailLayout = {
    wrapperCol: { offset: 10, span: 10 },
};
interface UserInfo {
    note: string,
    gender: string
}
const Login: React.FC = () => {
    const [form] = Form.useForm();
    let judgeName:boolean=false
    const navigate = useNavigate()
    const judge = async (values: UserInfo) => { //模拟后端判断
        for (let index = 0; index < userInfo.length; index++) {
            if (userInfo[index].name === values.note && userInfo[index].pwd === values.gender) {
                localStorage.setItem('isLogin', 'true')
                localStorage.setItem('userName', values.note)
                navigate('/')
                judgeName=true
                break;
            }
            else{
                continue;
            }
        }
    }
    const onFinish = (values: UserInfo) => {
        judge(values)
        if (judgeName!==true) {
            alert('账号密码错误')
        }else{
            alert('登录成功')
        }

    };

    const onReset = () => {
        form.resetFields();
    };
    return (
        <div className='Login'>
            <h1>GitHub仓库查看器</h1>
            <br />
            <br />
            <Form
                {...layout}
                form={form}
                name="control-hooks"
                onFinish={onFinish}
                style={{ maxWidth: 600, marginLeft: 350 }}
            >
                <Form.Item name="note" label="名称">
                    <Input />
                </Form.Item>
                <Form.Item name="gender" label="密码" >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                >
                    {({ getFieldValue }) =>
                        getFieldValue('gender') === 'other' ? (
                            <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>
                        ) : null
                    }
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                        Reset
                    </Button>

                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;