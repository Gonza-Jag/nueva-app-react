import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Main from './components/Main';
import Footer from './components/Footer';
import GuitarsContainer from './components/GuitarsContainer';


function App() {

const styles = {
  header: 'text-3xl font-bold underline text-amber-600'
}

  return (
    
  <div>
    <NavBar></NavBar>
    <ItemListContainer greeting={'Bienvenidos a Shape Soul- Tienda de Guitarras'}></ItemListContainer>
    
  


    <GuitarsContainer></GuitarsContainer>
    <Footer></Footer>
    
    
    
  </div>
  
 
  );
  
}

export default App;
