import axios from "axios";
import React, { useState } from "react";
import About from "./About";
import "./App.css";
import Enneagram from "./Enneagram";
import Result from "./Result";

function App() {
  const [step, setStep] = useState<number>(0);
  const [scoreList, setScoreList] = useState<number[]>([]);

  const onClickStart = () => {
    setStep(1);
  };

  /**
   * 정답 제출
   * @param answerList 정답 리스트
   */
  const onSubmit = async (answerList: number[]) => {
    setStep(2);

    axios
      .get(
        "https://gek2578p76.execute-api.ap-northeast-2.amazonaws.com/default/enneagram",
        {
          params: {
            answerList: answerList
          }
        }
      )
      .then(data => {
        setScoreList(data.data.score);
      });
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="my-5">에니어그램 테스트</h1>
        {step === 0 && <About onClickStart={onClickStart} />}
        {step === 1 && <Enneagram onSubmit={onSubmit} />}
        {step === 2 && <Result scoreList={scoreList} />}
      </div>
    </div>
  );
}

export default App;
