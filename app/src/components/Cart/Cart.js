import { useContext } from 'react'
import CartContext from '../../store/cart-context'
import Modal from '../UI/Card/Modal'
import CartItem from './CartItem'
import classes from './Cart.module.css'


const Cart=(props)=>{
const ctx=useContext(CartContext)
const totalAmount=`$${ctx.totalAmount.toFixed(2)}`;
const hesItems=ctx.items.length>0;
const addItemHendler=(item)=>{
    ctx.addItem({...item,amount:1})
}
const cartItemRemove=(id)=>{
    ctx.removeItem(id)
}
const cartItems=(
<ul className={classes['cart-items']}>
{ctx.items.map((item)=>(
    <CartItem 
    key={item.id}
    name={item.name}
    discription={item.discription}
    amount={item.amount}
    price={item.price}
    img={item.img[0]}
    onAdd={addItemHendler.bind(null,item)}
     onRemove={cartItemRemove.bind(null,item.id)}
    />
))}
</ul>)



    return<Modal onClose={props.onClose}>
        {cartItems}
        <div>
            <span className={classes.total}>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
         <button onClick={props.onClose} className={classes['button--alt']}>Close</button>
         {hesItems&&<button className={classes.button}>Order</button>}
           </div> 
        </Modal>

}
export default Cart