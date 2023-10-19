const messageService = require('./messageService');
const automationService = require('./automationService');

(async () => {
  try {
    console.log('Starting the Mom Messages App...');
    
    // Step 1: Press 'Command + space'
    await automationService.pressCommandSpace();

    // Step 2: Type 'messages' and press return
    await automationService.typeMessagesAndReturn();

    // Step 3: Type 'messages' and press return
    await automationService.resetScreenToCorner();

    // Step 4: Click into the search bar and type 'Mama'
    await automationService.moveMouseAndClickOnMessagesSearchInput();

    // Step 5: Pick who to text?
    await automationService.whoAreWeMessaging();

    // Step 6: Move mouse to click first option
    await automationService.moveMouseToFirstResultAndClick()
    
    // Step 5: Get random message
    const randomMessage = messageService.getRandomMessage();

    // Step 6: Populate the 'Text Message' input
    await automationService.populateTextMessage(randomMessage);

    // Step 7: Press return to send the message
    await automationService.pressReturnToSend();

    console.log(`Sent message to Mom: ${randomMessage}`);
  } catch (error) {
    console.error(`An error occurred: ${error}`);
  }
})();