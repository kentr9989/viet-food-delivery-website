import React from 'react';
import classes from './navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/authSlice';
import { useSelector } from 'react-redux';
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
  const [isScroll, setIsScrolled] = useState(false);
  // const [quantityOrder, setQuantityOrder]
  const { products } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(products);
  // Calculate the total quantity of products in the cart
  const totalQuantity = products.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const handleLogout = () => {
    dispatch(logout());
    navigate('/signin');
  };

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={`${classes.container} ${isScroll && classes.scrolled}`}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Link to='/' className={classes.title}>
            Viet food best delivery
          </Link>
        </div>
        <div className={classes.center}>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <a href='#'>Home</a>
            </li>
            <li className={classes.listItem}>
              <a href='#contacts'>Contacts</a>
            </li>
            <li className={classes.listItem}>
              <a href='#foods'>Foods</a>
            </li>
            <li className={classes.listItem}>
              <a href='#faq'>FAQ</a>
            </li>
            <li className={classes.listItem}>
              <Link to='/create'>Create</Link>
            </li>
          </ul>
        </div>
        <div className={classes.right}>
          <AiOutlineUser className={classes.userIcon} />
          <Link to='/cart' className={classes.cartContainer}>
            <AiOutlineShoppingCart className={classes.cartIcon} />
            <div className={classes.cartQuantity}>{totalQuantity}</div>
          </Link>
          <button className={classes.cartLogout} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
