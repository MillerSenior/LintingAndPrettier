'use client';
import React, { useEffect, useState } from 'react';

function MessyComponent() {
  const [count, setCount] = useState(0);
  //const unusedVariable = "This will trigger an ESLint warning";

  console.log('This console log will trigger a warning');

  function incrementCount() {
    setCount(count + 1);
  }

  useEffect(() => {
    if (count > 5) {
      console.log('High count!');
    }
  }, [count]); // Runs when count changes

  return (
    <div className="p-5 m-3 bg-gray-100 rounded-lg shadow-md text-center">
      <h1 className="text-3xl font-bold text-blue-600">Count: {count}</h1>
      <button
        onClick={incrementCount}
        className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
      >
        Increment
      </button>
      {/*{ count > 5 && console.log('High count!') }-throws linting error*/}
    </div>
  );
}

export default MessyComponent;
