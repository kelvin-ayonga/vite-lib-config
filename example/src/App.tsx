import { useCounter } from "my-react-hook-library";

export function App() {
  const { count, increment, decrement } = useCounter();

  return (
    <main style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>useCounter Demo</h1>
      <p>Count: {count}</p>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button type="button" onClick={decrement}>
          Decrement
        </button>
        <button type="button" onClick={increment}>
          Increment
        </button>
      </div>
    </main>
  );
}
