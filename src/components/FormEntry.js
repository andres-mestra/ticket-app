import * as React from 'react'
import { Redirect, useHistory } from 'react-router-dom';
import { Form, Input, Button, InputNumber } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { getUserStorage } from '../helpers/getUserStorage';


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 14 },
};


export const FormEntry = () => {

  const history = useHistory()     
  const [usuario] = React.useState(getUserStorage())

  console.log(usuario)

  const onFinish = ({ agente, escritorio }) => {

    localStorage.setItem('agente', agente);
    localStorage.setItem('escritorio', escritorio);

    history.push('/escritorio')
  };

  const onFinishFailed = (errorInfo ) => {
    console.log('Failed:', errorInfo);
  };

  if( usuario.agente && usuario.escritorio ){
    return <Redirect to="/escritorio" />
  }

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
        name="agente"
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
