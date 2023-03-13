import { Button, Form, Input, Select } from 'antd';
import React from 'react';
import '../css/Login.scss'

const layout = {
    labelCol: { span: 12 },
    wrapperCol: { span: 10 },
};

const tailLayout = {
    wrapperCol: { offset: 10, span: 10 },
};

const Login: React.FC = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log(values);
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
                style={{ maxWidth: 600,marginLeft:350 }}
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