import React, {useState, useEffect} from 'react';

const NotHome = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        if (counter < 0) {
            setCounter(0);
        }
        if (counter > 5) {
            alert('You passed 5!');
        }
    }, [counter]
);
  return (
    <div>
      <h1>Welcome to the NotHome Page!</h1>
      <h2>Counter: {counter}</h2>

      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
    </div>
  );
};

export default NotHome;