// Controls.js

import React, { useState } from "react";
import "../Controls/control.css"; // Ekledik

const Controls = ({
  onGenerateStart,
  onGenerateStop,
  onSaveData,
  onLoadData,
}) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleStart = () => {
    setIsGenerating(true);
    onGenerateStart();
  };

  const handleStop = () => {
    setIsGenerating(false);
    onGenerateStop();
  };

  const handleSave = () => {
    onSaveData();
  };

  const handleLoad = () => {
    onLoadData();
  };

  return (
    <div className="controls-container">
      <button onClick={handleStart} disabled={isGenerating}>
        Başlat
      </button>
      <button onClick={handleStop} disabled={!isGenerating}>
        Durdur
      </button>
      <button onClick={handleSave}>Kaydet</button>
      <button onClick={handleLoad}>Yükle</button>
    </div>
  );
};

export default Controls;
