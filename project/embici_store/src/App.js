import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

// import Menu from './components/Menu'

function App() {
  return (
    <div>
      <NavBar/>
      <ItemDetailContainer/>
      <ItemListContainer greeting='Hola Mundo'/>
    </div>
  );
}

export default App;
