import '../css/Register.scss'
import {
  Button,
  Checkbox,
  Form,
  Input,
} from 'antd';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 20,
      offset: 4,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Register: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate()

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    if (values.name!=='' && values.password!=='' && values.confirm !== '') {
      navigate('/Login')
    
      alert('注册成功')
    }else{
      alert('请确保你的信息填写完整')
    }
  };

  return (
    <div className="Register">
      <h1>GitHub仓库查看器</h1>
      <br />
      <br />
      <h3>请注册</h3>
      <br />
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        style={{ maxWidth: 600, marginLeft: 400 }}
        scrollToFirstError
      >
       
        <Form.Item
          name="name"
          label="昵称"
          tooltip="你的昵称"
          rules={[{  message: '请输入你的昵称', whitespace: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="密码"
          rules={[
            {
              message: '请输入你的密码',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="确认密码"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              message: '再次输入密码',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('两次密码不一致'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the <a href="">agreement</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
          <span>  &nbsp; </span>
        <Link to='/Login'>返回登录</Link>
        </Form.Item>

      </Form>
    </div>
  );
};

export default Register;