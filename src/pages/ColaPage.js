import * as  React from 'react'
import { Col, Row, Typography, List, Divider } from 'antd'
import { useHideMenu } from '../hooks/useHideMenu';
import { TicketCard } from '../components/TicketCard';
import { SocketContext } from '../context/SocketContext';
import { MetaTicket } from '../components/MetaTicket';
import { getUltimos } from '../helpers/getUltimos';

const { Title } = Typography


export const ColaPage = () => {

  useHideMenu(true);

  const { socket } = React.useContext(SocketContext)
  const [tickets, setTickets] = React.useState([])

  React.useEffect(() => {
    socket.on('ticket-asignado',(asignados) => {
      setTickets(asignados)
    })
    return () => {
      socket.off('ticket-asignado')
    }
  },[socket])

  React.useEffect(() => {
    getUltimos().then( setTickets )
  },[])

  return (
    <>
      <Title level={1}>Atendiendo al cliente</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={tickets.slice(0, 3)}
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
            dataSource={tickets.slice(3)}
            renderItem={item => (
              <List.Item.Meta
                title={`Ticket No. ${item.numero}`}
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
