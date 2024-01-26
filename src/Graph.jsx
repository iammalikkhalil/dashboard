import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

export default function Graph({ props }) {
  const [wait, setWait] = useState(0);
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "graph",
      },
      stroke: {
        curve: "smooth",
      },
      colors: ["#EFCB5A", "#F977BC"],
      xaxis: {
        categories: ["", "Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"],
      },
    },
    series: [
      {
        name: "In",
        data: [0, 0, 0, 0, 0],
      },
      {
        name: "Out",
        data: [0, 0, 0, 0, 0],
      },
    ],
  });

  useEffect(() => {
    setTimeout(() => {
      if (props.totalIn === undefined || props.totalOut === undefined) {
        setWait(wait + 1);
      } else {
        setChartData((prevData) => ({
          ...prevData,
          series: [
            {
              name: "In",
              data: [
                ((0 / 100) * props.totalIn).toFixed(0),
                ((10 / 100) * props.totalIn).toFixed(0),
                ((45 / 100) * props.totalIn).toFixed(0),
                ((30 / 100) * props.totalIn).toFixed(0),
                ((15 / 100) * props.totalIn).toFixed(0),
              ],
            },
            {
              name: "Out",
              data: [
                ((0 / 100) * props.totalOut).toFixed(0),
                ((5 / 100) * props.totalOut).toFixed(0),
                ((10 / 100) * props.totalOut).toFixed(0),
                ((50 / 100) * props.totalOut).toFixed(0),
                ((35 / 100) * props.totalOut).toFixed(0),
              ],
            },
          ],
        }));
      }
    }, 500);
  }, [props.totalIn, props.totalOut, wait]);

  return (
    <div>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="line"
        width="100%"
        height="250px"
      />
    </div>
  );
}