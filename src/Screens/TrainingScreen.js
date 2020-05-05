import React, { useState } from "react";
import data from "../storage/data.json";

export default function TrainingScreen() {
  const randomNumberGenerator = (n) => {
    return Number(Math.floor(Math.random() * n));
  };
  const [randomNum, setRandomNum] = useState(randomNumberGenerator(850));
  const [answer, setAnswer] = useState("");
  const KanjiNt = data[0].Kanji.DATA[randomNum];
  const ans = [
    KanjiNt.kunyomi + " / " + KanjiNt.onyomi + " / " + KanjiNt.meaning,
  ];
  const showKanji = () => {
    console.log(KanjiNt.kanji);

    return (
      <div>
        <p key={data.Kanji}>{KanjiNt.kanji}</p>
      </div>
    );
  };

  const handelNext = () => {
    setRandomNum(randomNumberGenerator(850));
    setAnswer([]);
  };

  const handleShow = () => {
    setAnswer(ans);
    console.log(ans);
  };

  return (
    <div>
      {showKanji()}

      <button onClick={(e) => handelNext(e)}> Next </button>
      <br />
      <hr />
      <button onClick={(e) => handleShow(e)}> Show </button>
      <div>
        <p>{answer}</p>
      </div>
    </div>
  );
}
