import { FunctionComponent, useEffect, useState } from 'react';
import { useWordle } from '../hooks';
import Grid from './grid';
import Keypad from './keypad';
import Modal from './modal';

interface WordleProps {
  solution: string;
}

const Wordle: FunctionComponent<WordleProps> = ({ solution }) => {
  const [showModal, setShowModal] = useState(false);
  const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } = useWordle(solution);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup);

    if (isCorrect) {
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener('keyup', handleKeyup);
    }

    if (turn > 5) {
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener('keyup', handleKeyup);
    }

    return () => window.removeEventListener('keyup', handleKeyup);
  }, [handleKeyup, isCorrect, turn]);

  return (
    <>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keypad usedKeys={usedKeys} />
      {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
    </>
  );
};

export default Wordle;
