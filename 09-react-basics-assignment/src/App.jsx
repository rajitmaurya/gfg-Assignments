import Product from "./components/product.jsx";
import Counter from "./components/counter.jsx";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="card">
        <h1>React Basics Assignment</h1>

        <Product name="Laptop" price={45000} />
        <Product name="Mobile" price={20000} />

        <Counter />
      </div>
    </div>
  );
}

export default App;
