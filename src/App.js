
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './layout/Header/Header';
import Main from './layout/Main/Main';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={ <Main /> }/>

      </Routes>
     
      {/* <Main></Main> */}
     
    
    </div>
  );
}

export default App;
