// Get references to the necessary elements
const sendButton = document.getElementById('send-button');
const messageInput = document.getElementById('message-input');
const chatLog = document.getElementById('chat-log');

// Function to handle sending the user's message and receiving ChatGPT response
async function sendMessage() {
  // Get the user's message from the input field
  const message = messageInput.value;

  // Create a new chat message element for the user's message
  const userMessage = createMessageElement(message, 'user-message');
  chatLog.appendChild(userMessage);

  // Clear the input field
  messageInput.value = '';

  // Scroll to the bottom of the chat log
  chatLog.scrollTop = chatLog.scrollHeight;

  // Make API request to backend server for ChatGPT response
  try {
    const response = await axios.post('/api/chat', {
      message: message,
      secretKey: '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', // Replace with your actual secret key
    });

    // Get the generated message from the API response
    const generatedMessage = response.data.message;

    // Create a new chat message element for the generated message
    const botMessage = createMessageElement(generatedMessage, 'bot-message');
    chatLog.appendChild(botMessage);

    // Scroll to the bottom of the chat log
    chatLog.scrollTop = chatLog.scrollHeight;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Function to create a chat message element
function createMessageElement(content, className) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', className);
  messageElement.textContent = content;
  return messageElement;
}

// Event listener for the "Send" button click
sendButton.addEventListener('click', sendMessage);

// Add a keydown event listener to the message input field
messageInput.addEventListener('keydown', (event) => {
  // Check if the pressed key is the Enter key (key code 13)
  if (event.keyCode === 13) {
    event.preventDefault(); // Prevent the default behavior of the Enter key

    // Trigger the send button's click event
    sendButton.click();
  }
});
