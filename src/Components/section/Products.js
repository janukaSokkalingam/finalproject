import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from './Context'
import '../css/Products.css'
import { Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';

export class Products extends Component {

    static contextType = DataContext;

    render() {
        const {products,addCart} = this.context;
        return (
            <div id="product">
               {
                   products.map(product =>(
                       <div className="card" key={product._id}>
                           <Link to={`/product/${product._id}`}>
                               <img src={product.src} alt=""/>
                           </Link>
                           <div className="content">
                               <h3>
                                   <Link to={`/product/${product._id}`}>{product.title}</Link>
                               </h3>
                               <span>${product.price}</span>
                               <p>{product.description}</p>
                               <Button href="" onClick={()=>addCart(product._id)}>Add to cart</Button>

                               <Button style={{width:"290px", backgroundColor:"purple"}} href="/buy">Buy now</Button>
                           </div>
                       </div>
                   ))
               }
            </div>
        )
    }
}

export default Products
