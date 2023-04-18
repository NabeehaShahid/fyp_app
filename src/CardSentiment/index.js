import React from 'react';
import './CardSentiment.css'
import { Chart } from "react-google-charts";

export const data = [
  ["Last day", "Positive"],
  ["Positive", 1000],
  ["Negative", 660],
];

export const options = {
  backgroundColor: { fill:'transparent' },
  hAxis: { textStyle: {color: "#FFF"}},
  legend: { position:'none' },
  vAxis: { minValue: 0, textStyle: {color: "#FFF"}, gridlines: { color:'none' } },
  chartArea: { width: "85%"},
};





const CardSentiment = (props) => {
  return (
    <div className='card-my p-3 my-3'>
        <div className='d-flex flex-column justify-content-between '>
          <p className='text-white fs-5 d-block'>Sentiment</p>
          <div>
          <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
          </div>
        </div>
    </div>
  );
}

export default CardSentiment;
