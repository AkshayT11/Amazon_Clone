import React from 'react'
import ProductBadge from './ProductBadge'
import ProductRatings from './ProductRatings'

const ProductDetails = ({product,ratings}) => {
  return (
    <div className='mb-1'>
        <div className='text-xl xl:text-2xl font-semibold mb-1'>{product.title} </div>
        <div className='text-sm xl:text-base  mb-1'> <span className='text-blue-500'>{product.brand}</span>  </div>
        {ratings && 
        
        <div className='text-sm xl:text-base  mb-1'> <ProductRatings avgRating= {product.avgRating} ratings={product.ratings} /> </div>
        }
        <div className='text-sm xl:text-base font-bold mb-1'>{product.attribute} </div>
        <div > <ProductBadge badge={product.badge} /> </div>

    </div>
  )
}

export default ProductDetails