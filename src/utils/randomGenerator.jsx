// utils/randomGenerator.js

const generateRandomNumbers = (channelCount, intervalTime, numberRange) => {
  const channels = Array.from({ length: channelCount }, () =>
    Array.from({ length: 10 }, () =>
      Math.floor(Math.random() * (numberRange + 1))
    )
  );
console.log(channels);
  const stopGenerating = () => {
    // clearInterval ile zamanlayıcıyı temizle
    clearInterval(intervalId);
    console.log("Generating stopped!");
  };

  let intervalId; // intervalId'yi dışa taşı

  const startGenerating = () => {
    // setInterval ile belirtilen aralıklarla yeni veri noktalarını üret
    intervalId = setInterval(() => {
      const newChannels = Array.from({ length: channelCount }, () =>
        Array.from({ length: 10 }, () =>
          Math.floor(Math.random() * (numberRange + 1))
        )
      );
      channels.push(...newChannels);

      // Belirli bir noktadan sonra üretimi durdur (örneğin, 50 veri noktası)
      if (channels.length >= 50) {
        stopGenerating();
      }
    }, intervalTime);
  };

  // Üretimi başlat
  startGenerating();

  return { channels, stopGenerating };
};

export default generateRandomNumbers;
