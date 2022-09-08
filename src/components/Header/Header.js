import { useDisclosure } from '@chakra-ui/react'
import React from 'react'
import Appbar from './Appbar'
import DrawerExample from './Drawer'

const Header = () => {
  const disclosure = useDisclosure()

  return (
    <>
      <Appbar disclosure={disclosure}></Appbar>
      <DrawerExample disclosure={disclosure}></DrawerExample>
    </>
  )
}

export default Header