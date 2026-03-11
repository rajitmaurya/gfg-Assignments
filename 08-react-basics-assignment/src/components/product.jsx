function Product({ name, price }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      <h3>{name}</h3>
      <p>Price: Rs.{price}</p>
    </div>
  );
}

export default Product;
