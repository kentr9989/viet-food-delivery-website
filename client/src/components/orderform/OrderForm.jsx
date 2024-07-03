import React from 'react';
import classes from './orderform.module.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const OrderForm = () => {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const { products } = useSelector((state) => state.cart);
  const { user, token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let orderAddress = address + ' ' + city + ' ' + postalCode + ' ' + country;
    const order = {
      userId: user._id,
      products: products.map((product) => ({
        productId: product._id,
        quantity: product.quantity,
      })),
      amount: products.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      ),
      address: orderAddress,
    };
    console.log(order);

    try {
      const response = await fetch('http://localhost:4500/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(order),
      });
      //   let data = await response.json();
      //   console.log(data);

      if (!response.ok) {
        throw new Error('Failed to create order');
      }

      setLoading(false);
      navigate('/checkout');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <h2> Delivery Information </h2>
          <input
            type='text'
            placeholder='Address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <input
            type='text'
            placeholder='City'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <input
            type='text'
            placeholder='Postal Code'
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          />
          <input
            type='text'
            placeholder='Country'
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
          <button type='submit' disabled={loading}>
            Place order
          </button>
          {error && <div className={classes.error}>{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
