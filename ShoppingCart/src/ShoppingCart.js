
import React, { useReducer } from 'react';

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
    case 'REMOVE_ITEM':
      return state.filter((item) => item.id !== action.payload.id);
    case 'UPDATE_QUANTITY':
      return state.map((item) =>
        item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
      );
    default:
      return state;
  }
};

const ShoppingCart = () => {

  const [cart, dispatch] = useReducer(cartReducer, []);

  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 15 },
    { id: 3, name: 'Product 3', price: 20 },
  ];

  const addItemToCart = (product) => {
    dispatch({ type: 'ADD_ITEM', payload: { ...product, quantity: 1 } });
  };

  const removeItemFromCart = (item) => {
    dispatch({ type: 'REMOVE_ITEM', payload: item });
  };

  const updateQuantity = (item, newQuantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { ...item, quantity: newQuantity } });
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        <h2>Available Products</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}{' '}
              <button onClick={() => addItemToCart(product)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} - Quantity: {item.quantity}{' '}
              <button onClick={() => removeItemFromCart(item)}>Remove</button>{' '}
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantity(item, parseInt(e.target.value, 10))}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShoppingCart;
