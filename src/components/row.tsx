import { FunctionComponent, useEffect } from 'react';
import { FormattedGuess } from '../interfaces';

interface RowProps {
  guess?: FormattedGuess[];
  currentGuess?: string;
}

const Row: FunctionComponent<RowProps> = ({ guess, currentGuess }) => {
  if (guess) {
    return (
      <div className='row past'>
        {guess.map((letter, i) => {
          return (
            <div key={i} className={letter.colour}>
              {letter.key}
            </div>
          );
        })}
      </div>
    );
  }

  if (currentGuess) {
    const letters = currentGuess.split('');

    return (
      <div className='row current'>
        {letters.map((letter, i) => {
          return (
            <div key={i} className='filled'>
              {letter}
            </div>
          );
        })}
        {[...Array(5 - letters.length)].map((_, i) => {
          return <div key={i}></div>;
        })}
      </div>
    );
  }

  return (
    <div className='row'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Row;
