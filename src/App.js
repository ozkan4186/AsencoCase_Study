import React, { useState, useEffect } from "react";
import generateRandomNumbers from "./utils/randomGenerator";
import BarChart from "./components/BarChart/BarChart";
import Controls from "./components/Controls/Controls";

const App = () => {
  const [channelCount, setChannelCount] = useState(2);
  const [randomData, setRandomData] = useState([]);
  const [chartColors, setChartColors] = useState([
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
  ]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [intervalTime, setIntervalTime] = useState(1000);
  const [numberRange, setNumberRange] = useState(10);

  const handleGenerateStart = () => {
    const { channels, stopGenerating } = generateRandomNumbers(
      channelCount,
      intervalTime,
      numberRange
    );
    const formattedData = channels[0].map((_, index) => {
      const dataPoint = { index };
      channels.forEach((channel, i) => {
        dataPoint[`channel${i}`] = channel[index];
      });
      return dataPoint;
    });

    setRandomData(formattedData);
    setIsGenerating(true);

    // Component unmount edildiğinde üretimi durdur
    return () => {
      stopGenerating();
      setIsGenerating(false);
    };
  };

  const handleGenerateStop = () => {
    setIsGenerating(false);
  };

  const handleSaveData = () => {
    // Local Storage veya başka bir yöntem kullanarak verileri kaydet
    localStorage.setItem("randomData", JSON.stringify(randomData));
  };

  const handleLoadData = () => {
    // Local Storage veya başka bir yöntem kullanarak verileri yükle
    const savedData = localStorage.getItem("randomData");
    if (savedData) {
      setRandomData(JSON.parse(savedData));
    }
  };

  useEffect(() => {
    // Burada randomData'nın güncellenmesi ve gerekirse işlemler yapılabilir
  }, [randomData]);

  return (
    <div>
      <label>Channel Count:</label>
      <input
        type="number"
        value={channelCount}
        onChange={(e) => setChannelCount(Number(e.target.value))}
      />
      <label>Interval Time (ms):</label>
      <input
        type="number"
        value={intervalTime}
        onChange={(e) => setIntervalTime(Number(e.target.value))}
      />
      <label>Number Range:</label>
      <input
        type="number"
        value={numberRange}
        onChange={(e) => setNumberRange(Number(e.target.value))}
      />
      <Controls
        onGenerateStart={handleGenerateStart}
        onGenerateStop={handleGenerateStop}
        onSaveData={handleSaveData}
        onLoadData={handleLoadData}
      />
      <BarChart data={randomData} colors={chartColors} />
    </div>
  );
};

export default App;
