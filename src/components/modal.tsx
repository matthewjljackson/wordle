import { FunctionComponent } from 'react';

interface ModalProps {
  isCorrect: boolean;
  turn: number;
  solution: string;
}
const Modal: FunctionComponent<ModalProps> = ({ isCorrect, turn, solution }) => {
  return (
    <div className='modal'>
      {isCorrect && (
        <div>
          <h1>You Win!</h1>
          <p className='solution'>{solution}</p>
          <p>You found the solution in {turn} guesses</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>You Lose!</h1>
          <p className='solution'>{solution}</p>
          <p>Better luck next time</p>
        </div>
      )}
    </div>
  );
};

export default Modal;
