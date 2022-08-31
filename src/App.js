import { Route, Routes } from 'react-router-dom';
import CategoryPage from './components/CategoryPage';
import { Page404 } from './components/Page404';
import Layout from './components/Layout';
import Cart from './components/Cart';
import ProductPage from './components/ProductPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="cart" element={<Cart />} />
          <Route path=":category" element={<CategoryPage />} />
          <Route path=":category/:categoryId" element={<ProductPage />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
