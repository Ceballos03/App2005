import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer'

function App() {
  return (
    <div className='App'>

    <BrowserRouter>
        <Navbar />
        
        <Route exact path='/' component={ItemListContainer}/>
        <Route exact path='/category/:id' component={ItemListContainer}/>
        <Route exact path='/detail/:productId' component={ItemDetailContainer}/>
        
        
    </BrowserRouter>

    </div>
  );
}

export default App;