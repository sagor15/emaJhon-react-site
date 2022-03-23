import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Shop.css";

const Shop = () => {
    const [ products , setProducts] = useState([]);

    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);

    
    const handleAddToCart = (product) =>{
        // console.log(newCart);
        const newCart = [...cart,product];
        setCart(newCart);
        console.log(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
             {
                 products.map(product => <Product 
                    product={product}
                    key={product.id}
                    handleAddToCart ={handleAddToCart}
                    ></Product>)
             }
            </div>
            <div className="cart-container">
                    <h3>Order Summary</h3>
                    <p>Selected Items : {cart.length}</p>
                    <p className='para'>Category : {}</p>
                 <p>{}</p>
            <p><small>Price : ${}</small></p>
            <p><small>Seller : {}</small></p>
            {/* <p><small>Ratings : {ratings}</small></p> */}
            <p><small>Stock : {}</small></p>
                </div>
        </div>
    );
};

export default Shop;