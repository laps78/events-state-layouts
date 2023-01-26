import './App.css';
import Store from './components/Store';
import Products from './data/Products';

function App() {
  return (
    <div className="App">
      <Store products={Products}/>            
    </div>
  );
}

export default App;
