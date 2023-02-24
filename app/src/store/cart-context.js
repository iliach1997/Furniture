
import React from "react";

const CartContext=React.createContext({
    items:[],
    totalAmaunt:0,
    viveItem:()=>{},
    addItem:()=>{},
    removeItem:()=>{}
})
export default CartContext