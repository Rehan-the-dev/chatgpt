const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  appendMessage('user', message);
  userInput.value = '';
  setTimeout(() => {
    const reply = getBotReply(message);
    appendMessage('bot', reply);
  }, 500);
}

function quickReply(text) {
  userInput.value = text;
  sendMessage();
}

function appendMessage(sender, message) {
  const wrapper = document.createElement('div');
  wrapper.className = `message-wrapper ${sender}-wrapper`;

  const messageElem = document.createElement('div');
  messageElem.className = `message ${sender}`;
  messageElem.textContent = message;

  wrapper.appendChild(messageElem);
  chatBox.appendChild(wrapper);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(input) {
  const msg = input.toLowerCase();

  if (msg.includes('hello') || msg.includes('hi'))
    return 'Hello! How can I help you today?';
  if (msg.includes('hii chatbot'))
    return 'Hi there! How can I assist you?';
  if (msg.includes('how are you'))
    return 'I am doing well. What about you?';
  if (msg.includes('help'))
    return 'You can ask me about the current time, today\'s date, or ask for a random number.';
  if (msg.includes('current time') || msg.includes('time'))
    return `The current time is: ${new Date().toLocaleTimeString()}`;
  if (msg.includes('today') && msg.includes('date'))
    return `Today's date is: ${new Date().toLocaleDateString()}`;
  if (msg.includes('random number') || msg.includes('choose a random number')) {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    return `Here’s your random number: ${randomNumber}`;
  }
  if (msg.includes('thanks') || msg.includes('thank you'))
    return 'You are welcome.';

  return "I'm not sure how to respond to that. Try one of the quick options below.";
}
