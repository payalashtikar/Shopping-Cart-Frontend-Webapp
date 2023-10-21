import React from 'react';

const ShoppingCart = ({ cart, removeFromCart }) => {
    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price, 0);
    };

    return (
        <div>
            <h1 style={{ fontSize: '', color: 'black', fontWeight: 0 }}>Shopping Cart</h1>
            <p>Total Price: <strong style={{ color: 'red' }}>${calculateTotalPrice()}</strong></p>
            <p>Product : {cart.length}</p>
            <div className="cart" style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {cart.map((item, index) => {
                    return (
                        <div style={{ display: 'flex' }} key={index}>
                            <div className="cart-item" style={{ border: '1px solid gray', width: '220px', borderRadius: '25px', margin: '10px', padding: '20px 15px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <img width='60px' height='60px' src={item.imageUrl} alt='loading..' style={{ margin: '15px' }} />
                                <div style={{ margin: '5px' }}>{item.name}</div>
                                <div style={{ margin: '5px' }}>${item.price}</div>
                                <button onClick={removeFromCart}>Remove from Cart</button>
                            </div>
                        </div>
                    )
                })}
            </div >
        </div>
    );
};

export default ShoppingCart;
