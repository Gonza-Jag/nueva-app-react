import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Main from './components/Main';
import Footer from './components/Footer';
import GuitarsContainer from './components/GuitarsContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GuitarDetails from './components/GuitarDetails';
import CarritoProvider, { CartContext } from './Data/context/carritoContext';
import { carritoContext } from './Data/context/carritoContext';
import ItemCount from './components/ItemCount';
import ItemDetail from './components/ItemDetail';
import Carrito from './components/Carrito';
import GuitarCards from './components/GuitarCards';
import { useState } from 'react';
import EmpanadaCarne from './components/Shop/EmpanadaCarne';
import Empanadas from './components/Shop/Empanadas';
import SaveGuitars from './components/SaveGuitars';





function App() {

const styles = {
  header: 'text-3xl font-bold underline text-amber-600'
}

  return (
    
  <div>
    <CarritoProvider>

    <BrowserRouter>
    
    <NavBar></NavBar>

   

    <Routes>

      <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a Shape Soul- Tienda de Guitarras'}></ItemListContainer>}/>

      <Route path='/guitarras' element={<GuitarsContainer/>}/>
      <Route path='/guitarras/:guitarId' element={<GuitarDetails/>}/>
      <Route path='/empanada' element={<EmpanadaCarne/>}/>
      <Route path='/empanadas' element={<Empanadas/>}/>
      <Route path='/saveguitars' element={<SaveGuitars/>}/>

    </Routes>

    

    <Footer></Footer>
    
    </BrowserRouter>
    
    </CarritoProvider>
  </div>
  
 
  );
  
}

export default App;
