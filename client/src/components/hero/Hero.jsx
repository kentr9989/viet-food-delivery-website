import React from 'react';
import classes from './hero.module.css';
import { AiOutlineArrowDown } from 'react-icons/ai';
import pho from '../../assets/pho.jpg';

const Hero = () => {
  return (
    <section style={{height: '150vh'}} id='home' className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h2 className={classes.title}>
            {' '}
            Do you want some delicious viet food ?
          </h2>
          <p className={classes.firstMsg}>
            But go out to eat <span> take alot of time...</span>
          </p>
          <p className={classes.secondMsg}>
            Lets order some declious <span>pho </span> <br /> and
            <span> banh mi </span>
          </p>
          {/* <p className={classes.desc}>
            {' '}
            Our company always put the customer satisfaction ahead.
          </p> */}
          <div className={classes.buttons}>
            <button className={classes.buttonOrder}>Lets order now !!</button>
            <button className={classes.buttonSee}>
              <a href='#foods'>
                See our menu avaiable <AiOutlineArrowDown />
              </a>
            </button>
          </div>
        </div>
        <div className={classes.right}>
          <img src={pho} alt='' className={classes.phoImg} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
