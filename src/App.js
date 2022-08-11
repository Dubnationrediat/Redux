import logo from './logo.svg';
import './App.css';
import Headers from './Containers//Header.js'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ProductListing from './Containers/ProductListing';
import ProductDetail from './Containers/ProductDetail';
function App() {
  return (
    <div>
    <Headers/>
    <BrowserRouter>
       <Routes>
         <Route path='/product' element={<ProductListing/>}/>
         <Route path='/product/:productId' element={<ProductDetail/>}/>
         <Route>404 page not found</Route>
       </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
