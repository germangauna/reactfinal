
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';


function App() {
  return (

    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' elememt={<ItemListContainer />} />
          <Route path='/categoria/:categoriaId' elememt={<ItemListContainer />} />
          <Route path='/cart' elememt={<Cart/>} />
          <Route path='/detalle/:detalleId' elememt={<ItemDetailContainer/> } />
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
