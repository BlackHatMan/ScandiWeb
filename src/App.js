import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Header from './components/Header';
import BasketOverlay from './components/BasketOverlay';
import Cart from './components/Cart';
import PDP from './components/PDP';
import PLP from './components/PLP';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <PLP />
      </div>
    </BrowserRouter>
  );
}

export default App;
