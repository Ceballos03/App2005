import './App.css';
import Navbar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
/* import FunctionCounter from './componentes/FunctionCounter/FunctionCounter'; */
import ItemDetailContainer from './componentes/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Hola Mundo" />
      {/* <FunctionCounter greeting='hola'/> */}
      <ItemDetailContainer/>
    </div>
  );
}

export default App;