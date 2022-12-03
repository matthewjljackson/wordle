import { FunctionComponent, useEffect, useState } from 'react';
import { Letter, UsedKeys } from '../interfaces';

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
