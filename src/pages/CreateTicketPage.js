import * as React from 'react'
import { Button, Col, Divider, Row, Typography } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'

const { Title, Text } = Typography

export const CreateTicketPage = () => {

  const handleNewTicket = () => {

  }


  return (
    <>
      <Row>
        <Col span={14} offset={6} align="center" >
          <Title level={3}>
            Presione el botón para generar un nuevo ticket
          </Title>

          <Button
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
            size="large"
            onClick={handleNewTicket}
          >
            Nuevo Ticket
          </Button>
        </Col>
      </Row>

      <Row style={{ marginTop: 100 }} >
        <Col
          span={14}
          offset={6}
          align="center"
        >
          <Text level={2}>
            Su número
          </Text>
          <Divider />
          <Text type="success" style={{ fontSize: '3em' }}>
            55
          </Text>
        </Col>
      </Row>
    </>
  )
}
