// utils/randomGenerator.js

const generateRandomNumbers = (channelCount, intervalTime, numberRange) => {
  const channels = Array.from({ length: channelCount }, () =>
    Array.from({ length: 10 }, () =>
      Math.floor(Math.random() * (numberRange + 1))
    )
  );

  const stopGenerating = () => {
  
    clearInterval(intervalId);
    console.log("Generating stopped!");
  };

  let intervalId; 

  const startGenerating = () => {
  
    intervalId = setInterval(() => {
      const newChannels = Array.from({ length: channelCount }, () =>
        Array.from({ length: 10 }, () =>
          Math.floor(Math.random() * (numberRange + 1))
        )
      );
      channels.push(...newChannels);

    
      if (channels.length >= 50) {
        stopGenerating();
      }
    }, intervalTime);
  };


  startGenerating();

  return { channels, stopGenerating };
};

export default generateRandomNumbers;
