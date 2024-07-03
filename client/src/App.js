import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Signup from './components/signup/Signup';
import Signin from './components/signin/SignIn';
import Create from './components/create/Create';
import FoodDetails from './components/foodDetails/FoodDetails';
import FoodCatalog from './components/foodCatalog/FoodCatalog';
import Cart from './components/cart/Cart';
import OrderForm from './components/orderform/OrderForm';
import Checkout from './components/checkout/Checkout';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  // for screen to display
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/create' element={<Create />} />
        <Route path='/food/:id' element={<FoodDetails />} />
        <Route path='/foods/:id' element={<FoodCatalog />} />
        <Route path='/order' element={<OrderForm />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
