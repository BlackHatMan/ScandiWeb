import { Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import CategoryPage from './route/CategoryPage';
import Layout from './components/Layout';
import CartPage from './route/CartPage';
import ProductPage from './route/ProductPage';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="cart" element={<CartPage />} />
            <Route path=":category" element={<CategoryPage />} />
            <Route path=":category/:categoryId" element={<ProductPage />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;

// TODO title on all pages
// TODO styled provider
