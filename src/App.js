import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import Cart from './componentes/Cart';
import { CartContextProvider } from './componentes/CartContext';
import { NotificationServicesProvider } from './componentes/NotificationServices'

function App() {
  return (
    <div className='App'>

    <NotificationServicesProvider>
      <CartContextProvider>
        <BrowserRouter>
            <Navbar />
            
            <Route exact path='/' component={ItemListContainer}/>
            <Route exact path='/category/:categoryId' component={ItemListContainer}/>
            <Route exact path='/detail/:productId' component={ItemDetailContainer}/>
            <Route exact path='/cart' component={Cart} />
            
        </BrowserRouter>
      </CartContextProvider>
    </NotificationServicesProvider>

    </div>
  );
}

export default App;