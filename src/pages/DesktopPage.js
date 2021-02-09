import React from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import { Button, Col, Divider, Row, Typography } from 'antd'
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons'
import { useHideMenu } from '../hooks/useHideMenu'
import { getUserStorage } from '../helpers/getUserStorage'

const { Title, Text } = Typography

export const DesktopPage = () => {

  useHideMenu(false);
  const [usuario] = React.useState(getUserStorage())
  const history = useHistory()


  const handleSalir = () => {
    localStorage.clear()
    history.replace('/ingresar')
  }

  const handleNextTicket = () => {

  }
  

  if( !usuario.agente || !usuario.escritorio ){
    return <Redirect to="/registro" />
  }

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2} >{ usuario.agente }</Title>
          <Text>Usted esta trabajando en el escritorio: </Text>
          <Text type="success" style={{ fontSize: "1.2em" }} >{ usuario.escritorio }</Text>
        </Col>

        <Col span={4} align="right" >
          <Button
            shape="round"
            type="danger"
            onClick={handleSalir}
          >
            <CloseCircleOutlined />
            Salir
          </Button>
        </Col>
      </Row>

      <Divider />

      <Row>
        <Col>
          <Text>Esta atendiendo el ticket numero:  </Text>
          <Text
            style={{ fontSize: '1.5em' }}
            type="danger"
          >55</Text>
        </Col>
      </Row>

      <Row>
        <Col offset={18} span={6} align="right">
          <Button
            onClick={handleNextTicket}
            shape="round"
            type="primary"
          >
            Siguiente
            <RightOutlined />
          </Button>
        </Col>
      </Row>
    </>
  )
}
