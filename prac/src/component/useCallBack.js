import React, { useState, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);

  const showMessage = useCallback(() => {
    console.log("Hello!");
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={showMessage}>
        Show Message
      </button>
    </div>
  );
}

export default App;