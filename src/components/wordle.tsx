import { FunctionComponent, useEffect } from 'react';
import { useWordle } from '../hooks';
import Grid from './grid';
import Keypad from './keypad';

interface WordleProps {
  solution: string;
}

const Wordle: FunctionComponent<WordleProps> = ({ solution }) => {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } = useWordle(solution);

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
      <Keypad usedKeys={usedKeys} />
    </>
  );
};

export default Wordle;
