import readline from 'readline';
import gradient from 'gradient-string';

const createGradientText = (text, colors) => gradient(colors)(text);

const clearAndDisplay = (message) => {
  console.clear();
  console.log(message);
};

const getUserInput = (query) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => rl.question(query, (answer) => {
    rl.close();
    resolve(answer);
  }));
};

const main = async () => {
  const promptMessage = createGradientText("Input your victim's WhatsApp number with '+' and country code after '+'", ['#ff5f6d', '#ffc371']);
  clearAndDisplay(promptMessage);
  const username = await getUserInput('');

  setTimeout(async () => {
    clearAndDisplay('');
    const logMessage = `Reports sending by @MogaTeam to WhatsApp number @${username}`;
    const gradientLogMessage = createGradientText(logMessage, ['#00c6ff', '#0072ff']);
    clearAndDisplay(gradientLogMessage);

    setInterval(() => {
      clearAndDisplay('');
      setTimeout(() => {
        clearAndDisplay(gradientLogMessage);
      }, 100);
    }, 500);
  }, 2000);
};

main();
