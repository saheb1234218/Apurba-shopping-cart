import React, { PureComponent } from 'react'
import Aos from'aos';
import 'aos/dist/aos.css';
import Fade from 'react-reveal/Fade'
import Tilt from 'react-parallax-tilt';


class Products extends PureComponent {
    
    render() {
        return (
            <div>
                <ul  className="products">
                    {this.props.products.map(product=>(
                       <Fade right >
                         <li key={product._id}>
                        <div  className="product">
                          
                                <a href={"#"+product._id}>
                                <Tilt>
                                    <img src={product.image} alt="product"></img>
                                    </Tilt>
                                    <p>{product.title}</p>
                                </a>
                               
                                <div className="product-price">
                                    <div>${product.price}</div>
                                    <button  onClick={()=>this.props.addToCart(product)} className="button primary">Add To Cart</button>
                                </div>
                            </div>
                           
                        </li>
                       
                        </Fade>
                       
                    ))}

                </ul>
            </div>
        )
    }
}

export default Products