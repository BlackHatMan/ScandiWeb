import Category from './Category';
import BasketOverlay from './components/BasketOverlay';
import PDP from './components/PDP';
import PLP from './components/PLP';

function App() {
  return (
    <div className="App">
      <Category />
      {/* <BasketOverlay /> */}
      <PLP />
      <PDP />
    </div>
  );
}

export default App;
