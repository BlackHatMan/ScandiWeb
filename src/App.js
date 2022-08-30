import { Route, Routes } from 'react-router-dom';
import ProductPage from './components/ProductPage';
import { Page404 } from './components/Page404';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path=":category" element={<ProductPage />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
