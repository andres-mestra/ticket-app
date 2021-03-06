import React from 'react'
import { Divider, Typography } from 'antd'
import { useHideMenu } from '../hooks/useHideMenu'
import { FormEntry } from '../components/FormEntry'


const { Title, Text } = Typography


export const EntryPage = () => {

  useHideMenu(false);

  return (
    <>
      <Title level={2}>Ingresar</Title>
      <Text> Ingrese su nombre y su numero de escritorio.</Text>
      <Divider></Divider>
      <FormEntry />
    </>
  )
}
