import React, { useState, useEffect } from 'react';
import ShoppingCart from './ShoppingCart';

const Product = () => {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const requestData = {
            limit: 100,
            page: 0,
            search: '',
        };

        fetch('http://3.7.252.58:4001/product/getAllProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        })
            .then(response => response.json())
            .then((data) => {
                setProducts(data)
                console.log(data)
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        alert("product added to the cart")
    };

    const removeFromCart = () => {
        const newCart = [...cart];
        newCart.pop();
        setCart(newCart);
        alert("product has been removed from the cart")
    };

    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '', color: 'black', fontWeight: 0 }}>Product List</h1>
            <div className="product-list" style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', }}>
                {products.map((product, index) => {
                    return (
                        <div style={{ display: 'flex' }} key={index}>
                            <div className="product" style={{ border: '1px solid gray', width: '220px', borderRadius: '25px', margin: '10px', padding: '30px 15px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <img height='60px' width='60px' src={product.imageUrl} alt='product loading...' style={{ margin: '15px' }} />
                                <div style={{ margin: '5px' }}>Product: {product.name}</div>
                                <div style={{ margin: '5px' }}>Price: ${product.price}</div>
                                <button onClick={() => addToCart(product)}>Add to Cart</button>
                            </div>
                        </div>
                    )
                })}
                <div style={{ width: '50%', borderBottom: '1px solid gray', display: 'flex', justifyContent: 'center', margin: '30px 20px' }}></div>

            </div>
            <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
        </div>
    );
};

export default Product;
