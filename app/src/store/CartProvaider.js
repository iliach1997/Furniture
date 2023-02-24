
import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultContect={
    items:[],
    img:[],
    totalAmount:0
}
const cartReducer=(state,actions)=>{
 if(actions.type==='ADD'){
    const updatedTotalAmount=state.totalAmount+actions.item.amount*actions.item.price;
    const exsitingCartItemIndex=state.items.findIndex((e)=>e.id===actions.item.id);
    const exsitingCartItem=state.items[exsitingCartItemIndex]
    let updeteItems;
    if(exsitingCartItem){
       const updeteItem={
        ...exsitingCartItem,
        amount:exsitingCartItem.amount+actions.item.amount
       } 
       updeteItems=[...state.items];
       updeteItems[exsitingCartItemIndex]=updeteItem
       console.log(updeteItems)
    }else{
        updeteItems=state.items.concat(actions.item)
    }

  return {items:updeteItems,totalAmount:updatedTotalAmount}
 }
 if(actions.type==="DEL"){
     const exsitingCartItemIndex=state.items.findIndex((e)=>e.id===actions.id)
     const exsitingCartItem=state.items[exsitingCartItemIndex];
     const updatedTotalAmount=state.totalAmount-exsitingCartItem.price;
     let updeteItems;
     if(exsitingCartItem.amount===1){
        updeteItems=state.items.filter(e=>e.id!==actions.id)
     }else{
      const updeteItem={
        ...exsitingCartItem,
        amount:exsitingCartItem.amount-1
      }
      updeteItems=[...state.items];
      updeteItems[exsitingCartItemIndex]=updeteItem
     }
     return {items:updeteItems,totalAmount:updatedTotalAmount}
 }

return defaultContect
  
}





const CartProvaider=(props)=>{
 const [cartState,dispatchCartAction]=useReducer(cartReducer,defaultContect)
 const addToItemCart=(item)=>{
   dispatchCartAction({type:'ADD',item:item})
 }

 const removetoItemCart=(id)=>{
dispatchCartAction({type:'DEL',id:id})
 }
  const cartContext={
    items:cartState.items,
    totalAmount:cartState.totalAmount,
    addItem:addToItemCart,
    removeItem:removetoItemCart
   }
   return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}
export default CartProvaider