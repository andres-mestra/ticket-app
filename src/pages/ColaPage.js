import * as  React from 'react'
import { Col, Row, Typography, List, Divider } from 'antd'
import { useHideMenu } from '../hooks/useHideMenu';
import { TicketCard } from '../components/TicketCard';
import { MetaTicket } from '../components/MetaTicket';

const { Title } = Typography

const data = [
  {
    ticketNo: 33,
    escritorio: 3,
    agente: 'Fernando Herrera'
  },
  {
    ticketNo: 34,
    escritorio: 4,
    agente: 'Melissa Flores'
  },
  {
    ticketNo: 35,
    escritorio: 5,
    agente: 'Carlos Castro'
  },
  {
    ticketNo: 36,
    escritorio: 3,
    agente: 'Fernando Herrera'
  },
  {
    ticketNo: 37,
    escritorio: 3,
    agente: 'Fernando Herrera'
  },
  {
    ticketNo: 38,
    escritorio: 2,
    agente: 'Melissa Flores'
  },
  {
    ticketNo: 39,
    escritorio: 5,
    agente: 'Carlos Castro'
  },
];



export const ColaPage = () => {

  useHideMenu(true);

  return (
    <>
      <Title level={1}>Atendiendo al cliente</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={data.slice(0, 3)}
            renderItem={(item) => (
              <List.Item>
                <TicketCard {...item} />
              </List.Item>
            )}
          />
        </Col>

        <Col span={12}>
          <Divider>Historial</Divider>
          <List
            dataSource={data.slice(3)}
            renderItem={item => (
              <List.Item.Meta
                title={`Ticket No. ${item.ticketNo}`}
                description={
                  <MetaTicket {...item} />
                }
              />
            )}
          />
        </Col>
      </Row>
    </>
  )
}
