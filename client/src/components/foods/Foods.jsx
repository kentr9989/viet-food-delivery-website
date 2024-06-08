import React from 'react';
import classes from './foods.module.css';
import { foodTypes } from '../../data/data';
import { Link } from 'react-router-dom';

const Foods = () => {
  return (
    <section id='foods'>
      <div className={classes.wrapper}>
        <h5 className={classes.subtitle}> What we offer</h5>
        <h2 className={classes.title}> Best Viet food in Australia</h2>
        <div className={classes.foods}>
          {foodTypes.map((foodType) => (
            <Link to={`/foods/${foodType.linkName}`} key={foodType.id} className={classes.food}>
              <h4>{foodType.name}</h4>
              <div className={classes.imgContainer}>
                <img src={foodType.img}/>
              </div>
            </Link>
          )) }
          </div>
      </div>
    </section>
  );
};

export default Foods;
