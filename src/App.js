import React from 'react';
import './App.css';
import Jets from './components/Jets';
import Cart from './components/Cart';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {useSelector} from 'react-redux';

function App() {
  const itemCount = useSelector((state) => state.itemCounter.value);
  return (

    <div className="App">
      <BrowserRouter>
      <nav className='navbar'>
        <Link to="/" className='link'>JetSmart</Link>
        <Link to="/cart" className='link'><AiOutlineShoppingCart /> {itemCount}</Link>
      </nav>
       <Routes>
         <Route path="/" element={<Jets />} />
         <Route path="/cart" element={<Cart />} />
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
