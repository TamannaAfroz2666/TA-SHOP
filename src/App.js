
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Header from './layout/Header/Header';
import Main from './layout/Main/Main';
import Footer from './layout/Footer/Footer';
import CartMain from './Page/Cart/CartMain/CartMain';
import CheckoutMain from './Page/CheckOut/CheckOutMain/CheckoutMain';
import MainShowAll from './Page/ShowAllProducts/MainShowAll/MainShowAll';
import SinglePage from './Page/SinglePage/SinglePage';
// import WishListHeader from './Page/WishListHeader/WishListHeader';
import WishListMain from './Page/WishListHeader/WishListMain/WishListMain';
import HelpMain from './Page/Help/HelpMain/HelpMain';
import TruckOrder from './Page/TruckOrder/TruckOrder';
// import Contact from './Page/Contact/Contact';
import ContactMain from './Page/Contact/ContactMain/ContactMain';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={ <Main /> }/>
        <Route path='/cart' element={ <CartMain /> } />
        <Route path='/cartCheckOut' element={ <CheckoutMain />} />
        <Route path='/show-all-product' element={ <MainShowAll/> }/>
        <Route path='product/single-page-product' element={ <SinglePage/> }/>
        <Route path='pages/wishlist' element ={<WishListMain/>}/>
        <Route path='help' element ={<HelpMain/>}/>
        <Route path='my-account/orders' element ={ <TruckOrder/>}/>
        <Route path='contact' element={<ContactMain/>}/>


      </Routes>
     
      {/* <Main></Main> */}
      <Footer></Footer>
     
    
    </div>
  );
}

export default App;
