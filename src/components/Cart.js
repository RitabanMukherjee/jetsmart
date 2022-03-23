import React, { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {motion} from 'framer-motion'
import {clearList, removeItem, clearItems} from '../features/individualCounterSlice'
import { jets } from '../data'
import { clearCounter, removeAllItems, removeOneItem } from '../features/itemCounterSlice'

const Cart = () => {
  const planes = useSelector((state) => state.individualCounter.value)
  const items = useSelector((state) => state.itemCounter.value)
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const results = planes.filter(element => {
    return element !== undefined && element.quantity !== 0;
  })

  useEffect(() => {
    if(items > 0){
      setShow(true);
    }
    else{
      setShow(false);
    }
  }, [items])
 
  let new_cost = 0;

  return (
    <div className='cart'>
      <h1>Your Items: </h1>
    {
      results.map(({id, quantity}) => {
        new_cost +=  ((jets[id].price)*quantity);
     return (
        <div className='cart-card'>
        <h1>{jets[id].title}</h1> 
        <h3>$ {(jets[id].price).toLocaleString('en-US')}</h3>  
        <h2>Quantity: {quantity}</h2>
        <h2>Price: $ {((jets[id].price)*quantity).toLocaleString('en-US')}</h2>
        <div className='button-div'>
        <button className='btn' onClick={() => {dispatch(removeItem(id)); dispatch(removeOneItem())}}>Remove 1 Item</button>
        <div className='gap-div' ></div>
        <button className='btn' onClick={() => {dispatch(clearItems(id)); dispatch(removeAllItems(quantity))}}>Delete</button>
        </div>
          </div>
     );
      })
    }
  

    {
      show? <div className='cart-footer'> 
        <h1>Your Total Is: $  {new_cost.toLocaleString('en-US')} </h1>
      <button className='btn' type='button' onClick={() => {dispatch(clearList()); dispatch(clearCounter())}}>Clear Cart</button>
      </div>
      : <h1>Your Cart is empty</h1>
    }

    </div>
  )
}

export default Cart