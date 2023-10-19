const nut = require('@nut-tree/nut-js');
const config = require('./config');
const { mouse, straightTo, Point, Button } = require('@nut-tree/nut-js');

module.exports.pressCommandSpace = async () => {
  console.log("Pressing Command + Space")
  await nut.keyboard.pressKey(nut.Key.LeftSuper, nut.Key.Space);
  await nut.keyboard.releaseKey(nut.Key.LeftSuper, nut.Key.Space);
  await nut.sleep(config.delay);

  console.log("Command + Space pressed")
};

module.exports.typeMessagesAndReturn = async () => {
  console.log("Starting typing");

  nut.keyboard.config.autoDelayMs = 10;
  await nut.keyboard.type('mess');
  await nut.keyboard.pressKey(nut.Key.Return);
  await nut.keyboard.releaseKey(nut.Key.Return);
  await nut.sleep(config.delay);
};

module.exports.resetScreenToCorner = async () => {
  console.log("Resetting screen to Corner");
  await nut.keyboard.pressKey(nut.Key.LeftSuper, nut.Key.LeftControl, nut.Key.L);
  await nut.keyboard.releaseKey(nut.Key.LeftSuper, nut.Key.LeftControl, nut.Key.L);
  console.log("Screen resetted to the corner");

  await nut.sleep(config.delay);
};

module.exports.moveMouseAndClickOnMessagesSearchInput = async () => {

  console.log("Moving Mouse");

  await mouse.move(straightTo(new Point(40, 105)));
  await mouse.click(Button.LEFT);
  console.log("Mouse done Moving");
};

module.exports.whoAreWeMessaging = async () => {
  console.log("Who are we writing to?");
  nut.keyboard.config.autoDelayMs = 10;
  await nut.keyboard.type('Mama 2');
  await nut.sleep(config.delay);
}

module.exports.moveMouseToFirstResultAndClick = async () => {
  console.log("Clicking on name");
  await nut.sleep(config.delay);
  await mouse.move(straightTo(new Point(45, 160)));
  await mouse.click(Button.LEFT);
  await nut.sleep(config.delay);
}

module.exports.populateTextMessage = async (message) => {
  console.log("Adding Message");
  nut.keyboard.config.autoDelayMs = 10;
  await nut.keyboard.type(message);
  await nut.sleep(config.delay);
};

module.exports.pressReturnToSend = async () => {
  await nut.keyboard.pressKey(nut.Key.Return);
  await nut.sleep(config.delay);
};
