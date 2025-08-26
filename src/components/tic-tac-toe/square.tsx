import type { MouseEventHandler } from 'react';
import '../../assets/css/ticTacToe.css';

export default function Square({
  value,
  onSquareClick,
}: {
  value: string;
  onSquareClick: MouseEventHandler;
}) {
  {
    return (
      <button
        className="square"
        onClick={onSquareClick}
      >
        {value}
      </button>
    );
  }
}
