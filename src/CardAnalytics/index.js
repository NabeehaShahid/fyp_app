import React from 'react';
import './CardAnalytics.css'
import { Chart } from "react-google-charts";

export const data = [
  ["Day", "Sales"],
  ["Mon", 1000],
  ["Tue", 1170],
  ["Wed", 660],
  ["Thurs", 1030],
  ["Fri", 1130],
  ["Sat", 1050],
  ["Sunday", 1000]
];

export const options = {
  backgroundColor: { fill:'transparent' },
  hAxis: { textStyle: {color: "#FFF"}},
  legend: { position:'none' },
  vAxis: { minValue: 0, textStyle: {color: "#FFF"}, gridlines: { color:'none' } },
  chartArea: { width: "85%"},
};




const CardAnalytics = (props) => {
  return (
    <div className='card-my p-3 my-3'>
        <div className='d-flex flex-column justify-content-between '>
          <p className='text-white fs-5 d-block'>Analytics</p>
          <div>
          <Chart
            chartType="AreaChart"
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

export default CardAnalytics;
