import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

// import Menu from './components/Menu'

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting='Hola Mundo'/>
    </div>
  );
}

export default App;
