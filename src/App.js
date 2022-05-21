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
import { carritoContext } from './Data/context/CarritoContext';
import ItemCount from './components/ItemCount';
import ItemDetail from './components/ItemDetail';
import Carrito from './components/Carrito';
import GuitarCards from './components/GuitarCards';
import { useState } from 'react';
import EmpanadaCarne from './components/Shop/EmpanadaCarne';
import Empanadas from './components/Shop/Empanadas';





function App() {

const styles = {
  header: 'text-3xl font-bold underline text-amber-600'
}

  return (
    
  <div>
    <CarritoProvider>

    <BrowserRouter>
    
    <NavBar></NavBar>

    <Carrito/>

    <Routes>

      <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a Shape Soul- Tienda de Guitarras'}></ItemListContainer>}/>

      <Route path='/guitarras' element={<GuitarsContainer/>}/>
      <Route path='/guitarras/:guitarId' element={<GuitarDetails/>}/>
      <Route path='/empanada' element={<EmpanadaCarne/>}/>
      <Route path='/empanadas' element={<Empanadas/>}/>

    </Routes>

    

    <Footer></Footer>
    
    </BrowserRouter>
    
    </CarritoProvider>
  </div>
  
 
  );
  
}

export default App;
