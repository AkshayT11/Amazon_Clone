import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {ProductDetails} from "./"
import { GB_CURRENCY } from '../utils/constants'
import { removeFromCart } from '../redux/CartSlice'

const Checkout = () => {
  const products = useSelector((state)=> state.cart.products )
  const itemsNumber = useSelector((state)=> state.cart.productsNumber )
  const Subtotal = useSelector((state)=> state.cart.products.reduce((Subtotal,product)=> Subtotal + (product.price * product.quantity) ,0) )

  const dispach = useDispatch();

  return (
    <div className='h-screen bg-amazonclone-background'>
      <div className='min-w-[1000px] max-w-[1500px] m-auto pt-8 '> 
        <div className='grid grid-cols-8 gap-10 '>
          {/* Products */}
          <div className="col-span-6 bg-white ">
            <div className="text-2xl xl:text-3xl m-4 ">Shopping Cart</div>
            {
              products.map(product => {
                 return(
                  <div key={product.id}>
                      <div className='grid-cols-12 grid divide-y divide-gray-400  mr-4'>
                        <div className="col-span-10 grid grid-cols-8 divide-y divide-gray-400">
                          <div className="col-span-2">
                              <Link to={`/product/${product.id}`}>
                                  <img className='p-4 m-auto' src= {product.image_small} />
                              </Link>
                          </div>
                          <div className="col-span-6">
                              <div className='font-medium text-black mt-2'>
                              <Link to={`/product/${product.id}`}>
                                  <ProductDetails product={product} ratings={false} />
                              </Link>
                              </div>  
                              <div>
                                <button 
                                className='text-sm xl:text-base font-semibold text-blue-400 mt-2 mb-1 '
                                 onClick={()=> dispach(removeFromCart(product.id)) } >Delete</button>
                              </div>
                              <div className='grid grid-cols-3 w-20 text-center '>
                                <div className='text-xl xl:text-2xl bg-gray-400 rounded'>-</div>
                                <div className='text-lg xl:text-xl bg-gray-200'>{product.quantity} </div>
                                <div className='text-xl xl:text-2xl bg-gray-400 rounded'>+</div>
                              </div>
                          </div>
                        </div>
                        <div className="col-span-2">
                          <div className='text-lg xl:text-xl mt-2 mr-4 font-semibold'>{GB_CURRENCY.format(product.price)} </div>
                        </div>
                      </div>
                  </div>
                 )
              } ) 
            }
              <div className='text-lg xl:text-xl text-right mb-4 mr-4'>SubTotal ({itemsNumber} items): <span className='font-semibold'> {GB_CURRENCY.format(Subtotal)} </span> </div>

          </div>
          {/* Checkout */}
          <div className='col-span-2 bg-white rounded h-[250px] p-7 '>
            <div className='text-xs xl:text-sm text-green-800 mb-2'>Your order qualifies for
             <span className='font-bold'>Free Delivery</span> .Delivery Details </div>
             <div className='text-base xl:text-lg text-right mb-4'>SubTotal ({itemsNumber} items): <span className='font-semibold'> {GB_CURRENCY.format(Subtotal)} </span> </div>
             <button className="bg-yellow-600 w-full p-3 text-xs xl:text-lg font-semibold mt-5  rounded-md hover:bg-yellow-500">Proceed To Checkout</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Checkout