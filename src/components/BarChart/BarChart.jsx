// BarChart.js

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "../BarChart/barChart.css";

const BarChart = ({ data, colors }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      const formattedData = data.map((item, index) => ({
        label: item.index.toString(),
        data: colors.map((_, i) => item[`channel${i}`]),
        backgroundColor: colors[index],
      }));

      if (!chartInstance.current) {
        // İlk render'da chart örneği oluşturulur
        chartInstance.current = new Chart(ctx, {
          type: "bar",
          data: {
            labels: formattedData.map((item) => item.label),
            datasets: formattedData.map((item, index) => ({
              label: item.label,
              data: item.data,
              backgroundColor: item.backgroundColor,
            })),
          },
          options: {
            scales: {
              x: { stacked: true },
              y: { stacked: true },
            },
          },
        });
      } else {
        // Mevcut chart örneğine yeni bir çubuk eklenir
        chartInstance.current.data.labels.push(formattedData[0].label);
        formattedData.forEach((item, index) => {
          if (!chartInstance.current.data.datasets[index]) {
            chartInstance.current.data.datasets[index] = {
              label: item.label,
              data: [],
              backgroundColor: item.backgroundColor,
            };
          }
          chartInstance.current.data.datasets[index].data.push(item.data[0]);
        });

        // Chart güncellenir
        chartInstance.current.update();
      }
    }
  }, [data, colors]);

  return <canvas id="barChart" ref={chartRef} />;
};

export default BarChart;
