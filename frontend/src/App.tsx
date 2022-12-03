import { useEffect, useState } from 'react';
import { Solution } from './interfaces';
import Wordle from './components/wordle';

function App() {
  const [solution, setSolution] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:3001/solutions')
      .then((res) => res.json())
      .then((json: Solution[]) => {
        const randomSolution = json[Math.floor(Math.random() * json.length)];
        setSolution(randomSolution.word);
      });
  }, []);
  return (
    <div className='App'>
      <h1>Wordle</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
