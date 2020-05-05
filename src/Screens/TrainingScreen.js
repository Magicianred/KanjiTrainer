import React, { useState } from "react";
import data from "../storage/data.json";

export default function TrainingScreen() {
  const randomNumberGenerator = (n) => {
    return Number(Math.floor(Math.random() * n));
  };

  const [randomNum, setRandomNum] = useState(randomNumberGenerator(850));
  const showKanji = () => {
    const KanjiNt = data[0].Kanji.DATA[randomNum];
    console.log(KanjiNt.kanji);

    return (
      <div>
        <p key={data.Kanji}>{KanjiNt.kanji}</p>
        <p key={data.Kanji}>
          {KanjiNt.kunyomi + " / " + KanjiNt.onyomi + " / " + KanjiNt.meaning}
        </p>
      </div>
    );
  };

  const handleButton = () => {
    setRandomNum(randomNumberGenerator(850));
  };

  return (
    <div>
      {showKanji()}

      <button onClick={(e) => handleButton(e)}> Next </button>
    </div>
  );
}
