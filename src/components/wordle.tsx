import { FunctionComponent, useEffect } from 'react';
import { useWordle } from '../hooks';
import Grid from './grid';

interface WordleProps {
  solution: string;
}

const Wordle: FunctionComponent<WordleProps> = ({ solution }) => {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn } = useWordle(solution);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup);

    return () => window.removeEventListener('keyup', handleKeyup);
  }, [handleKeyup]);

  useEffect(() => {
    console.log({ guesses, turn, isCorrect });
  }, [guesses, turn, isCorrect]);

  return (
    <>
      <div>current guess - {currentGuess}</div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
    </>
  );
};

export default Wordle;
