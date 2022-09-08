import { Box, Button, Flex, Heading, HStack, Image, Spacer, Text, VStack } from '@chakra-ui/react'
import React, { useContext, useReducer } from 'react'
import { AiOutlineShoppingCart, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FavoriteContext } from '../../App';

const FavoriteCard = ({ product }) => {

  
  return (
    <HStack p={5} spacing={5} borderWidth="1px"
    borderRadius="lg"
    w={{ sm: '100%', md: '100%' }}>
      <Box>
        <Image src={product.image} boxSize='200px'
            objectFit='contain'
            alt='Dan Abramov' />
      </Box>
      <VStack alignItems={'start'}>
        <Heading  as='h2' size='xl'>{product.title}</Heading>
        <Text>{product.description}</Text>
      </VStack>
      <Spacer></Spacer>
      <Flex direction='column' justifyContent='stretch' gap={2} w='170px'>
        <Button leftIcon={<AiOutlineShoppingCart />}>Add to Cart</Button>
        <Button 
        variant='solid'
        leftIcon=<AiOutlineHeart /> colorScheme='pink'>Add to Favorite</Button>
      </Flex>
    </HStack>
  )
}

export default FavoriteCard