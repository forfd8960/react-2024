import React from 'react'

const App = () => {
  const name = 'Alice';
  const x = 100;
  const y = 2000;

  const words = ['alice', 'bob', 'job', 'salary', 'programmer'];

  return (
    <>
      <h1 className="text-5xl font-bold underline">
        Hello world!
      </h1>
      <div>

        { /* refer variable */}
        <p className="text-4xl">
          Hello {name}
        </p>

        { /* expression */ }
        <p className="text-4xl">
          
          The sum of {x} + {y} = {x + y}
        </p>
      </div>

      <div>
        <ul>
          {words.map((w, idx) => (
              <li key={idx}>{w}</li>
            ))}
        </ul>
        
      </div>
    </>
  )
}

export default App
