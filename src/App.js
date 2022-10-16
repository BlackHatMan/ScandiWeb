import { Route, Routes } from 'react-router-dom';
import CategoryPage from './route/CategoryPage';
import Layout from './components/Layout';
import Cart from './route/Cart';
import ProductPage from './route/ProductPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="cart" element={<Cart />} />
          <Route path=":category" element={<CategoryPage />} />
          <Route path=":category/:categoryId" element={<ProductPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
