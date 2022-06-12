import { FunctionComponent, useEffect, useState } from 'react';
import { FormattedGuess, Letter } from '../interfaces';

interface KeypadProps {}

const Keypad: FunctionComponent<KeypadProps> = () => {
  const [letters, setLetters] = useState<Letter[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/letters')
      .then((res) => res.json())
      .then((json: Letter[]) => {
        setLetters(json);
      });
  }, []);

  if (letters) console.log({ letters });
  return (
    <div className='keypad'>
      {letters.map((letter) => {
        return <div key={letter.key}>{letter.key}</div>;
      })}
    </div>
  );
};

export default Keypad;
