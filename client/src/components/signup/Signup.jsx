import React from 'react';
import classes from './signup.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import img from '../../assets/womaneating.jpg';
import { register } from '../../redux/authSlice';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:4500/auth/register`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();
      console.log(data);
      dispatch(register(data));
      navigate('/');
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <img src={img} className={classes.leftImage} />
        </div>
        <div className={classes.right}>
          <h2 className={classes.title}>Sign up</h2>
          <form onSubmit={handleSignup} className={classes.signUpForm}>
            <input
              type='text'
              placeholder='Username'
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type='email'
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              placeholder='Pasword'
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className={classes.submitBtn}>Register</button>
            <p>
              Already have account ? <Link to='/signin'>Login</Link>
            </p>
            {error && (
              <div className={classes.errorMsg}>Please check credential</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
