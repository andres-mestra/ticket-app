import React from 'react'
import { Button, Col, Divider, Row, Typography } from 'antd'
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons'
import { useHideMenu } from '../hooks/useHideMenu'

const { Title, Text } = Typography

export const DesktopPage = () => {

  useHideMenu(false);

  const handleSalir = () => {

  }

  const handleNextTicket = () => {
    
  }
  


  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2} >Andres</Title>
          <Text>Usted esta trabajando en el escritorio: </Text>
          <Text type="success" style={{ fontSize: "1.2em" }} >5</Text>
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
