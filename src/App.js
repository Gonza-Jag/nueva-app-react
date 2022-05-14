import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Main from './components/Main';
import Footer from './components/Footer';
import GuitarsContainer from './components/GuitarsContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GuitarDetails from './components/GuitarDetails';
import CarritoProvider, { CartContext } from './Data/context/CarritoContext';
import ListaCarrito from './components/ListaCarrito';
import ItemCount from './components/ItemCount';
import { carritoContext } from './Data/context/CarritoContext';





function App() {

const styles = {
  header: 'text-3xl font-bold underline text-amber-600'
}

  return (
    
  <div>
    <BrowserRouter>
    
<carritoContext></carritoContext>
    
    <NavBar></NavBar>
    <Routes>

      <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a Shape Soul- Tienda de Guitarras'}></ItemListContainer>}/>

      <Route path='/guitarras' element={<GuitarsContainer></GuitarsContainer>}/>
      <Route path='/guitarras/:guitarId' element={<GuitarDetails></GuitarDetails>}/>

    </Routes>

    

    <Footer></Footer>
    
    </BrowserRouter>
    
  </div>
  
 
  );
  
}

export default App;
