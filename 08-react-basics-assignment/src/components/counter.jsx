import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Count: {count}</h3>
     <button style={{ margin: "5px" }} onClick={() => setCount(count + 1)}>+</button>
     <button style={{ margin: "5px" }} onClick={() => setCount(count - 1)}>-</button>

    </div>
  );
}

export default Counter;
