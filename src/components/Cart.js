import React, { PureComponent } from 'react'
import Slide from 'react-reveal';
class Cart extends PureComponent {
   
    render() {
        const {cartItems}=this.props;
        return (
            <div>
                {cartItems.length===0?(
                    <div className="cart cart-header">Cart is empty</div>
                ):(
                    <div className="cart cart-header">You have {cartItems.length} in the cart{" "}</div>
                )}
                <div className="cart">
                    <ul className="cart-items">
                        {cartItems.map(item=>(
                            <Slide left>
                            <li key={item._id}>
                                <div>
                                    <img src={item.image} alt={item.title}/>
                                </div>
                                <div>{item.title}</div>
                                <div className="right">
                                    ${item.price}x{item.count}{" "} 
                                <button className="button" onClick={()=>this.props.removeFromCart(item)}>Remove</button></div>
                               
                            </li>
                            </Slide>
                        ))}
                    </ul>
                    

                </div>
                <div className="cart">
                    <div className="total">
                        <div>
                            Total:{" "}${cartItems.reduce((a,c)=>a+c.price*c.count,0)}
                        </div>
                        <button className="button primary">Proceed</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart