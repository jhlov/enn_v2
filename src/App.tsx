import React, { useState } from "react";
import About from "./About";
import "./App.css";
import Enneagram from "./Enneagram";

function App() {
  const [step, setStep] = useState(0);

  const onClickStart = () => {
    setStep(1);
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="my-5">에니어그램 테스트</h1>
        {step === 0 && <About onClickStart={onClickStart} />}
        {step === 1 && <Enneagram />}
      </div>
    </div>
  );
}

export default App;
