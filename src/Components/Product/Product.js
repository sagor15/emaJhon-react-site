import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Product.css"

const Product = (props) => {
    // console.log(props.product);
    const {category,img,name,price,ratings,seller,stock} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='para'>Category : {category}</p>
            <p>{name}</p>
            <p><small>Price : ${price}</small></p>
            <p><small>Seller : {seller}</small></p>
            {/* <p><small>Ratings : {ratings}</small></p> */}
            <p><small>Stock : {stock}</small></p>
            </div>
          <button onClick={()=>props.handleAddToCart(props.product)} className='btn'>
              <p className='btn-text'>Add To Cart</p>
              <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          </button>
        </div>
    );
};

export default Product;