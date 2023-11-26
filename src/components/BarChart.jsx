import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

// Chart.js
const BarChart = ({ data, colors }) => {
  const chartRef = useRef(null);

  useEffect(() => {
  
 
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      const formattedData = data.map((item) => ({
        label: item.index.toString(),
        data: colors.map((_, i) => item[`channel${i}`]),
        backgroundColor: colors,
      }));

  


      const existingChart = Chart.getChart(ctx);
      if (existingChart) {
        existingChart.destroy();
      }

      new Chart(ctx, {
        type: "bar",
        data: {
          labels: formattedData.map((item) => item.label),
          datasets: formattedData,
        },
        options: {
          scales: {
            x: { stacked: true },
            y: { stacked: true },
          },
        },
      });
    }
  }, [data, colors]);

  return <canvas id="barChart" ref={chartRef} />;
};
export default BarChart;
