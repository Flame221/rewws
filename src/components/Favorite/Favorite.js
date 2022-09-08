import React, { useContext } from 'react'
import { FavoriteContext } from '../../App'
import FavoriteCard from './FavoriteCard'

const Favorite = () => {
  const {favorite, setFavorite} = useContext(FavoriteContext)

  return (
    <div>
      <h1>Favorite</h1>
      {favorite.map((product, i) => {
        return <FavoriteCard 
          product={product}
          index={i}
        />
      })}

    </div>
  )
}

export default Favorite