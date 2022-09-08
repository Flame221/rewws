import { Box, Button, Flex, Heading, HStack, Image, Spacer, Text, VStack } from '@chakra-ui/react'
import React, { useContext, useReducer } from 'react'
import { AiOutlineShoppingCart, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { CartContext, FavoriteContext } from '../../App';


const initialState = {
  isFavorited: false,
  isAddedToCart: false,
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case state:
    return { ...state, ...payload }

  case 'CART':
    return { ...state, isAddedToCart: !state.isAddedToCart }

  case 'FAVORITE':
    return { ...state, isFavorited: !state.isFavorited }

  default:
    return state
  }
}



const ProductCard = ({ product }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { favorite, setFavorite } = useContext(FavoriteContext)
  const { cart, setCart } = useContext(CartContext)

  return (
    <HStack p={5} spacing={5} borderWidth="1px"
    borderRadius="lg"
    w={{ sm: '100%', md: '100%' }}>
      <Box width={200}>
        <Image src={product.image} boxSize='200px'
            objectFit='contain'
            alt='Dan Abramov'/>
      </Box>
      <VStack alignItems={'start'}>
        <Heading  as='h2' size='xl'>{product.title}</Heading>
        <Text>{product.description}</Text>
      </VStack>
      <Spacer></Spacer>
      <Flex direction='column' justifyContent='stretch' gap={2} w='170px'>
        <Button onClick={() => {
          dispatch({type: 'CART'})
          if (!state.isAddedToCart) {
            setCart(e => [...e, product]);
          }
          else if (cart.includes(product)) {
            setCart(cart.filter(e => e !== product))
          }
          console.log(cart)
        }} leftIcon={<AiOutlineShoppingCart />}>
        {state.isAddedToCart ? 'Added' : 'Add'} to Cart</Button>
        <Button onClick={() => {
          dispatch({type: 'FAVORITE'})
          if (!state.isFavorited) {
            setFavorite(e => [...e, product]);
            console.log('add')
          }
          else if (favorite.includes(product)) {
            setFavorite(favorite.filter(e => e !== product))
          }
          console.log(favorite)
        }}
        variant={ state.isFavorited ? 'solid' : 'outline'}
        leftIcon={ state.isFavorited ? <AiFillHeart/> : <AiOutlineHeart />} colorScheme='pink'>{state.isFavorited ? 'Added' : 'Add to Favorite'}</Button>
      </Flex>
    </HStack>
  )
}

export default ProductCard