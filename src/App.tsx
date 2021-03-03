import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { animated, useSpring } from 'react-spring';

interface AppProps {}

function App({}: AppProps) {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.

  const props = useSpring({
    from: {
      height: '1px',
    },
    to: {
      height: '100px',
    },
  });

  return (
    <animated.div className="App" style={{ height: props.height }}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          Page has been open for <code>{count}</code> seconds.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </animated.div>
  );
}

export default App;
