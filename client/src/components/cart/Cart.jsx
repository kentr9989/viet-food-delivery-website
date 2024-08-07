import React from 'react';
import classes from './cart.module.css';
import { useSelector } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import { removeProduct } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Cart = () => {
  const { products } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [remindLoginMessage, setRemindLoginMessage] = useState(false);

  let totalPrice = 0;
  products.map((product) => (totalPrice += product.quantity * product.price));
  const totalQuantity = products.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const handleRemoveProduct = (id) => {
    dispatch(removeProduct({ _id: id }));
  };

  const handleOrder = () => {
    if (products.length > 0) {
      if (user) {
        navigate('/order');
      } else {
        setRemindLoginMessage(true);
        setTimeout(() => {
          setRemindLoginMessage(false);
        },5000);
      }
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product._id} className={classes.product}>
                <div
                  onClick={() => handleRemoveProduct(product._id)}
                  className={classes.closeBtn}
                >
                  <AiOutlineClose />
                </div>
                <img
                  src={`http://localhost:4500/images/${product?.img}`}
                  className={classes.img}
                />
                <div className={classes.productData}>
                  <h3 className={classes.title}>{product?.title}</h3>
                  <div className={classes.productAndQuantity}>
                    <span className={classes.quantity}>
                      {product.quantity} x
                    </span>
                    <span className={classes.price}>
                      <span> $ </span>
                      {product.price}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1 className={classes.noProducts}>No products</h1>
          )}
        </div>
        <div className={classes.right}>
          <div className={classes.totalProductMsg}>
            Total products: {totalQuantity}
          </div>
          <div className={classes.subtotalCheckoutBtns}>
            <span className={classes.subtotal}>
              Subtotal: <span>${totalPrice}</span>
            </span>
            <span
              onClick={handleOrder}
              disabled={products.length === 0}
              className={classes.orderNowBtn}
            >
              Checkout
            </span>
          </div>
        </div>
        {remindLoginMessage && (
          <div className={classes.remindLoginMessage}>
            You need to login to checkout
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
