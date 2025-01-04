import React, { useState } from 'react';

const UseStateCounter = () => {
  const [count, setCount] = useState(0);
  console.log('Current count:', count);

  return (
    <>
      <div class="min-h-screen flex justify-center items-center bg-gray-100">
      <div class="max-w-sm rounded-lg border border-gray-300 shadow-lg p-6 bg-white">
        <p className="text-2xl font-semibold">You have Clicked {count} Times</p>
        <button
          className="w-full bg-primary text-white font-semibold py-2 rounded-md hover:bg-primary-dark transition duration-200"
          onClick={() => setCount(count + 1)}
        >
          Click Me
        </button>
      </div>
      </div>
    </>
  );
};

export default UseStateCounter;
