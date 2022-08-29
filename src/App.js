import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductPage from './components/ProductPage';
import { Page404 } from './components/Page404';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductPage />} />
        <Route path="Women" element={<ProductPage />} />
        <Route path="Men" element={<ProductPage />} />
        <Route path="Kids" element={<ProductPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
