import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <main style={{ fontFamily: "system-ui", padding: 24 }}>
      <h1>Vite + React + TS + Docker</h1>
      <p>It works 🎉</p>
      <button onClick={() => setCount((c) => c + 1)}>
        You clicked {count} times
      </button>
    </main>
  )

}