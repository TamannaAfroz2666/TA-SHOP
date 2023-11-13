
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Header from './layout/Header/Header';
import Main from './layout/Main/Main';
import Footer from './layout/Footer/Footer';
import CartMain from './Page/Cart/CartMain/CartMain';
import CheckoutMain from './Page/CheckOut/CheckOutMain/CheckoutMain';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={ <Main /> }/>
        <Route path='/cart' element={ <CartMain /> } />
        <Route path='/cartCheckOut' element={ <CheckoutMain />} />

      </Routes>
     
      {/* <Main></Main> */}
      <Footer></Footer>
     
    
    </div>
  );
}

export default App;
