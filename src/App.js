import React, { useState, useEffect } from "react";
import generateRandomNumbers from "./utils/randomGenerator";
import BarChart from "./components/BarChart/BarChart";
import Controls from "./components/Controls/Controls";
import "./App.css";

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


    setRandomData((prevData) => [...prevData, ...formattedData]);

    setIsGenerating(true);

    
    return () => {
      stopGenerating();
      setIsGenerating(false);
    };
  };

  const handleGenerateStop = () => {
    setIsGenerating(false);
  };

  const handleSaveData = () => {
   
    localStorage.setItem("randomData", JSON.stringify(randomData));
  };

  const handleLoadData = () => {
 
    const savedData = localStorage.getItem("randomData");
    if (savedData) {
      setRandomData(JSON.parse(savedData));
    }
  };

  useEffect(() => {
  
  }, [randomData]);

  return (
    <div className="container">
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
