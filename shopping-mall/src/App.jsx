import { GlobalStyle } from './GlobalStyle'
import { HomePage } from './pages/HomePage/HomePage'
import { Routes, Route } from 'react-router-dom';
import CartPage from './pages/CartPage/CartPage';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';

function App() {
  return (
    <>
      <GlobalStyle />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/product/:id' element={<ProductDetailPage/>} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
    </>
  );
}
export default App;

