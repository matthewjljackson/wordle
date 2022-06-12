import { FunctionComponent, useEffect, useState } from 'react';
import { FormattedGuess, Letter, UsedKeys } from '../interfaces';

interface KeypadProps {
  usedKeys: UsedKeys;
}

const Keypad: FunctionComponent<KeypadProps> = ({ usedKeys }) => {
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
        const colour = usedKeys[letter.key];
        return (
          <div key={letter.key} className={colour}>
            {letter.key}
          </div>
        );
      })}
    </div>
  );
};

export default Keypad;
