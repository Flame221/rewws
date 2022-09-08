import { VStack, Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

const Products = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((products) => setData(products))
  }, [])

  return (
    <VStack m={5} gap={5}>
        {data.map((product, i) => {
          return <ProductCard
            product={product}
            index={i}
            
            />
         } )}
    </VStack>
  )
}

export default Products