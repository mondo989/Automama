const messages = [
  'Hi Ma, just a quick message to say I love you!',
  'Hi Ooooooo Mother, hope you are enjoying the day!',
  'Hi Mom, Please stop whatever you are doing and have a great day ❤️!'
];

module.exports.getRandomMessage = () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
};
