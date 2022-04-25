import { useState, useEffect, useMemo, useCallback } from "react";

function App() {
  const [userNumber, setUserNumber] = useState("");
  const [randomInput, setRandomInput] = useState("");

  // Memoriza la funcion
  const fib = useCallback((num) => {
    return num <= 1 ? num : fib(num - 1) + fib(num - 2);
  }, []);

  // Memoriza el resultado de la función para no tener que re-calcularlo todo el tiempo
  const fibNumber = useMemo(() => fib(userNumber), [userNumber, fib]);

  useEffect(() => {
    console.log("New number");
  }, [fibNumber]);

  return (
    <div>
      <h1>useMemo</h1>
      <section>
        <h2>Fibonacci Sequence</h2>
        <input
          type="number"
          name="userNumber"
          id="userNumber"
          value={userNumber}
          onChange={(e) => setUserNumber(e.target.value)}
        />
        <p>Number: {fibNumber || "--"}</p>
      </section>
      <br />
      <section>
        <input
          type="text"
          name="test"
          id="text"
          value={randomInput}
          onChange={(e) => setRandomInput(e.target.value)}
        />
        <p>{randomInput}</p>
      </section>
    </div>
  );
}

export default App;
