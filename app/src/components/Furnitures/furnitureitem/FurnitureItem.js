
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import Slider from './furnitureSlide/Slider';
import MealItemForm from './MealItemForm';
import  './FurnicherItem.css';
const FurnitureItem=(props)=>{
 const ctx=useContext(CartContext);
 const addToCartHendler=(amount)=>{
     ctx.addItem({
    id:props.id,
    name:props.name,
    amount:amount,
    price:props.price,
    img:props.img
 })}

 
    return(
        <div className='wrapper'>
        <div className='card'>
       <div className='img'><Slider img={props.img}/></div> 
       
        <div className='info'>
        <h1>{props.name}</h1>
        <h2>{props.description}</h2>
        <h2>Price:{props.price}$</h2>
         <div><MealItemForm onAddToCart={addToCartHendler}/></div> 
      </div> 
       </div>
       </div>

    )
}
export default FurnitureItem