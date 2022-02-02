import React from 'react'
import './Cart.css'

export const Cart = ({ cartItems, onAdd, onRemove }) => {
    const itemPrice=cartItems.reduce((x,item)=>item.qty*item.price+x,0)
    const taxcharges = itemPrice * .15
    const shippingCharge = itemPrice > 2000 ? 50 : 0
    const totalPrice = itemPrice + taxcharges + shippingCharge
    return (
        <div>
            <h1 className="head">Cart</h1>
            {cartItems.length == 0 ? "cart is empty" : ""}
            {
                cartItems.map((item) => {
                    return (<div>
                        {item.name}
                        <p>{item.qty}</p>
                        <button onClick={() => { onAdd(item) }} className="btn btn-outline-light">+</button>
                        <button onClick={() => { onRemove(item) }} className="btn btn-outline-light">-</button>
                        <p>${item.qty * item.price}</p>
                    </div>)
                })
            }
            {cartItems.length > 0 ? <>
                <h6>Tax charges</h6><div>{taxcharges.toFixed(3)}</div>
                <h6>Shipping charges</h6><div>{shippingCharge.toFixed(3)}</div>
                <h5>Total price</h5><div>{totalPrice.toFixed(3)}</div></> : <></>
            }
        </div>
    )
}
