import { FC, useState } from 'react';

const App: FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Hello From Vite Starter</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount((prevState) => prevState + 1)} type="button">
        +
      </button>
    </div>
  );
};

export default App;
