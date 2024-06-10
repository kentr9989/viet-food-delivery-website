import React from 'react';
import classes from './foodDetails.module.css';
import img from '../../assets/pho.jpg';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { addProduct } from '../../redux/cartSlice';

const FoodDetails = () => {
  const [foodDetails, setFoodDetails] = useState('');
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { token } = useSelector((state) => state.auth);
  const { products } = useSelector((state) => state.cart);

  console.log(products);
  console.log(token);
  useEffect(() => {
    const fetchFoodDetails = async () => {
      try {
        const res = await fetch(`http://localhost:4500/product/find/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        console.log(data);
        setFoodDetails(data);
      } catch (error) {
        console.error('Error fetching food details:', error);
      }
    };

    fetchFoodDetails();
  }, [id, token]);

  const changeQuantity = (command) => {
    if (command === 'dec') {
      if (quantity === 1) return;
      setQuantity((prev) => prev - 1);
    } else if (command === 'inc') {
      setQuantity((prev) => prev + 1);
    }
  };

  const addToCart = () => {
    dispatch(addProduct({ ...foodDetails, quantity }));
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <img src={`http://localhost:4500/images/${foodDetails?.img}`} />
        </div>
        <div className={classes.right}>
          <h2 className={classes.title}> {foodDetails?.title}</h2>
          <div className={classes.price}>
            Price <span>$</span> {foodDetails?.price}
          </div>
          <div className={classes.quantity}>
            <button
              disabled={quantity === 1}
              onClick={() => changeQuantity('dec')}
            >
              -
            </button>
            <span className={classes.quantityNumber}>{quantity}</span>
            <button onClick={() => changeQuantity('inc')}>+</button>
          </div>
          <div className={classes.category}>
            <h3>Category: </h3>
            <span className={classes.categoryName}>
              {foodDetails?.category}
            </span>
          </div>
          <div className={classes.productDesc}>
            <div>Description: </div>
            <p>
              {' '}
              {foodDetails?.desc?.length > 60
                ? `${foodDetails?.desc}`.slice(0, 60)
                : foodDetails?.desc}
            </p>
            <button onClick={addToCart} className={classes.addToCart}>
              Add To Cart <AiOutlineShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
