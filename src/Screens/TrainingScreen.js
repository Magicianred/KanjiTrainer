import React, { useState } from "react";
import data from "../storage/data.json";
import "./Screens.css";
import randomColor from "randomcolor";

import {
  Button,
  Paper,
  Card,
  CardContent,
  Container,
  Typography,
} from "@material-ui/core";

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

  const handleNext = () => {
    setRandomNum(randomNumberGenerator(850));
    setAnswer();
  };

  const handleShow = () => {
    setAnswer(ans);
    console.log(KanjiNt);
  };

  const showKanji = () => {
    return (
      <Container className="Container">
        <Container>
          <Button
            size="large"
            variant="outlined"
            color="primary"
            onClick={(e) => handleNext(e)}
          >
            {" "}
            Next{" "}
          </Button>
          <br />
          <br />
        </Container>
        <Container>
          <Paper>
            <Card>
              <CardContent
                className="KanjiCard"
                style={{ backgroundColor: randomColor() }}
              >
                <Typography
                  style={{ fontSize: "6rem" }}
                  className="Kanji"
                  key={data.Kanji}
                >
                  {KanjiNt.kanji}
                </Typography>
                <Typography>{answer}</Typography>
              </CardContent>
            </Card>
          </Paper>
        </Container>
      </Container>
    );
  };

  return (
    <Container className="Main">
      {showKanji()}
      <br />

      <Button
        size="large"
        variant="outlined"
        color="secondary"
        onClick={(e) => handleShow(e)}
      >
        {" "}
        Show{" "}
      </Button>
      <br />
      <br />

      <br />
    </Container>
  );
}
