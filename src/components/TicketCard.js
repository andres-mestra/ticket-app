import * as React from 'react'
import { Card, Tag, Typography } from 'antd'

const { Title } = Typography

export const TicketCard = ({ agente, escritorio, numero }) => {
  return (
    <Card
      style={{ width: 300, marginTop: 16 }}
      actions={[
        <Tag color="volcano">{agente}</Tag>,
        <Tag color="magenta">Escritorio: {escritorio}</Tag>
      ]}
    >
      <Title>No. {numero}</Title>
    </Card>
  )
}
