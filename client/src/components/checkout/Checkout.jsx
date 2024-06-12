import React from 'react';
import classes from './checkout.module.css';
import { useSelector } from 'react-redux';
import deliverydriver from '../../assets/male-delivery-guy-riding-scooter.svg';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { emptyCart } from '../../redux/cartSlice';

const Checkout = () => {
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length > 0) {
      dispatch(emptyCart());
    }
  }, [dispatch, products]);

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
        <span className={classes.totalPrice}> Order reference #{totalPrice}</span>
      </div>
    </div>
  );
};

export default Checkout;
