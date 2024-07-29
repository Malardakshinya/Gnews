
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Card from './Card';
import Home from './Home';
import Navbar from './Navbar';
import Next from './Next';

function App() {
  return (
    
    <Routes >
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/news' element={<Next/>}></Route>
    </Routes>
    
      

  
  );
}

export default App;
