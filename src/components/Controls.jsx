import React, { useState, useEffect } from "react";
import generateRandomNumbers from "../utils/randomGenerator";

const Controls = ({ onGenerateStart, onGenerateStop }) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleStart = () => {
    setIsGenerating(true);
    onGenerateStart();
  };

  const handleStop = () => {
    setIsGenerating(false);
    onGenerateStop();
  };

  return (
    <div>
      <button onClick={handleStart} disabled={isGenerating}>
        Başlat
      </button>
      <button onClick={handleStop} disabled={!isGenerating}>
        Durdur
      </button>
    </div>
  );
};

export default Controls;
