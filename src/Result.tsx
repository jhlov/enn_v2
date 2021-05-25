import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from "highcharts/highcharts-more";
import React, { useMemo } from "react";
import "./Result.scss";

HighchartsMore(Highcharts);

interface ResultProp {
  scoreList: number[];
}

const Result: React.FC<ResultProp> = ({ scoreList }) => {
  const typeNameList = [
    "개혁가",
    "조력가",
    "성취자",
    "예술가",
    "사색가",
    "충성가",
    "낙천가",
    "지도자",
    "중재자"
  ];

  const getType: string = useMemo(() => {
    console.log(scoreList);
    const maxScore = Math.max(...scoreList);
    console.log(maxScore);
    return typeNameList
      .filter((_, index) => scoreList[index] === maxScore)
      .join(", ");
  }, [scoreList]);

  const options: Highcharts.Options = useMemo<Highcharts.Options>(() => {
    return {
      chart: {
        polar: true
      },
      title: {
        text: ""
      },
      pane: {
        startAngle: 20,
        endAngle: 380,
        size: window.innerWidth < 769 ? "60%" : "85%"
      },
      xAxis: {
        categories: typeNameList.map((e, index) => `${index + 1}(${e})`),
        labels: {
          style: {
            fontSize: window.innerWidth < 769 ? "14px" : "20px"
          }
        }
      },
      yAxis: {
        min: 0,
        max: 45,
        tickInterval: 5
      },
      // tooltip: {
      //   enabled: false
      // },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true,
            style: {
              fontSize: window.innerWidth < 769 ? "14px" : "16px"
            },
            allowOverlap: true
          },
          enableMouseTracking: true
        }
      },
      series: [
        {
          type: "line",
          name: "score",
          marker: {
            radius: 3
          },
          lineWidth: 1.3,
          // states: {
          //   hover: {
          //     enabled: false
          //   }
          // },
          data: scoreList,
          showInLegend: false
        }
      ],
      credits: {
        enabled: false
      }
    };
  }, [scoreList]);

  return (
    <div className="result">
      <p>
        당신의 예상 유형은 <b>{getType}</b>입니다.
      </p>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Result;
