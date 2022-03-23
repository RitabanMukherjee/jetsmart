import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import '../App.css';
import {jets} from '../data.js';
import {useDispatch} from 'react-redux';
import {addItem} from '../features/individualCounterSlice';
import { setCounter } from '../features/itemCounterSlice'

function Jets() {

  const containerVariant = {
    initial: {
      opacity: 0,
      border: '1px solid white'
    },
    animate: {
      opacity: 1,
      backgroundColor: '#003559',
      color: 'white',
      borderRadius: '0.5rem',
      transition: {
        duration: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.2,
        
      }
    }
  }
  
  const dispatch = useDispatch();

  return (
    <div style={{ backgroundColor: '#061a40',  marginTop: 'none'}} className='main-page'>

    <div className="App">

  

{
  jets.map((jet) => {
    const {id, img, title, author, link, price} = jet;
    return (
      <motion.div key={id} className='jet-div'
      variants={containerVariant}
      initial='initial'
      animate='animate'
      whileHover={{transform:'translateX(0px) translateY(0px) translateZ(-100px)', backgroundColor: 'lightblue', color: 'black', boxShadow: 'none'}}
      whileTap={{ boxShadow: 'none'}}
      > 
      <iframe src={img} alt='' className='frame'
      frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
      />
      <h1>{title}</h1>
      <h3>{author}</h3>
      <h2>$ {(price).toLocaleString('en-US')}</h2>
      <button className='btn' onClick={() => window.open(link)}>More Info</button>
      <div className='gap-div-2' ></div>
      <button className='btn' type='button' onClick={() => {dispatch(addItem(id)); dispatch(setCounter())}}>Add to Cart</button>
    </motion.div>
  )
})
}


</div>
<div style={{height: '4rem',  backgroundColor: '#061a40'}}>
  <h3 style={{color: 'white'}}>Ritaban Mukherjee 2022</h3>
</div>
</div>
)
}

export default Jets;
