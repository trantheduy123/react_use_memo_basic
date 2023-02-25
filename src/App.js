import { useState, useMemo } from "react";

function expensiveFunction(number) {
  console.log("bat dau");
  const start = new Date();

  //doi 3s
  while (new Date() - start < 3000)
    console.log("ket thuc", new Date() - start, "ms");

  return number * number;
}

function App() {
  const [count, setCount] = useState(0);

  const number = useMemo(() => {
    expensiveFunction(10);
  }, []);

  return (
    <>
      <p> count:{number} </p>
      <p> count:{count} </p>
      <button onClick={() => setCount(count + 1)}> add</button>
    </>
  );
}

export default App;
