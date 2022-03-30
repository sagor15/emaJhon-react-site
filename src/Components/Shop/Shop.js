import React, { useEffect, useState } from 'react';
import {addToDb, storeCart} from "../../utilities/fakedb";
import Cart from '../Cart/Cart';
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

    useEffect(()=>{
        const getStoredCart = storeCart();
        console.log(getStoredCart);
    },[])
    
    const handleAddToCart = (product) =>{
        // console.log(newCart);
        const newCart = [...cart,product];
        setCart(newCart);
        // console.log(newCart);
        addToDb(product.id);

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
                    <Cart cart={cart}></Cart>
                    
                </div>
        </div>
    );
};

export default Shop;