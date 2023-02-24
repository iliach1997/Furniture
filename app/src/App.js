
import { useState } from 'react';
import CartProvaider from './store/CartProvaider';
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import Furniture from './components/Furnitures/Furniture';
import Footer from './components/footer/Footer';
import './App.css';
function App() {
  const [open,setOpen]=useState(false);
  const showCartHendler=()=>{
    setOpen(true)
  }
  const closeCartHendler=()=>{
    setOpen(false)
  }
  return (
  

   <CartProvaider>
    {open&&<Cart onClose={closeCartHendler}/>}
   <Header onOpen={showCartHendler}/>
   <main> 
    <Furniture></Furniture>
    <Footer/>
   </main>
   
   </CartProvaider>
    
  );
}

export default App;
