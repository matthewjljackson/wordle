import { useEffect, useState } from 'react';
import { Solution } from './interfaces';

function App() {
  const [solution, setSolution] = useState<Solution | null>(null);

  useEffect(() => {
    fetch('http://localhost:3001/solutions')
      .then((res) => res.json())
      .then((json: Solution[]) => {
        const randomSolution = json[Math.floor(Math.random() * json.length)];
        setSolution(randomSolution);
      });
  }, []);
  return (
    <div className='App'>
      <h1>Wordle (Lingo)</h1>
      {solution && <div>{solution.word}</div>}
    </div>
  );
}

export default App;
