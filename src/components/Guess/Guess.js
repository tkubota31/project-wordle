import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const cellClass = status ? `cell ${status}` : "cell";
  return <span className={cellClass}>{letter}</span>;
}

function Guess({ guess, answer }) {
  const checkedGuess = checkGuess(guess ? guess.value : undefined, answer);

  return (
    <div className="guess-results">
      <p className="guess">
        {range(5).map((num) => (
          <Cell
            key={num}
            letter={guess ? checkedGuess[num].letter : undefined}
            status={guess ? checkedGuess[num].status : undefined}
          />
        ))}
      </p>
    </div>
  );
}

export default Guess;
