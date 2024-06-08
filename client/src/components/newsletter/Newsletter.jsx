import React from 'react';
import classes from './newsletter.module.css';
import { AiOutlineSend } from 'react-icons/ai';
import newsletterIllustration from '../../assets/get-newsletter-updates.svg';
const Newsletter = () => {
  return (
    <section id='contacts' className={classes.container}>
      <div className={classes.wrapper}>
        <h4 className={classes.subtitle}>Want to get our latest offer ?</h4>
        <h2 className={classes.title}> Newsletter</h2>
        <div className={classes.inputContainer}>
          <input type='text' placeholder='Enter your email :)' />
          <AiOutlineSend className={classes.sendIcon} />
        </div>
        <img
          src={newsletterIllustration}
          className={classes.illustration}
          alt=''
        />
      </div>
    </section>
  );
};

export default Newsletter;
