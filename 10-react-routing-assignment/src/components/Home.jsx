import Product from "./Product";
import Counter from "./Counter";

function Home() {
  return (
    <div className="container">
      <h2>Home Page</h2>

      <Product name="Laptop" price="45000" />
      <Product name="Mobile" price="20000" />

      <Counter />
    </div>
  );
}

export default Home;
