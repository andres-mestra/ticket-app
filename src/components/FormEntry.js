import * as React from 'react'
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, InputNumber } from 'antd';
import { SaveOutlined } from '@ant-design/icons';


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 14 },
};


export const FormEntry = () => {

  const history = useHistory()     

  const onFinish = (values) => {
    console.log('Success:', values);
    history.push('/escritorio')
  };

  const onFinishFailed = (errorInfo ) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Nombre agente"
        name="Agente"
        rules={[{ required: true, message: 'Por favor ingrese  su nombre!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Escritorio"
        name="escritorio"
        rules={[{ required: true, message: 'Ingrese el numero de escritorio!' }]}
      >
        <InputNumber min={ 1 } max={ 99 }/>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button 
          type="primary" 
          htmlType="submit"
          shape="round"
        >
          <SaveOutlined />
          Ingresar
        </Button>
      </Form.Item>
    </Form>
  )
}