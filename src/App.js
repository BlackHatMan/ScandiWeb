import { Route, Routes } from 'react-router-dom';
import CategoryPage from './route/CategoryPage';
import Layout from './components/Layout';
import Cart from './route/Cart';
import ProductPage from './route/ProductPage';
import { ErrorBoundary } from './components/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="cart" element={<Cart />} />
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
