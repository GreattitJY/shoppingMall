import { GlobalStyle } from './GlobalStyle'
import { HomePage } from './pages/HomePage/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartPage from './pages/CartPage/CartPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      
      </BrowserRouter>
    </>
  );
}
export default App;

