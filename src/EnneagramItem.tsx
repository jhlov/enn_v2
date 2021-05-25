import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "./EnneagramItem.scss";

interface EnneagramItemProp {
  index: number;
  question: string;
  onClickAnswer: Function;
}

const EnneagramItem: React.FC<EnneagramItemProp> = ({
  index,
  question,
  onClickAnswer
}) => {
  const [rSelected, setRSelected] = useState(-1);
  const exampleList = [
    "전혀 그렇지 않다",
    "그렇지 않다",
    "보통이다",
    "그렇다",
    "매우 그렇다"
  ];

  const _onClickAnswer = (answer: number) => {
    setRSelected(answer);
    onClickAnswer(index, answer);
  };

  return (
    <div className="enneagram-item mb-5">
      <p>{question}</p>
      <ButtonGroup className="answer-btn">
        {exampleList.map((e, index) => (
          <Button
            key={index}
            className="m-0"
            variant="outline-primary"
            onClick={() => _onClickAnswer(index + 1)}
            active={rSelected === index + 1}
          >
            {e}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
};

export default EnneagramItem;
