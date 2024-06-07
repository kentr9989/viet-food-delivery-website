import React from 'react';
import classes from './navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={classes.container}>
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
          </ul>
        </div>
        <div className={classes.right}></div>
      </div>
    </div>
  );
};

export default Navbar;
