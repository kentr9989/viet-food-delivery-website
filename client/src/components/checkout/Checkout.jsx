import React from 'react';
import classes from './checkout.module.css';
import { useSelector } from 'react-redux';
import deliverydriver from '../../assets/male-delivery-guy-riding-scooter.svg';

const Checkout = () => {
  const { products } = useSelector((state) => state.cart);

  let totalPrice = 0;
  products.map((product) => (totalPrice += product.quantity * product.price));
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <img
          src={deliverydriver}
          alt='Delivery driver'
          className={classes.deliveryDriverImg}
        />

        <h2> Your order is placed</h2>
        <p>
          Our delivery driver will deliver it in
          <span className={classes.deliveryTime}> 30 minutes - 1 hour</span>
        </p>
        <span className={classes.totalPrice}> Total Price : ${totalPrice}</span>
      </div>
    </div>
  );
};

export default Checkout;
