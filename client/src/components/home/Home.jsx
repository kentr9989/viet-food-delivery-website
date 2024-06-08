import React from 'react';
import classes from './home.module.css';
import Hero from '../hero/Hero';
import Foods from '../foods/Foods';
import Newsletter from '../newsletter/Newsletter';
import ill1 from '../../assets/male-delivery-guy-riding-scooter.svg';
import ill2 from '../../assets/delivery-location.svg';
import ill3 from '../../assets/deliveryman-with-pizza.svg';
const Home = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Hero />
        <div className={classes.delivery}>
          <div className={classes.titles}>
            <span className={classes.deliverySubtitle}>Delivery</span>
            <h2 className={classes.deliveryTitle}> Always on time for you </h2>
          </div>
          <div className={classes.deliveryInfos}>
            <div className={classes.deliveryInfo}>
              <img src={ill1} alt='' className={classes.firstImg} />
              <h3> Our delivery team is always on time</h3>
            </div>
            <div className={classes.deliveryInfo}>
              <img src={ill2} alt='' className={classes.secondImg} />
              <h3> We work very hard for your satisfaction</h3>
            </div>
            <div className={classes.deliveryInfo}>
              <img src={ill3} alt='' className={classes.thirdImg} />
              <h3>Our delivery driver is very friendly</h3>
            </div>
          </div>
        </div>
        <Foods />
        <Newsletter />
      </div>
    </div>
  );
};

export default Home;
