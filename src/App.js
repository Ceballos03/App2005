import './App.css';
import Navbar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import FunctionCounter from './componentes/FunctionCounter/FunctionCounter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Hola Mundo" />
      <FunctionCounter />
    </div>
  );
}

export default App;