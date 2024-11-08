import React from "react";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessList({ valueList, answer }) {
  return (
    <div class="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num, index) => {
        return <Guess answer={answer} key={num} guess={valueList[num]} />;
      })}
    </div>
  );
}

export default GuessList;
