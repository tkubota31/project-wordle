import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import InputForm from "../InputForm/InputForm";
import GuessList from "../GuessList/GuessList";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [answer, setAnswer] = useState(sample(WORDS));
  const [gameStatus, setGameStatus] = useState("running");
  const [valueList, setValueList] = useState([]);

  console.log("answer", answer);
  function handleSubmitGuess(tentGuess) {
    const guess = {
      value: tentGuess,
      id: Math.random(),
    };
    const nextGuess = [...valueList, guess];
    setValueList(nextGuess);

    if (tentGuess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (nextGuess.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  function handleRestart() {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setValueList([]);
    setGameStatus("running");
  }

  return (
    <>
      <GuessList valueList={valueList} answer={answer} />
      <InputForm
        gameStatus={gameStatus}
        handleSubmitGuess={handleSubmitGuess}
      />
      {gameStatus === "won" && (
        <WonBanner
          numOfGuesses={valueList.length}
          handleRestart={handleRestart}
        />
      )}
      {gameStatus === "lost" && (
        <LostBanner answer={answer} handleRestart={handleRestart} />
      )}
    </>
  );
}

export default Game;
