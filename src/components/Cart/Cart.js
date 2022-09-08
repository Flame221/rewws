import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { CartContext } from '../../App'

const Cart = () => {
  const { cart, setCart } = useContext(CartContext)

  return (
    <TableContainer>
  <Table variant='simple'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>Product</Th>
        <Th>Category</Th>
        <Th isNumeric>Price</Th>
      </Tr>
    </Thead>
    <Tbody>
    {
        cart.map((product) => (
          <Tr>
            <Td>{product.title}</Td>
            <Td>{product.category}</Td>
            <Td isNumeric>{product.price}</Td>
          </Tr>
        ))
      }
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To pay:</Th>
        <Th>into</Th>
        <Th isNumeric>{cart.reduce((i, e) => i + e.price, 0)}</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
  )
}

export default Cart