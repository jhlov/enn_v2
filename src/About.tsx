import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./About.scss";

interface AboutProp {
  onClickStart: Function;
}

/**
 * 검사하기 전에 읽어볼 사항
 */
const About: React.FC<AboutProp> = ({ onClickStart }) => {
  return (
    <div className="about">
      <Card body>
        <h2 className="mb-5">검사하기 전에 읽어볼 사항</h2>
        <ul className="text-left mb-5">
          <li className="mb-4">
            이 검사는 개인의 심리적 성향과 성격의 역동을 알아내어 자기와 타인을
            이해하고 이를 토대로 직장과 사회 그리고 가정의 실제 생활에 도움을
            주고자 하는데 그 목적이 있습니다.
          </li>
          <li className="mb-4">
            이 검사는 인간의 능력을 진단하거나 평가하는 심리검사가 아닙니다.
            따라서 높은 점수가 좋은 것은 아닙니다. 자기에 대한 자신의 생각과
            느낌을 점수로 표시하면 됩니다.
          </li>
          <li className="mb-4">
            응답을 하는 과정에서 어느 한 문항을 너무 오래 생각하지 마십시오.
            또한 비슷한 문항에 대해 의식적으로 일관성 있게 응답하려 하지 말고
            주어진 문항에 편안하고 자연스럽게 응답하시기 바랍니다.
          </li>
          <li className="mb-4">
            이상적으로 생각하는 자신의 모습이 아닌 평소의 자연스럽고 자주
            나타나는 자신의 생각, 느낌, 행동하는 경향을 점수로 표기하십시오.
          </li>
          <li className="mb-4">
            다음 문항들은 자신의 특징을 나타내고 있습니다. 제시된 문항을 잘 읽고
            그 문항이 자신을 얼마나 잘 설명하고 있는가를 결정하여 자신의 생각
            또는 느낌과 일치하는 응답을 골라 주세요.
          </li>
        </ul>

        <Button
          variant="outline-primary"
          size="lg"
          onClick={() => onClickStart()}
        >
          시작하기
        </Button>
      </Card>
    </div>
  );
};

export default About;
