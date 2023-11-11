
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Header from './layout/Header/Header';
import Main from './layout/Main/Main';
import Footer from './layout/Footer/Footer';
import CartMain from './Page/Cart/CartMain/CartMain';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={ <Main /> }/>
        <Route path='/cart' element={ <CartMain /> } />

      </Routes>
     
      {/* <Main></Main> */}
      <Footer></Footer>
     
    
    </div>
  );
}

export default App;
