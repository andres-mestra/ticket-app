import * as  React from 'react'
import { Tag, Typography } from 'antd'

const { Text } = Typography

export const MetaTicket = ({ agente, escritorio }) => {
  return (
    <>
      <Text type="secondary">En el escritorio: </Text>
      <Tag color="magenta">{escritorio}</Tag>
      <Text type="secondary">Agente: </Text>
      <Tag color="volcano">{agente}</Tag>
    </>
  )
}
