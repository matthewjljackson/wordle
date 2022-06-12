import { FunctionComponent, useEffect } from 'react';
import { FormattedGuess } from '../interfaces';
import Row from './row';

interface GridProps {
  currentGuess: string;
  turn: number;
  guesses: FormattedGuess[][];
}

const Grid: FunctionComponent<GridProps> = ({ currentGuess, turn, guesses }) => {
  return (
    <div>
      {guesses.map((guess, i) => {
        if (turn === i) {
          return <Row key={i} currentGuess={currentGuess} />;
        }
        return <Row key={i} guess={guess} />;
      })}
    </div>
  );
};

export default Grid;
