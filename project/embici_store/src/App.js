import {Link, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

// import Menu from './components/Menu'

function App() {
  return (
      <div>
        {/* Esto queda fijo */}
        <NavBar/> 
        {/* Esto cambia */}
        <Routes>
          <Route path="/" element={<ItemListContainer greeting='Hola Mundo'/>}/>
          {/* shows items filtered by category */}
          <Route path="/category/:categoryName" element={<ItemListContainer greeting='Categoria en especifico'/>}/>
          <Route path="/item/:productId" element={<ItemDetailContainer/>}/>
          <Route path="*" element={<div><h2>Page not found</h2><Link to="/">{'<< '}Back to Home</Link></div>}/>
        </Routes>
      </div>
  );
}

export default App;
