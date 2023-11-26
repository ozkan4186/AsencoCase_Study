// utils/randomGenerator.js

const generateRandomNumbers = (channelCount) => {
  const channels = Array.from({ length: channelCount }, () =>
    Array.from({ length: 10 }, () => Math.random() * 100)
  );

  const stopGenerating = () => {
    // Burada gerekirse üretimi durduran işlemleri gerçekleştirebilirsiniz.
    console.log("Generating stopped!");
  };

  return { channels, stopGenerating };
};

export default generateRandomNumbers;
